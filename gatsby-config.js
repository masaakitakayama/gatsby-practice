/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`], // フォーマットを自動選択とJPEG,PNGに
          placeholder: `none`, // プレースホルダーを無効化
          quality: 30, // 画質を大幅に下げる
          breakpoints: [320, 640], // ブレークポイントを最小限に
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: { quality: 30 }, // JPEGの品質設定
          pngOptions: { quality: 30 }, // PNGの品質設定
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://takayama.cloudfree.jp/portfolio2/graphql`, // WordPressのURL
        html: {
          useGatsbyImage: true, // Gatsby Imageプラグインを使用
        },
        schema: {
          perPage: 20, // 以前はデフォルトの100
          requestConcurrency: 5, // 以前はデフォルトの15
          previewRequestConcurrency: 2, // 以前はデフォルトの5
        },
      },
    },
  ],
};