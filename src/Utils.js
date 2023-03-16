import axios from 'axios';

const fetchArticles = (topic, sortBy, orderBy) => {

  const params = {
    ...(topic && { topic: topic }),
    ...(sortBy && { sort_by: sortBy }),
    ...(orderBy && { order: orderBy }),
  };
  return axios
    .get(
      `https://projectnewssite-backend2.onrender.com/api/articles`, {
        params: params,
      }
    )
    .then((response) => {
      
      return response.data.articles;
    })
};


const fetchArticle = (articleId) => {
  return axios
    .get(`https://projectnewssite-backend2.onrender.com/api/articles/${articleId}`)
    .then((response) => {
      return response.data.article;
    });
};


const fetchComments = (articleId) => {
  return axios
  .get(
    `https://projectnewssite-backend2.onrender.com/api/articles/${articleId}/comments`
  )
  .then((response) => {
    return response.data.comments;
  });
}

const voteForArticle = (articleId) => {
  return axios
  .patch(
    `https://projectnewssite-backend2.onrender.com/api/articles/${articleId}`, { inc_votes : 1}
  )
  .then((response) => {
    console.log(response)
    return response.data.comments;
  });
}

export { fetchArticles, fetchArticle, fetchComments, voteForArticle }