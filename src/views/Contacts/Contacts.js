import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Section, SectionTitle, Address, Form, Contact } from 'components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Map from 'components/Map/Map';
import { section } from './Contacts.module.css';

export const Contacts = () => {
  const { i18n } = useTranslation();

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { chapter: { eq: "contacts" } } }
      ) {
        nodes {
          frontmatter {
            language
            title
            chapter
            contacts {
              department
              phone
              telegram
              viber
              whatsapp
            }
            address
            email
          }
        }
      }
    }
  `);

  const contacts = nodes?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;

  const title = contacts?.title;
  const email = contacts?.email;
  const address = contacts?.address;
  const contactsArr = contacts?.contacts;
  const chapter = contacts?.chapter;

  return (
    <Section className={section} id={chapter}>
      <div className="md:grid md:grid-cols-2 md:gap-[32px] xl:gap-[125px]">
        <div>
          <SectionTitle title={title} />
          <a
            className="cursor-pointer font-light lowercase"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <Contact contactsArr={contactsArr} />
          <Address address={address} />
          <div className="w-[calc(100% + 40px)] -mx-5 my-9 h-[164px] md:mx-0 md:h-[98px] xl:h-[232px]">
            <Map />
          </div>
        </div>
        <div className="justify-self-end">
          <Form />
        </div>
      </div>
    </Section>
  );
};
