/**
 * @type {import('gatsby').GatsbyConfig}
 *
 */

const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    //TODO розмістити метадані сайту та кастомний хук useSiteMetadata
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`uk`, `en`, `pl`, `de`],
        defaultLanguage: `uk`,
        generateDefaultLanguagePage: '/uk',
        siteUrl: ``,

        i18nextOptions: {
          lng: 'uk',
          load: 'currentOnly',

          interpolation: {
            escapeValue: false,
          },

          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
  ],
};

require('dotenv').config({
  path: `.env`,
});
