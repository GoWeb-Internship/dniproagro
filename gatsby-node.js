// const { createFilePath } = require(`gatsby-source-filesystem`);
const LoadablePlugin = require('@loadable/webpack-plugin');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     });
//   }
// };

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  });
};
