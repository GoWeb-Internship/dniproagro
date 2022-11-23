/**
 * @type {import('gatsby').GatsbyConfig}
 *
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    //TODO розмістити метадані сайту та кастомний хук useSiteMetadata
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src`,
    //     name: 'src',
    //   },
    // },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    `gatsby-plugin-root-import`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-remark-relative-images`,
      options: {
        // [Optional] The root of "media_folder" in your config.yml
        // Defaults to "static"
        staticFolderName: 'static',
        // [Optional] Include the following fields, use dot notation for nested fields
        // All fields are included by default
        include: ['featured'],
        // [Optional] Exclude the following fields, use dot notation for nested fields
        // No fields are excluded by default
        exclude: ['featured.skip'],
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
  ],
};

require('dotenv').config({
  path: `.env`,
});
