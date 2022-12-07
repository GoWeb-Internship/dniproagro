import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { TabsModal } from './TabsModal';
import * as s from './Tabs.module.css';

export const Tabs = ({ list, isAddition = false }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Tab.Group
        as="div"
        vertical
        className={s.tabsMainWrapper}
        defaultIndex={0}
      >
        <Tab.List as="ul" className={s.tabsList}>
          {list &&
            list?.map(({ item, image, alt }, index) => {
              return (
                <Tab as="li" className={s.tabItem} key={index}>
                  {({ selected }) => (
                    <button
                      type="button"
                      className={selected ? s.tabBtnActive : s.tabBtn}
                      onClick={() => {
                        isModalShown && setIsModalShown(false);
                      }}
                      aria-label="tab button"
                      aria-expanded={selected ? true : false}
                    >
                      <GatsbyImage
                        image={getImage(image)}
                        alt={alt}
                        className={s.tabImg}
                      />

                      <p className={s.tabTitleBox}>{item}</p>
                      <div
                        className={
                          selected ? s.tabTitleBoxActive : s.tabTitleBoxInactive
                        }
                      ></div>

                      <div
                        className={
                          selected ? s.overlayTabsActive : s.overlayTabsInactive
                        }
                      ></div>
                    </button>
                  )}
                </Tab>
              );
            })}
        </Tab.List>

        <Tab.Panels as="div" className={s.panelsWrapper}>
          {list &&
            list?.map((item, index) => {
              return (
                <Tab.Panel as="div" key={index} className={s.panel}>
                  {({ selected }) => (
                    <>
                      <div className={s.panelImgWrapper}>
                        <GatsbyImage
                          image={getImage(item?.image)}
                          alt={item?.alt}
                          className={s.panelImg}
                        />
                      </div>

                      <button
                        className={s.modalOpenBtn}
                        onClick={() => setIsModalShown(true)}
                      >
                        {isAddition ? t('culturesModalBtn') : item?.item}
                        <ChevronRightIcon className={s.modalOpenIcon} />
                      </button>

                      <TabsModal
                        isModalShown={isModalShown}
                        itemData={item}
                        setIsModalShown={setIsModalShown}
                      />
                    </>
                  )}
                </Tab.Panel>
              );
            })}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

Tabs.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      range: PropTypes.string,
      description: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
    }),
  ).isRequired,
  isAddition: PropTypes.bool,
};
