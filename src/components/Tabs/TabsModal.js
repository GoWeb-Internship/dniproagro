import React from 'react';
import Markdown from 'markdown-to-jsx';
import { XMarkIcon } from '@heroicons/react/24/solid';
import * as s from './Tabs.module.css';

export const TabsModal = ({ isModalShown, itemData, setIsModalShown }) => {
  const { item, description } = itemData;

  return (
    <>
      {itemData && (
        <div className={isModalShown ? s.modalShown : s.modalHidden}>
          <h2 className={s.modalTitle}>{item}</h2>

          <div className={s.descriptionBox}>
            <div className={s.modalDescription}>
              <Markdown>{description}</Markdown>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsModalShown(false)}
            className={s.closeModalBtn}
          >
            <XMarkIcon className={s.closeModalIcon} />
          </button>
        </div>
      )}
    </>
  );
};
