import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <div className={articleStyles.card}>
      {console.log(article)}
      <h2>{article.title}</h2>
      <p>
        {article.description}
        {". "}
        <Link href="articles/[id]" as={`articles/${article._id}`}>
          read more...
        </Link>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "0.5em",
        }}
      >
        <Link href={article.author ? article.author.twitter : ""}>
          <i className="fa fa-twitter"></i>
        </Link>
        <Link
          href={article.author ? article.author.instagram : ""}
          className={articleStyles.icons}
        >
          <i className="fa fa-instagram"></i>
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;
