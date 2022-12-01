import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Tab } from '@headlessui/react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { TabsModal } from './TabsModal';
import { Scroll } from 'components';
import * as s from './Tabs.module.css';

export const Tabs = ({ list, tabsPosition }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const breakpoints = useBreakpoint();
  const isDesktop = breakpoints.lg;

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
        <Tab.List
          as="ul"
          className={
            tabsPosition === 'right' ? s.tabsListRight : s.tabsListLeft
          }
        >
          <Scroll
            heigth={isDesktop ? 420 : 216}
            trackVerticalStyles={
              tabsPosition === 'right' ? s.rightTabsScroll : s.leftTabsScroll
            }
            thumbVerticalStyles="rounded-main bg-green"
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
          </Scroll>
        </Tab.List>

        <Tab.Panels
          as="div"
          className={
            tabsPosition === 'right'
              ? `${s.panelsWrapper} md:mr-[20px]`
              : `${s.panelsWrapper} md:ml-[20px]`
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
