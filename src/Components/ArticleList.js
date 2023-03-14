import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { fetchArticles } from '../Utils.js';
import Wrapper from '../Assets/wrappers/ArticleListWrapper';

const ArticlesList = (props) => {
    
const [articles, setArticles] = useState([]);
const [isLoading, setLoading] = useState(false)

useEffect(() => {
    setLoading(true)
    fetchArticles(props.topic, props.sortBy, props.orderBy).then((response)=> {
        setArticles(response); 
        setLoading(false)
    })
  }, [props.topic, props.sortBy, props.orderBy]);

  if (isLoading) {
    return <h3 className='loading'>Loading, please wait ....</h3>
  }

  return (
    <Wrapper>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id} >
            <Link to={`/${article.article_id}`}>
              <img src={article.article_img_url} alt="Article thumbnail" />
              <h2>{article.title}</h2>
              <section className='list_info'>
            <div className='list_info_comments-votes'>
                <h3>Comments:</h3>
                <h3>{article.comment_count}</h3>
                <h3>Votes:</h3>
                <h3>{article.votes}</h3>
                </div>
                <div className='list_info_author-date'>
                <h3>Author:</h3>
                <h3>{article.author}</h3>
                <h3>Date:</h3>
                <h3>{article.created_at}</h3>
            </div>
              </section>
            <h3 className='list_topic'>Topic:</h3>
            <h3>{article.topic}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );

}

export default ArticlesList

