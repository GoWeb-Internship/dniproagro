import React from 'react';
import { SiTelegram, SiViber, SiWhatsapp } from 'react-icons/si';

export const Contact = ({ contactsArr }) => (
  <ul className="my-9 grid grid-cols-2 gap-x-[18px] gap-y-9 xl:grid-cols-3">
    {contactsArr?.map(
      ({ department, phone, telegram, viber, whatsapp }, index) => (
        <li className="" key={index}>
          <ul className="mb-2 flex gap-4">
            <li className="cursor-pointer">
              <a href={telegram}>
                <SiTelegram />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href={viber}>
                <SiViber />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href={whatsapp}>
                <SiWhatsapp />
              </a>
            </li>
          </ul>
          <a className="cursor-pointer font-light" href={`tel:${phone}`}>
            {phone}
          </a>
          <p className="pt-2 text-[14px]">{department}</p>
        </li>
      ),
    )}
  </ul>
);
