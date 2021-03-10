import {useState,useEffect} from 'react';
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
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
        <div>
            <Head>
                <title>WebDev News</title>
                <meta name="keyword" content='web development, programming'></meta>
            </Head>
            <ArticleList  articles = {activeArticles}/>
            <div style = {{display:"flex",justifyContent:"center",marginTop:'5em'}}>
              {activeArticles.length < articles.length ? <button onClick={handleClick}>Load More</button>: ''}
            </div>
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