import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { modalShown, modalHidden, closeModalIcon } from './Tabs.module.css';

const TabsModal = ({ isModalShown, cultureData, setIsModalShown }) => {
  const { culture, description } = cultureData;

  return (
    <div className={isModalShown ? modalShown : modalHidden}>
      <h2>{culture}</h2>
      <p>{description}</p>
      <button type="button" onClick={() => setIsModalShown(false)}>
        <XMarkIcon className={closeModalIcon} />
      </button>
    </div>
  );
};

export default TabsModal;
