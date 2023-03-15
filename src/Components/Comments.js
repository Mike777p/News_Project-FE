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
          <li key={comments.comment_id}>
            <div className="comment_li_info">
              <h3>{comment.comment_id}</h3>
              <h3>{comment.article_id}</h3>
              <h3>{comment.author}</h3>
            </div>
            <p>{comment.body}</p>
            <div className="comment_li_info">
              <h3>{comment.created_at}</h3>
              <h3>{comments.votes}</h3>
            </div>
          </li>
        );
      })}
    </ul>
    </Wrapper>
  );
};

export default Comments;
