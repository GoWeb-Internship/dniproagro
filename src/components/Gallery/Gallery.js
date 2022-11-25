// import React from 'react';
// import { SwiperSlide } from 'swiper/react';
// import { useStaticQuery, graphql } from 'gatsby';
// import { Slider } from 'components/Slider/Slider';
// import { Section } from 'components/Section/Section';

// // export const Gallery = () => {
// //   const data = useStaticQuery(
// //     graphql`
// //       query {
// //         allMarkdownRemark(
// //           filter: { frontmatter: { chapter: { eq: "gallery" } } }
// //         ) {
// //           nodes {
// //             frontmatter {
// //               photos_list {
// //                 alt
// //                 photo
// //               }
// //             }
// //           }
// //         }
// //       }
// //     `,
// //   );

//   const gallery = data?.allMarkdownRemark?.nodes;
//   const photolist = gallery?.map(({ frontmatter }) => frontmatter.photos_list);

//   return (
//     <Section>
//       <Slider
//         slidesPerGroup={3}
//         className="items-end   md:w-[704px] xl:w-[1076px]"
//       >
//         {data &&
//           photolist[0]?.map(({ photo, alt }, index) => {
//             return (
//               <SwiperSlide key={index}>
//                 {({ isActive }) => (
//                   <img
//                     className={
//                       isActive ? 'h-[495px] w-[417px]' : 'h-[442px] w-[306px]'
//                     }
//                     src={photo}
//                     alt={alt}
//                   />
//                 )}
//                 {/* <div className=" h-[300px] w-[300px] bg-red-700">{alt}</div> */}
//               </SwiperSlide>
//             );
//           })}
//       </Slider>
//     </Section>
//   );
// };

// export const Gallery = ({ images }) => {
//   return (
//     <Section>
//       <Slider
//         slidesPerGroup={3}
//         className="items-end   md:w-[704px] xl:w-[1076px]"
//       >
//         {data &&
//           photolist[0]?.map(({ photo, alt }, index) => {
//             return (
//               <SwiperSlide key={index}>
//                 {({ isActive }) => (
//                   <img
//                     className={
//                       isActive ? 'h-[495px] w-[417px]' : 'h-[442px] w-[306px]'
//                     }
//                     src={photo}
//                     alt={alt}
//                   />
//                 )}
//                 {/* <div className=" h-[300px] w-[300px] bg-red-700">{alt}</div> */}
//               </SwiperSlide>
//             );
//           })}
//       </Slider>
//     </Section>
//   );
// };

// // export const Gallery = ({ images }) => {
// //   return (
// //     <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
// //       {images &&
// //         images.map(image => (
// //           <li key={image}>
// //             <img src={image} alt="" />
// //           </li>
// //         ))}
// //     </ul>
// //   );
// // };
