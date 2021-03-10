import {useState,useEffect} from 'react';
import articleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({articles}) => {
       
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
        <div className={articleStyles.grid}>
            {activeArticles.map((article) => (
                <ArticleItem article = {article} />
            ))}
             <div style = {{display:"flex",justifyContent:"center",marginTop:'5em'}}>
              {activeArticles.length < articles.length ? <button onClick={handleClick}>Load More</button>: ''}
            </div>
        </div>
    );
}

export default ArticleList;
