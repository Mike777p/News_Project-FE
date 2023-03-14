import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticle } from "../Utils.js";
import Wrapper from '../Assets/wrappers/ArticleWrapper';
import { Comments } from "./index.js";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetchArticle(article_id).then((response)=> {
        setArticle(response); 
        setLoading(false)
    })
  }, [article_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return ( <div>
      <Wrapper>
          <Link to="/articles">back home</Link>
      <div>
        <h1>{article.title}</h1>
        <img src={article.article_img_url} alt="Article thumbnail" />
        <h3>Author: {article.author}</h3>
        <h3>Date: {article.created_at}</h3>
        <p>{article.body}</p>
      </div>
      </Wrapper>
      <Comments article_id={article_id} />
  </div>
  );
};

export default Article;
