import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Scrollbar, A11y } from 'swiper';
import { useStaticQuery, graphql } from 'gatsby';
import { Slider } from 'components/Slider/Slider';

export const Gallery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { chapter: { eq: "gallery" } } }
        ) {
          nodes {
            frontmatter {
              photos_list {
                alt
                photo
              }
            }
          }
        }
      }
    `,
  );

  const gallery = data?.allMarkdownRemark?.nodes;
  console.log(gallery);
  const photolist = gallery?.map(({ frontmatter }) => frontmatter.photos_list);
  console.log(photolist);
  return (
    <Slider className="max-xl:w-[1076px]">
      {data &&
        photolist[0]?.map(({ photo, alt }, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <img
                  className={
                    isActive ? 'h-[400px] w-[400px]' : 'h-[300px] w-[300px]'
                  }
                  // className="h-[300px] w-[350px]"
                  src={photo}
                  alt={alt}
                />
              )}
              {/* <div className=" h-[300px] w-[300px] bg-red-700">{alt}</div> */}
            </SwiperSlide>
          );
        })}
    </Slider>
  );
};
