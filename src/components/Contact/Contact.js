import React from 'react';
import * as s from './Contact.module.css';
import telegramImg from 'assets/images/telegram.svg';
import viberImg from 'assets/images/viber.svg';
import whatsappImg from 'assets/images/whatsapp.svg';

export const Contact = ({ contactsArr }) => (
  <ul className={s.contactsList}>
    {contactsArr?.map(
      ({ department, phone, telegram, viber, whatsapp }, index) => (
        <li className="" key={index}>
          <ul className={s.messengerList}>
            <li className={s.messengerListItem}>
              <a href={telegram}>
                <img src={telegramImg} className={s.icon} alt="telegram" />
              </a>
            </li>
            <li className={s.messengerListItem}>
              <a href={viber}>
                <img src={viberImg} className={s.icon} alt="viber" />
              </a>
            </li>
            <li className={s.messengerListItem}>
              <a href={whatsapp}>
                <img src={whatsappImg} className={s.icon} alt="whatsapp" />
              </a>
            </li>
          </ul>
          <a className={s.link} href={`tel:${phone}`}>
            {phone}
          </a>
          <p className={s.text}>{department}</p>
        </li>
      ),
    )}
  </ul>
);
