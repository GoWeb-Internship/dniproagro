import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
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

const Form = () => {
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const { title } = t('form', {
    returnObjects: true,
  });
  // const { required, name, email, message, success } = t('formValidation', {
  //   returnObjects: true,
  // })
  // const { title, nameInput, emailInput, messageInput, submit } = t('form', {
  //   returnObjects: true,
  // })

  const schema = yup
    .object({
      name: yup
        .string()
        .trim()
        .required()
        .min(2)
        .max(100)
        .matches(/^[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ]{1}[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ' ]+$/),
      phone: yup.string().trim().required().min(7),
      email: yup
        .string()
        .email()
        .required()
        .max(63)
        .matches(
          /(?!-)^(?:[aA-zZ0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[aA-zZ0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*"){3}@(?:(?:[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?\.)+[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[aA-zZ0-9-]*[aA-zZ0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g,
        ),
      message: yup.string().required().min(20).max(2000),
    })
    .required();

  const createNotification = () => NotificationManager.success('Відправлено');
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

  const onSubmit = (data, e) => {
    try {
      e.preventDefault();
      //   let sendMessage = () => {};
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
    <div className={s.mainWrapper}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{title} </h2>
        <p className={s.subTitle}>Заповнити дані</p>
        <form method="POST" name="contact" onSubmit={handleSubmit(onSubmit)}>
          <div className={s.wrapperInputs}>
            <div className={s.inputWrapper}>
              <input
                className={errors.name === undefined ? s.input : s.inputRed}
                {...register('name')}
                placeholder="Ім’я"
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
                    inputClass={
                      errors.phone === undefined ? s.input : s.inputRed
                    }
                    buttonClass={s.dropdown}
                    country={'ua'}
                    {...field}
                  />
                )}
              />
              {/* <PhoneInput
                // className={errors.phone === undefined ? s.input : s.inputRed}
                inputClass={errors.phone === undefined ? s.input : s.inputRed}
                country={'ua'}
                {...register('phone')}
                fullWidth="true"
                inputProps={
                  {
                    // name: 'phone',
                    // {...register('phone')}
                    // required: true,
                    // autoFocus: true,
                  }
                }
              /> */}
              {/* <input
                className={errors.phone === undefined ? s.input : s.inputRed}
                {...register('phone')}
                placeholder="+380 825 23 73"
              /> */}
              <p className={s.errorMsg}>{errors.phone?.message}</p>
            </div>

            <div className={s.inputWrapper}>
              <input
                className={errors.email === undefined ? s.input : s.inputRed}
                {...register('email')}
                placeholder="Email"
              />
              <p className={s.errorMsg}>{errors.email?.message}</p>
            </div>

            <div className={s.inputWrapper}>
              <textarea
                className={
                  errors.message === undefined ? s.textarea : s.textareaRed
                }
                {...register('message')}
                placeholder="Написати нам"
              />
              <p className={s.errorMsgTextarea}>{errors.message?.message}</p>
            </div>
          </div>

          <button aria-label="submit form" className={s.button} type="submit">
            Відправити
          </button>
        </form>
        <NotificationContainer />
      </div>
    </div>
  );
};

export default Form;
