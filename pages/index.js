import { useState, useEffect } from "react";
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import Layout from "../components/Layout";
import Header from "../components/Header";

function Home({ articles }) {
  const [activeArticles, setActive] = useState([]);
  const [page, setPage] = useState(3);
  const handleClick = () => {
    if (activeArticles.length !== articles) {
      setActive(articles.slice(0, page + 3));
    }
    setPage(page + 3);
  };
  useEffect(() => {
    setActive(articles.slice(0, 3));
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
            marginTop: "5em",
          }}
        >
          {activeArticles.length < articles.length ? (
            <button onClick={handleClick}>Load More</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);
  const response = await res.json();
  const articles = response.data;

  return {
    props: {
      articles,
    },
  };
};

export default Home;
