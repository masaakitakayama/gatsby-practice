import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import single from "/src/css/single.css"

const Post = ({ data }) => {
  const post = data.wpPost;

  return (
    <Layout>
      <Seo title={post.title} />
      <section>
        <div className="container">
          <h2>作品詳細</h2>
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
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