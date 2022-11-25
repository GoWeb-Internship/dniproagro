import * as React from 'react';
import { withLayout } from 'layout';
import { About, Contacts, Cultures } from 'views';

const IndexPage = () => {
  // const slide_img = [
  //   'https://swiperjs.com/demos/images/nature-1.jpg',
  //   'https://swiperjs.com/demos/images/nature-2.jpg',
  //   'https://swiperjs.com/demos/images/nature-3.jpg',
  //   'https://swiperjs.com/demos/images/nature-4.jpg',
  //   'https://swiperjs.com/demos/images/nature-5.jpg',
  //   'https://swiperjs.com/demos/images/nature-6.jpg',
  //   'https://swiperjs.com/demos/images/nature-7.jpg',
  //   'https://swiperjs.com/demos/images/nature-8.jpg',
  // ];

  return (
    <>
      {/* слоган */}
      {/* <Section id={SLOGAN}></Section> */}

      {/* про компанію */}
      <About />

      {/* культури */}
      <Cultures />
      {/* персонал */}

      {/* <Section id={PERSONNEL}></Section> */}

      {/* техзасоби */}
      {/* <Section id={EQUIPMENTS}></Section> */}

      {/* галерея */}
      {/* <Section id={GALLERY}></Section> */}

      {/* контакти */}
      <Contacts />
    </>
  );
};

export default withLayout(IndexPage);

export const Head = () => <title>Home Page</title>;
