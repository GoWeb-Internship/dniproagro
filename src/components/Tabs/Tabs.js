import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Tab } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { TabsModal } from './TabsModal';
import { Scroll } from 'components';
import * as s from './Tabs.module.css';

export const Tabs = ({ list, tabsPosition }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <Tab.Group
        as="div"
        vertical
        className={
          tabsPosition === 'right'
            ? `${s.tabsMainWrapper} md:flex-row-reverse`
            : `${s.tabsMainWrapper} md:flex-row`
        }
        defaultIndex={0}
      >
        {/* <div
          className={
            tabsPosition === 'right'
              ? `${s.scrollboxLeft} scrollbar`
              : `${s.scrollboxRight} scrollbar`
          }
        > */}
        <Scroll
          heigth={400}
          trackVerticalStyles="op-0 right-0 h-full !w-[8px] rounded-main border border-green"
          thumbVerticalStyles="rounded-main bg-green"
        >
          <Tab.List
            as="ul"
            className={
              tabsPosition === 'right' ? s.tabsListRight : s.tabsListLeft
            }
          >
            {list &&
              list?.map(({ item, image, alt }, index) => {
                return (
                  <Tab as="li" className={s.tabItem} key={index}>
                    {({ selected }) => (
                      <button
                        type="button"
                        className={selected ? s.tabBtn : s.tabBtn}
                        onClick={() => {
                          isModalShown && setIsModalShown(false);
                        }}
                      >
                        <GatsbyImage
                          image={getImage(image)}
                          alt={alt}
                          className={s.tabImg}
                        />

                        <p className={s.tabTitleBox}>{item}</p>
                      </button>
                    )}
                  </Tab>
                );
              })}
          </Tab.List>
        </Scroll>
        {/* </div> */}

        <Tab.Panels
          as="div"
          className={
            tabsPosition === 'right'
              ? `${s.panelsWrapper} md:mr-8 xl:mr-[58px]`
              : `${s.panelsWrapper} md:ml-8 xl:ml-[58px]`
          }
        >
          {list &&
            list?.map((item, index) => {
              return (
                <Tab.Panel as="div" key={index} className={s.panel}>
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
                    {item?.item}
                    <ChevronRightIcon className={s.modalOpenIcon} />
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
