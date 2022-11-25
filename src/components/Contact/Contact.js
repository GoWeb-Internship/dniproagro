import React from 'react';
import { SiTelegram, SiViber, SiWhatsapp } from 'react-icons/si';

export const Contact = ({ contactsArr }) => (
  <ul>
    {contactsArr?.map(
      ({ department, phone, telegram, viber, whatsapp }, index) => (
        <li key={index}>
          <ul>
            <li>
              <a href={telegram}>
                <SiTelegram />
              </a>
            </li>
            <li>
              <a href={viber}>
                <SiViber />
              </a>
            </li>
            <li>
              <a href={whatsapp}>
                <SiWhatsapp />
              </a>
            </li>
          </ul>
          <a href={`tel:${phone}`}>{phone}</a>
          <p>{department}</p>
        </li>
      ),
    )}
  </ul>
);
