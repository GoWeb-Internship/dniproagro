import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as s from './Address.module.css';

export const Address = ({ address }) => {
  const { t } = useTranslation();
  const ourAddress = t('ourAddress');

  return (
    <div>
      <h3 className={s.title}>{ourAddress}</h3>
      <p className={s.description}>{address}</p>
    </div>
  );
};

Address.propTypes = {
  address: PropTypes.string,
};
