import React, { Fragment } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { tabBtn, tabImg, tabTitleBox } from './Tabs.module.css';
import { Tab } from '@headlessui/react';

const Tabs = ({ list }) => {
  // const { alt, culture, description, image } = cultureItem;
  console.log(list);

  return (
    <>
      <Tab.Group vertical>
        <Tab.List>
          {list &&
            list.map(({ culture, image, alt }, index) => {
              return (
                <Tab as={Fragment} key={index}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button className={selected ? tabBtn : tabBtn}>
                      {culture}
                      <img src={image} alt={alt} className={tabImg} />
                    </button>
                  )}
                </Tab>
              );
            })}
        </Tab.List>
        <Tab.Panels>
          {list &&
            list.map(({ culture, image, alt }, index) => {
              console.log(culture);
              return (
                <Tab.Panel key={index}>
                  {culture}
                  <img src={image} alt={alt} className={tabImg} />
                </Tab.Panel>
              );
            })}
        </Tab.Panels>
      </Tab.Group>

      {/* <button className={tabBtn}> */}
      {/* <GatsbyImage image={image} alt={alt} /> */}
      {/* <img src={image} alt={alt} className={tabImg} /> */}
      {/* <div className={tabTitleBox}>{culture}</div> */}
      {/* </button> */}

      {/* <div className={tabWrapper}> */}
      {/* <ul>
        {cultureItem
          ? cultureItem.cultures_list.map(({ culture, alt, image }, index) => {
              return (
                <li key={index}>
                    <button className={tabBtn}>
                  <GatsbyImage image={image} alt={alt} />
                      <img src={image} alt={alt} className={tabImg} />
                  <div className={tabTitleBox}>{culture}</div>
                     </button>
                </li>
              );
            })
          : null}
      </ul> */}
      {/* </div> */}

      {/* {selectedCulture && (
        <>
          <div className={selectedImgWrapper}>
            <img
              src={selectedCulture.image}
              alt={selectedCulture.alt}
              className={selectedImg}
            />
            <button className={modalBtn}>{selectedCulture.culture}</button>
          </div>
        </>
      )} */}
    </>
  );
};

export default Tabs;
