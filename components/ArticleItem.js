import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href="articles/[id]" as={`articles/${article._id}`}>
      <div className={articleStyles.card}>
        <h2>{article.title}</h2>
        <p>{article.description}{". "}➡️</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
