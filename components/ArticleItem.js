import Link from 'next/link';
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({article}) => {
    

    return (
       
            <Link href="articles/[id]" as ={`articles/${article._id}`}>
             <a className = {articleStyles.card}>
                 <h3>{article.title}</h3>
                 <p>
                    {article.description}
                 </p>
             </a>
            </Link>
    
    );
     
}

export default ArticleItem;
