import axios from 'axios';

const fetchArticles = (topic, sortBy, orderBy) => {

  const topicPath = `?topic=${topic}`;
  const sortPath = `?sort_by=${sortBy}`;
  const orderByPath = `?order=${orderBy}`
  return axios
    .get(
      `https://projectnewssite-backend2.onrender.com/api/articles${topicPath}${sortPath}${orderByPath}`
    )
    .then((response) => {
      return response.data.articles;
    });
};

const fetchArticle = (articleId) => {
    return axios
    .get(
      `https://projectnewssite-backend2.onrender.com/api/articles/${articleId}`
    )
    .then((response) => {
      return response.data.article;
    });
}

export { fetchArticles, fetchArticle }