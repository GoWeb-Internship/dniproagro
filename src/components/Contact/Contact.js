import React from 'react';
import PropTypes from 'prop-types';
import telegramImg from 'assets/images/telegram.svg';
import viberImg from 'assets/images/viber.svg';
import whatsappImg from 'assets/images/whatsapp.svg';
import * as s from './Contact.module.css';

export const Contact = ({ contactsArr }) => (
  <ul className={s.contactsList}>
    {contactsArr?.map(
      ({ department, phone, telegram, viber, whatsapp }, index) => (
        <li className="" key={index}>
          <ul className={s.messengerList}>
            <li>
              <a className={s.messengerLink} href={telegram}>
                <div className={s.imgWpapper}>
                  <img src={telegramImg} className={s.icon} alt="telegram" />
                </div>
              </a>
            </li>
            <li>
              <a className={s.messengerLink} href={viber}>
                <div className={s.imgWpapper}>
                  <img src={viberImg} className={s.icon} alt="viber" />
                </div>
              </a>
            </li>
            <li>
              <a className={s.messengerLink} href={whatsapp}>
                <div className={s.imgWpapper}>
                  <img src={whatsappImg} className={s.icon} alt="whatsapp" />
                </div>
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

Contact.propTypes = {
  contactsArr: PropTypes.array,
};
