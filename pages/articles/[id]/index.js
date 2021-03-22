import React from 'react'
import DOMPurify from 'dompurify';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import articleStyles from '../../../styles/Article.module.css';



const index = ({article}) => {

    const createMarkup = (html) => {
        
        return  {
        //   __html: DOMPurify.sanitize(html)
          __html:html
        }
      }
    return (
        <Layout>
            <Header />
            <h2 className={articleStyles.articleHead}>{article.title}</h2>
            <div  dangerouslySetInnerHTML={createMarkup(article.body)}></div>
        </Layout>
    );
}



export const getServerSideProps = async (context) => {
   const res = await fetch(`http://localhost:3004/v1/api/posts/${context.params.id}`)
   const result = await res.json()
   const article = result.data
   if(result.statusCode === 200 && result.message === 'SUCCESS'){
    return {
        props :{
            article
        }

    }
   }
   
}

export default index;
