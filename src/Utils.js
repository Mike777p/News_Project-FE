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
    `https://projectnewssite-backend2.onrender.com/api/articles/${articleId}/comments`, 
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
    return response.data.comments;
  });
}

const postComment = (articleId, username, body) => {
  return axios
    .post(`https://projectnewssite-backend2.onrender.com/api/articles/${articleId}/comments`, { username, body })
    .then((response) => {
      return response.data.comment;
    }).catch((error) => {
      console.error("Error posting comment:", error.response ? error.response.data : error.message);
      throw error;
    });
};

const deleteComment = (comment_id) => {
  return axios.delete(`https://projectnewssite-backend2.onrender.com/api/comments/${comment_id}`).then((response)=>{
    console.log("Hello")
  return response
  })
  .catch((error) => {
    console.error("Error deleting comment:", error.response ? error.response.data : error.message);
    throw error;
  });
}

export { fetchArticles, fetchArticle, fetchComments, voteForArticle, postComment, deleteComment }