import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const Address = ({ address }) => {
  const { t } = useTranslation();
  const ourAddress = t('ourAddress');

  return (
    <div>
      <h3>{ourAddress}</h3>
      <p>{address}</p>
    </div>
  );
};
