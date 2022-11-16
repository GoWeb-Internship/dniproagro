import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Statistics } from 'components';

const About = ({ aboutCompany }) => {
  const title = aboutCompany?.title;
  const description = aboutCompany?.content;
  const buttonText = aboutCompany?.reporting?.title;
  const buttonLink = aboutCompany?.reporting?.path;
  // const image = getImage(
  //   aboutCompany && aboutCompany.bg_img && aboutCompany.bg_img.photo,
  // );
  const statistics = aboutCompany?.statistics;
  console.log(aboutCompany);
  return (
    <div className="">
      <h1 className="mt-[54px] mb-[72px] font-mulish text-[36px] font-bold leading-[45px] text-body-darkGreen">
        {title}
      </h1>
      <div className="flex h-full w-full">
        <div className="relative mr-6">
          <StaticImage
            src={aboutCompany?.bg_img?.photo}
            // src="../../../public/img/image-20.jpg"
            alt={aboutCompany?.bg_img?.alt}
            placeholder="blurred"
            layout="fixed"
            width={416}
            height={402}
            formats={['auto', 'webp', 'avif']}
          />
          <button
            type="button"
            className="absolute top-[85%] box-content w-[123px] p-4 font-mulish text-[20px] font-normal leading-[27px] text-body"
          >
            <Link className="flex items-center" to={buttonLink}>
              {buttonText}
              <ArrowRightIcon className="ml-[19px] w-6 stroke-2" />
            </Link>
          </button>
        </div>
        {/* <GatsbyImage
          image={image}
          alt={aboutCompany && aboutCompany.bg_img && aboutCompany.bg_img.alt}
        /> */}
        <p className="h-[402px] max-w-[724px] overflow-y-scroll rounded border border-body-darkGreen py-6 pr-[108px] pl-6 font-mulish text-[20px] font-normal leading-[27px] text-body-darkGreen">
          {description}
        </p>
      </div>
      <Statistics statistics={statistics} />
    </div>
  );
};
