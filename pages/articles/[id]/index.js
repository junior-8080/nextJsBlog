import React from "react";
import DOMPurify from "dompurify";
import Layout from "../../../components/Layout";
import Header from "../../../components/Header";
import articleStyles from "../../../styles/Article.module.css";
import axios from "axios";

const index = ({ article }) => {
  const createMarkup = (html) => {
    return {
      //   __html: DOMPurify.sanitize(html)
      __html: html,
    };
  };
  return (
    <Layout>
      <Header />
      <h2 className={articleStyles.articleHead}>{article.title}</h2>
      <div
        className={articleStyles.articleBody}
        dangerouslySetInnerHTML={createMarkup(article.body)}
      ></div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${context.params.id}`);

    const article = response.data.data;
    return {
      props: {
        article,
      },
    };
  } catch (error) {
    const article = {}
      return{
        props:{
          article
        }
      }
  }

};

export default index;
