import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticle, voteForArticle } from "../Utils.js";
import Wrapper from '../Assets/wrappers/ArticleWrapper';
import { Comments } from "./index.js";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [errorHandle, setErrorHandle] = useState(false)
  const [userVote, setUserVote] = useState(0)

  useEffect(() => {
    setLoading(true)
    fetchArticle(article_id).then((response)=> {
        setArticle(response); 
            setLoading(false)
    }).catch(()=>{
        setLoading(false);
        setErrorHandle(true)
        
    })
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...wait one sec...</p>;
  }
  if (errorHandle) {
    return <p>There's a problem with the news site, please come back later!</p>
  }

  const onClick = ()=>{
    setUserVote(1)
    voteForArticle(article_id)
  }

  return ( <div>
      <Wrapper>
          <Link to="/articles">back home</Link>
      <div>
        <h1>{article.title}</h1>
        <img src={article.article_img_url} alt="Article thumbnail" />
        <p>Author: {article.author}</p>
        <p>Date: {article.created_at}</p>
        <p>{article.body}</p>
        <button onClick={onClick} disabled={userVote !== 0}>❤️</button><p>Votes : {article.votes + userVote}</p>
      </div>
      </Wrapper>
      <Comments article_id={article_id} />
  </div>
  );
};

export default Article;
