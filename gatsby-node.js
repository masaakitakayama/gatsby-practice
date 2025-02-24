const path = require("path");

exports.createPages = async ({ graphql, actions, createNodeId, createContentDigest }) => {
  const { createPage, createNode } = actions;

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
          featuredImage {
            node {
              sourceUrl
            }
          }
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

    // featuredImage を Buffer として扱う
    if (post.featuredImage && post.featuredImage.node.sourceUrl) {
      const imageBuffer = Buffer.from(post.featuredImage.node.sourceUrl);

      const imageNode = {
        id: createNodeId(`image-${post.id}`),
        parent: post.id,
        internal: {
          type: `ImageBuffer`,
          contentDigest: createContentDigest(imageBuffer),
        },
        buffer: imageBuffer,
      };

      createNode(imageNode);
    }
  });
};