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
    title: `あなたのサイトのタイトル`,
    description: `サイトの説明文`,
    author: `@gatsbyjs`,
    siteUrl: `https://takayama.cloudfree.jp/portfolio2/`,
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
          formats: [`jpg`], // JPEGのみを使用
          placeholder: `none`, // プレースホルダーを無効化
          quality: 30, // 画質を大幅に下げる
          breakpoints: [768], // ブレークポイントを最小限に
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: { quality: 30 },
          pngOptions: { quality: 30 },
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
        url: `https://takayama.cloudfree.jp/portfolio2/graphql`,
        html: {
          useGatsbyImage: true,
        },
        schema: {
          perPage: 5, // 取得件数を最小限に
          requestConcurrency: 1, // 並列処理数を最小限に
          previewRequestConcurrency: 1, // プレビューの並列処理数を最小限に
        },
      },
    },
    // パフォーマンス改善のための追加プラグイン（必要に応じて追加）
    // `gatsby-plugin-preload-link-crossorigin`,
    // `gatsby-plugin-webpack-bundle-analyzer`,
  ],
};