import { useState, useEffect } from "react";
import { fetchComments } from "../Utils";
import Wrapper from '../Assets/wrappers/ArticleListWrapper';

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);

  

  useEffect(() => {
    setLoading(true)
    fetchComments(props.article_id).then((response)=> {
        setComments(response); 
        setLoading(false)
    })
  }, [props.article_id]);

  if (isLoading) {
    return <div>Loading... please wait</div>
  }

  return (
    <Wrapper>
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <div className="comment_li_info">
              <p>No : {comment.comment_id}</p>
              <p>ID: {comment.article_id}</p>
              <p>Author : {comment.author}</p>
            </div>
            {comment.body ? <p>{comment.body}</p> : <p>No comment yet...</p>}
            <div className="comment_li_info">
              <p>Posted : {comment.created_at}</p>
              <p>Votes : {comments.votes}</p>
            </div>
          </li>
        );
      })}
    </ul>
    </Wrapper>
  );
};

export default Comments;
