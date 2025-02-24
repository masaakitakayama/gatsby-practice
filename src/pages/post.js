import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HTMLReactParser from 'html-react-parser'; // html-to-reactライブラリをインポート
import single from "/src/css/single.css";

const Post = ({ data }) => {
  const post = data.wpPost;

  // HTMLReactParserでコンテンツから<p>タグを抽出
  const parsedContent = HTMLReactParser(post.content);
  const firstParagraph = parsedContent.find(
    (element) => typeof element === 'object' && element.type === 'p'
  );
  let truncatedText = '';

  if (firstParagraph && typeof firstParagraph.props.children === 'string') {
    const text = firstParagraph.props.children;
    truncatedText = text.length > 50 ? text.slice(0, 50) + '...' : text;
  }

  return (
    <Layout>
      <Seo title={post.title} />
      <section>
        <div className="container">
          <h2>作品詳細</h2>
          <h3>{post.title}</h3>
          {post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData && (
            <GatsbyImage
              image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
              alt={post.title}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <p className="category-item__text">{truncatedText}</p>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 800, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;

export default Post;