import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const Address = ({ address }) => {
  const { i18n } = useTranslation();

  return (
    <div>
      <h3>Наша адреса</h3>
      <p>{address}</p>
    </div>
  );
};
