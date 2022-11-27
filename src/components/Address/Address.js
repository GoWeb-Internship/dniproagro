import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const Address = ({ address }) => {
  const { t } = useTranslation();
  const ourAddress = t('ourAddress');

  return (
    <div>
      <h3 className="mb-4 text-big font-bold">{ourAddress}</h3>
      <p className="text-[14px]">{address}</p>
    </div>
  );
};
