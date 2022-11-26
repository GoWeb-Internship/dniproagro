import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import {
  modalShown,
  modalHidden,
  closeModalIcon,
  closeModalBtn,
  modalTitle,
  descriptionBox,
} from './Tabs.module.css';

export const TabsModal = ({ isModalShown, itemData, setIsModalShown }) => {
  const { item, description } = itemData;

  return (
    <div className={isModalShown ? modalShown : modalHidden}>
      <h2 className={modalTitle}>{item}</h2>

      <div className={descriptionBox}>
        <p>{description}</p>
      </div>

      <button
        type="button"
        onClick={() => setIsModalShown(false)}
        className={closeModalBtn}
      >
        <XMarkIcon className={closeModalIcon} />
      </button>
    </div>
  );
};
