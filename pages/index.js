import {useState,useEffect} from 'react';
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import Layout from '../components/Layout';
import Header from '../components/Header'
// import styles from '../styles/Home.module.css'


function Home({articles}) {
    
     const [activeArticles,setActive] = useState([]);
     const [page,setPage] = useState(3);
    const handleClick = () => {
     
      if(activeArticles.length !== articles){
        setActive(articles.slice(0,page + 3))
      }
      setPage(page + 3)
    }
    useEffect(() => {
       
     setActive(articles.slice(0,3)) 
    
    },[]);

    return (
      <Layout>
        <div>
            <Head>
                <title>JavaScript News</title>
                <meta name="keyword" content='web development, programming'></meta>
            </Head>
            <Header/>
            <ArticleList  articles = {activeArticles}/>
            <div style = {{display:"flex",justifyContent:"center",marginTop:'5em'}}>
              {activeArticles.length < articles.length ? <button onClick={handleClick}>Load More</button>: ''}
            </div>
        </div>
    </Layout>
    )

}


export const getStaticProps = async ()  => {
  const res = await fetch(`http://localhost:3004/v1/api/posts`)
  const response = await res.json()
  // console.log(response)
  const articles = response.data


  return {
    props: {
      articles
    }
  }
}

export default Home;