import { useState, useEffect } from "react";
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import Layout from "../components/Layout";
import Header from "../components/Header";
import axios from "axios"
function Home({ articles }) {
  const [activeArticles, setActive] = useState([]);
  const [page, setPage] = useState(3);
  const handleClick = () => {
    if (activeArticles.length !== articles) {
      setActive(articles.slice(0, page + 10));
    }
    setPage(page + 10);
  };
  useEffect(() => {
    setActive(articles.slice(0, 10));
  }, []);

  return (
    <Layout>
      <div>
        <Head>
          <title>JavaScript News</title>
          <meta name="keyword" content="web development, programming"></meta>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <Header />
        <ArticleList articles={activeArticles} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1em",
          }}
        >
          {activeArticles.length < articles.length ? (
            <button onClick={handleClick} style={{fontSize:"13px"}}>Load More</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);
    const articles = response.data.data;
    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    const articles = [];
    return {
      props: {
        articles,
      },
    };

  }
 

  
};

export default Home;
