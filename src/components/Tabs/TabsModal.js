import React from 'react';
import Markdown from 'markdown-to-jsx';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as s from './Tabs.module.css';

export const TabsModal = ({
  isModalShown,
  itemData,
  setIsModalShown,
  isAddition,
}) => {
  const { item, description } = itemData;
  // const { t } = useTranslation();

  return (
    <>
      {itemData && (
        <div className={isModalShown ? s.modalShown : s.modalHidden}>
          <h2 className={s.modalTitle}>
            {item}
            {/* {isAddition ? `${item} ${t('culturesModalBtn')}` : item} */}
          </h2>

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
