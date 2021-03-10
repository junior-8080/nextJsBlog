import Head from 'next/head'
import ArticleList from '../components/ArticleList'
// import styles from '../styles/Home.module.css'


function Home({articles}) {
 

    return (
        <div>
            <Head>
                <title>WebDev News</title>
                <meta name="keyword" content='web development, programming'></meta>
            </Head>
            <ArticleList  articles = {articles}/>
        </div>
    )

}


export const getStaticProps = async ()  => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

export default Home;