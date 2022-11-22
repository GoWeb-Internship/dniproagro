import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { tabBtn, tabImg } from './Tab.module.css';

const Tab = ({ cultureItem }) => {
  const { alt, culture, description, image, culture_range } = cultureItem;

  return (
    <button className={tabBtn}>
      {/* <GatsbyImage image={image} alt={alt} /> */}
      <img src={image} alt={alt} className={tabImg} />
      <div></div>
    </button>
  );
};

export default Tab;
