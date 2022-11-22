import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { tabBtn, tabImg, tabTitleBox } from './Tab.module.css';

const Tab = ({ cultureItem }) => {
  const { alt, culture, description, image } = cultureItem;

  return (
    <button className={tabBtn}>
      {/* <GatsbyImage image={image} alt={alt} /> */}
      <img src={image} alt={alt} className={tabImg} />
      <div className={tabTitleBox}>{culture}</div>
    </button>
  );
};

export default Tab;
