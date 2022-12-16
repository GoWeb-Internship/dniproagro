/**
 * @type {import('gatsby').GatsbyConfig}
 *
 */

const myCustomQueries = {
  sm: '(max-width: 767.98px)',
  md: '(min-width: 768px)',
  mdt: '(max-width: 1279.98px)',
  lg: '(min-width: 1280px)',
};

// const getGoogleTagManagerId = setTimeout(
//   () => process.env.GOOGLE_TAGMANAGER_ID,
//   3000,
// );
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `DniproAgro`,
    description: ``,
    author: `GoWeb`,
    siteUrl: `https://lucent-semolina-877c33.netlify.app/`,
  },

  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/img`,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-image`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 75,
          breakpoints: [375, 480, 768, 1280, 1440],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
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
        languages: [`uk`, `en`, `de`, `pl`],
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
          nsSeparator: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: 605102281370010,
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
      },
    },
  ],
};
