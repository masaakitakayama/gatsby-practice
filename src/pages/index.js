import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HTMLReactParser from 'html-react-parser';  // html-to-reactライブラリをインポート

const IndexPage = ({ data }) => {
  const posts = data?.allWpPost?.nodes;
  const categories = [
    "Landingpages",
    "Wordpress",
    "Banners",
    "Photos",
    "Videos",
    "Others",
  ];

  return (
    <Layout>
      <Seo title="Home" />
      <section>
        <div className="firstview">
          {/* <StaticImage className="image" src="../images/firstview_bg1.jpg" alt="First View" /> */}
        </div>
      </section>

      <section>
        <div id="About" className="about">
          <div className="container">
            <h2 className="main-title">About</h2>
            <div className="row align-items-center">
              <div className="col-12 col-md-8 col-xl-3 offset-md-2 offset-xl-0">
                <div className="image-outer">
                  <StaticImage className="image" src="../images/about_img.png" alt="M.Tの画像" />
                </div>
              </div>
              <div className="col-12 col-xl-9">
                <span className="name">M.T</span>
                <p className="text">
                  私は中高6年間陸上競技の走幅跳と三段跳をしていました。陸上競技を通して仲間と協力する事の大切さや継続して物事に取り組む事の大切さを学びました。現在利用している就労移行支援で学んだウェブデザイン、動画制作のスキルを生かして様々な会社が抱える課題を解決していきたいです。
                </p>
              </div>
            </div>
            <Link to="/about" className="button">
              自己紹介詳細へ
              <div className="button-left">
                <div className="arrow"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category}>
          <div className="container">
            <h2 className="sub-title">{category}</h2>
            <ul>
              <div className="row align-items-center">
                {posts &&
                  posts
                    .filter((post) =>
                      post.categories.nodes.some((node) => node.name === category)
                    )
                    .slice(0, 3) // 最新3件に制限
                    .map((post) => {
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
                        <div className="col-12 col-md-8 col-xl-4" key={post.id}>
                          <li className="category-item">
                            <div>
                              <Link to={`/${post.slug}`}>
                                {post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData && (
                                  <GatsbyImage
                                    image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                    alt={post.title} // 画像のalt属性にタイトルを設定
                                  />
                                )}
                              </Link>
                            </div>
                            <h3>{post.title}</h3>
                            <p className="category-item__text">{truncatedText}</p>
                          </li>
                        </div>
                      );
                    })}
              </div>
            </ul>
            <Link to={`/category/${category.toLowerCase()}`} className="button">
              {category}の一覧
              <div className="button-left">
                <div className="arrow"></div>
              </div>
            </Link>
          </div>
        </section>
      ))}

    <section>
        <div className="container">
        <div id="Skills" className="skills">
          <div className="container">
            <h2 className="main-title">Skills</h2>
            <div className="outer">
              <div className="row">
                  <div className="col-12 col-md-6 col-xl-4 box">
                    <h5 className="box-name">HTML・CSS/Sass</h5>
                  <div className="image-outer">
                  <span class="persent persent-2">90%</span>
                      <StaticImage imgClassName="image" src="../images/circle.png" alt="" />
                      <StaticImage imgClassName="needle needle-2" src="../images/needle.png" alt="" />
                  </div>
                  <p className="">どの端末から見ても綺麗に見る事が出来るようなレスポンシブデザインが可能です。BEM記法についての知識があり、即戦力として仕事に取り組む事が出来ます。</p>
              </div>
                  <div className="col-12 col-md-6 col-xl-4 box box-2">
                  <h5 className="box-name">Adobe XD</h5>
                  <div className="image-outer">
                  <span class="persent persent-2">90%</span>
                  <StaticImage imgClassName="image" src="../images/circle.png" alt="" />
                  <StaticImage imgClassName="needle needle-2" src="../images/needle.png" alt="" />
              </div>
                  <p className="">ウェブサイト、バナー等様々な物をXDで効率的に作成する事が出来ます。グリッドを使って規則性を意識したデザインを可能にします。それによりコーディングをより早く、修正を簡単に出来ます。</p>
              </div>
                  <div className="col-12 col-md-6 col-xl-4 box box-3">
                    <h5 className="box-name">photoshop</h5>
                  <div className="image-outer">
                  <span class="persent persent-2">90%</span>
                    <StaticImage imgClassName="image" src="../images/circle.png" alt="" />
                    <StaticImage imgClassName="needle needle-2" src="../images/needle.png" alt="" />
                    </div>
                  <p className="">写真のレタッチ、バナー作成、gif動画の作成等様々な編集が出来ます。基本的な操作は問題なく出来ます。光の操り方や合成等も行う事が可能です。</p>
              </div>
                  <div className="col-12 col-md-6 col-xl-4 box box-4">
                  <h5 className="box-name">Javascript/jQuery</h5>
                  <div className="image-outer">
                  <span class="persent persent-2">90%</span>
                  <StaticImage imgClassName="image" src="../images/circle.png" alt="" />
                  <StaticImage imgClassName="needle needle-2" src="../images/needle.png" alt="" />
              </div>
                  <p className="">スライダーの実装やクリックで画像が切り替わる機能等の経験をしました。今後はよりUI、UXを意識したサイトを作成していきたいので、技術を高めていきたいです。</p>
              </div>
                  <div className="col-12 col-md-6 col-xl-4 box box-5">
                  <h5 className="box-name">premier pro</h5>
                  <div className="image-outer">
                  <span class="persent persent-2">90%</span>
                  <StaticImage imgClassName="image" src="../images/circle.png" alt="" />
                  <StaticImage imgClassName="needle needle-2" src="../images/needle.png" alt="" />
              </div>
                  <p className="">不動産、インタビュー動画、自分で構成を考えた動画制作を経験しました。カット、テロップ、音楽の入れ方等基本的な操作は問題なく出来ます。</p>
              </div>
                  <div className="col-12 col-md-6 col-xl-4 box box-6">
                  <h5 className="box-name">Aftereffect</h5>
                  <div className="image-outer">
                  <span class="persent persent-2">90%</span>
                  <StaticImage imgClassName="image" src="../images/circle.png" alt="" />
                  <StaticImage imgClassName="needle needle-2" src="../images/needle.png" alt="" />
                  </div>
                  <p className="">自分で構成を考えたwebCMを作成出来ます。基本的な操作は問題なく出来ます。場面の切り替わりを意識して動画制作を行う事が出来、視聴者が楽しめる工夫が出来ます。</p>
              </div>
                  <div className="col-12 col-md-6 col-xl-4 box box-7">
                  <h5 className="box-name">WordPress</h5>
                  <div className="image-outer">
                  <span class="persent persent-2">90%</span>
                  <StaticImage imgClassName="image" src="../images/circle.png" alt="" />
                  <StaticImage imgClassName="needle needle-2" src="../images/needle.png" alt="" />
              </div>
                  <p className="">オリジナルテンプレートの作成、テーマチェック、コンタクトフォーム７を使用したお問い合わせフォームの設置が出来ます。</p>
              </div>
              </div>
            </div>
          </div>
          </div>
          </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpPost(sort: { date: DESC }, limit: $limit, skip: $skip) {
      nodes {
        id
        title
        excerpt
        date
        slug
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
