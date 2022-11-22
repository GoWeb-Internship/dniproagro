import React from 'react';

export const Gallery = ({ images }) => {
  return (
    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
      {images &&
        images.map(image => (
          <li key={image}>
            <img src={image} alt="" />
          </li>
        ))}
    </ul>
  );
};
