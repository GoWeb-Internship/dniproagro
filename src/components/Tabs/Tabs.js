import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Tab } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { TabsModal } from './TabsModal';
import {
  tabBtn,
  tabImg,
  tabTitleBox,
  tabsMainWrapper,
  panelsWrapper,
  panel,
  panelImg,
  panelImgWrapper,
  tabsList,
  tabItem,
  modalOpenBtn,
  modalOpenIcon,
} from './Tabs.module.css';

export const Tabs = ({ list, tabsPosition }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <Tab.Group
        as="div"
        vertical
        className={
          tabsPosition === 'right'
            ? `${tabsMainWrapper} flex-row-reverse`
            : `${tabsMainWrapper} flex-row`
        }
        defaultIndex={0}
      >
        <Tab.List as="ul" className={tabsList}>
          {list &&
            list.map(({ item, image, alt }, index) => {
              return (
                <Tab as="li" className={tabItem} key={index}>
                  {({ selected }) => (
                    <button
                      type="button"
                      className={selected ? tabBtn : tabBtn}
                      onClick={() => {
                        isModalShown && setIsModalShown(false);
                      }}
                    >
                      <GatsbyImage
                        image={getImage(image)}
                        alt={alt}
                        className={tabImg}
                      />

                      <div className={tabTitleBox}>{item}</div>
                    </button>
                  )}
                </Tab>
              );
            })}
        </Tab.List>

        <Tab.Panels as="div" className={panelsWrapper}>
          {list &&
            list.map((item, index) => {
              return (
                <Tab.Panel as="div" key={index} className={panel}>
                  <div className={panelImgWrapper}>
                    <GatsbyImage
                      image={getImage(item.image)}
                      alt={item.alt}
                      className={panelImg}
                    />
                  </div>

                  <button
                    className={modalOpenBtn}
                    onClick={() => setIsModalShown(true)}
                  >
                    {item.item}
                    <ChevronRightIcon className={modalOpenIcon} />
                  </button>

                  <TabsModal
                    isModalShown={isModalShown}
                    itemData={item}
                    setIsModalShown={setIsModalShown}
                  />
                </Tab.Panel>
              );
            })}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};
