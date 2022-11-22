import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Tab = ({ cultureItem }) => {
  console.log(cultureItem);

  // console.log(culture);
  const { alt, culture, description, image } = cultureItem;
  console.log(image);

  return (
    // <button>
    <GatsbyImage image={image} alt={alt} />
    // </button>
  );
};

export default Tab;
