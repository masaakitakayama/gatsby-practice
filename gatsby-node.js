const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // /using-dsg ページを生成
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });

  // WordPress の投稿ページを生成
  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allWpPost.nodes;

  posts.forEach((post) => {
    createPage({
      path: `/${post.slug}`,
      component: path.resolve("./src/pages/post.js"),
      context: {
        id: post.id,
      },
    });
  });
};