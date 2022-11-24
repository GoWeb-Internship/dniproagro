import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Tab } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
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
  panelTitleBox,
} from './Tabs.module.css';
import TabsModal from './TabsModal';

const Tabs = ({ list, tabsPosition }) => {
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
            list.map(({ culture, image, alt }, index) => {
              return (
                <Tab as="li" className={tabItem} key={index}>
                  {({ selected }) => (
                    <button
                      type="button"
                      className={selected ? tabBtn : tabBtn}
                    >
                      <GatsbyImage
                        image={getImage(image)}
                        alt={alt}
                        className={tabImg}
                      />

                      <div className={tabTitleBox}>{culture}</div>
                    </button>
                  )}
                </Tab>
              );
            })}
        </Tab.List>

        <Tab.Panels as="div" className={panelsWrapper}>
          {list &&
            list.map((culture, index) => {
              return (
                <Tab.Panel as="div" key={index} className={panel}>
                  <div className={panelImgWrapper}>
                    <GatsbyImage
                      image={getImage(culture.image)}
                      alt={culture.alt}
                      className={panelImg}
                    />
                  </div>

                  <button
                    className={panelTitleBox}
                    onClick={() => setIsModalShown(true)}
                  >
                    {culture.culture}
                  </button>

                  <TabsModal
                    isModalShown={isModalShown}
                    cultureData={culture}
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

export default Tabs;
