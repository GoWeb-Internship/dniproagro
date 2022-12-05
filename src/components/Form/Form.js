import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import * as yup from 'yup';
import { sendMessage } from '../../utils/telegramApi';
import * as s from './Form.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { locationApi } from 'utils/locationApi';

export const Form = () => {
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const {
    required,
    name,
    nameMin,
    nameMax,
    phoneMax,
    phoneMin,
    email,
    emailMax,
    messageMin,
    messageMax,
    success,
  } = t('formValidation', {
    returnObjects: true,
  });
  const {
    title,
    subTitle,
    nameInput,
    emailInput,
    messageInput,
    submit,
    phonePlaceholder,
  } = t('form', {
    returnObjects: true,
  });

  const schema = yup
    .object({
      name: yup
        .string()
        .trim()
        .required(t(required))
        .min(2, t(nameMin))
        .max(100, t(nameMax))
        .matches(
          /^[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ]{1}[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ' ]+$/,
          t(name),
        ),
      phone: yup
        .string()
        .trim()
        .required(t(required))
        .min(7, t(phoneMin))
        .max(17, t(phoneMax)),
      email: yup
        .string()
        .email(t(email))
        .required(t(required))
        .max(63, t(emailMax))
        .matches(
          /(?!-)^(?:[aA-zZ0-9_-]+(?:\.[aA-zZ0-9_-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*"){3}@(?:(?:[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?\.)+[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[aA-zZ0-9-]*[aA-zZ0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g,
          t(email),
        ),
      message: yup
        .string()
        .required(t(required))
        .min(20, t(messageMin))
        .max(2000, t(messageMax)),
    })
    .required();

  const createNotification = () => NotificationManager.success(t(success));
  const createNotificationError = () =>
    NotificationManager.error('error in API');

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [userLocation, setUserLocation] = React.useState('');

  locationApi()
    .then(location => setUserLocation(location))
    .catch(err => console.log(err));

  const onSubmit = (data, e) => {
    try {
      e.preventDefault();
      // --- TELEGRAM ---
      let text = `<b>Повідомлення з сайту!</b>\n`;
      text += `<b>Відправник: </b> ${data.name}\n`;
      text += `<b>Телефон: </b> ${data.phone}\n`;
      text += `<b>Пошта: </b> ${data.email}\n`;
      text += `<b>Повідомлення: </b> ${data.message}\n`;
      text += `<b>Форма отримана з:</b>\n`;
      text += `<a href="https://xxx.netlify.app/">https://xxx.netlify.app/</a>`;
      const res = sendMessage(text);
      res.then(res => {
        res?.data.ok ? createNotification() : createNotificationError();
      });
      reset();
    } catch (error) {
      setError(true);
    } finally {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.subTitle}>{subTitle}</p>
      <form method="POST" name="contact" onSubmit={handleSubmit(onSubmit)}>
        <div className={s.wrapperInputs}>
          <div className={s.inputWrapper}>
            <input
              className={errors.name === undefined ? s.input : s.inputRed}
              {...register('name')}
              placeholder={t(nameInput)}
            />
            <p className={s.errorMsg}>{errors.name?.message}</p>
          </div>
          <div className={s.inputWrapper}>
            <Controller
              control={control}
              name="phone"
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  placeholder={t(phonePlaceholder)}
                  inputClass={
                    errors.phone === undefined ? s.phoneInput : s.phoneInputRed
                  }
                  buttonClass={s.dropdownBtn}
                  dropdownClass={s.dropdown}
                  country={userLocation || 'ua'}
                  preferredCountries={['ua', 'pl', 'us', 'de', 'gb']}
                  {...field}
                />
              )}
            />
            <p className={s.errorMsg}>{errors.phone?.message}</p>
          </div>
          <div className={s.inputWrapper}>
            <input
              className={errors.email === undefined ? s.input : s.inputRed}
              {...register('email')}
              placeholder={t(emailInput)}
            />
            <p className={s.errorMsg}>{errors.email?.message}</p>
          </div>

          <div className={s.inputWrapper}>
            <textarea
              className={
                errors.message === undefined ? s.textarea : s.textareaRed
              }
              {...register('message')}
              placeholder={t(messageInput)}
            />
            <p className={s.errorMsgTextarea}>{errors.message?.message}</p>
          </div>
        </div>

        <button aria-label="submit form" className={s.button} type="submit">
          {t(submit)}
        </button>
      </form>
      <NotificationContainer />
    </div>
  );
};

Form.propTypes = {
  sendMessage: PropTypes.func,
  locationApi: PropTypes.func,
};
