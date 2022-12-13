import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import telegramImg from 'assets/images/telegram.svg';
import viberImg from 'assets/images/viber.svg';
import whatsappImg from 'assets/images/whatsapp.svg';
import * as s from './Contact.module.css';

export const Contact = ({ contactsArr }) => {
  const { t } = useTranslation();
  const contact = t('contact', {
    returnObjects: true,
  });

  return (
    <ul className={s.contactsList}>
      {contactsArr?.map(
        ({ department, phone, telegram, viber, whatsapp }, index) => (
          <li className="" key={index}>
            <ul className={s.messengerList}>
              <li>
                <a
                  className={s.messengerLink}
                  href={`https://t.me/${telegram}`}
                  aria-label={contact.telegramAriaL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <div className={s.imgWpapper}>
                    <img
                      src={telegramImg}
                      className={s.icon}
                      alt={contact.telegramAlt}
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  className={s.messengerLink}
                  href={`viber://chat?number=%2B${viber}`}
                  aria-label={contact.viberAriaL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <div className={s.imgWpapper}>
                    <img
                      src={viberImg}
                      className={s.icon}
                      alt={contact.viberAlt}
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  className={s.messengerLink}
                  href={`https://wa.me/${whatsapp}`}
                  aria-label={contact.whatsappAriaL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <div className={s.imgWpapper}>
                    <img
                      src={whatsappImg}
                      className={s.icon}
                      alt={contact.whatsappAlt}
                    />
                  </div>
                </a>
              </li>
            </ul>
            <a className={s.link} href={`tel:${phone}`} aria-label={phone}>
              {phone}
            </a>
            <p className={s.text}>{department}</p>
          </li>
        ),
      )}
    </ul>
  );
};

Contact.propTypes = {
  contactsArr: PropTypes.array,
};
