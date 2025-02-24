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
    title: `あなたのサイトのタイトル`, // サイトのタイトル
    description: `サイトの説明文`, // サイトの説明文
    author: `@gatsbyjs`, // あなたの名前または組織名
    siteUrl: `https://takayama.cloudfree.jp/portfolio2/`, // 実際のサイトURL
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
          formats: [`auto`],
          placeholder: `blurred`, // または `dominantColor`
          quality: 80, // 画質を調整
          breakpoints: [320, 480, 768, 1024, 1280, 1920], // ブレークポイントを調整
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: { quality: 80 },
          pngOptions: { quality: 80 },
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`, // サイト名
        short_name: `starter`, // サイトの略称
        start_url: `/`,
        background_color: `#663399`, // 背景色
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // アイコン画像のパス
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://takayama.cloudfree.jp/portfolio2/graphql`,
        html: {
          useGatsbyImage: true,
        },
        schema: {
          perPage: 20,
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
        },
      },
    },
    // パフォーマンス改善のための追加プラグイン（必要に応じて追加）
    // `gatsby-plugin-preload-link-crossorigin`,
    // `gatsby-plugin-webpack-bundle-analyzer`,
  ],
};