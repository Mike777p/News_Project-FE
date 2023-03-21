import { useState, useEffect } from "react";
import { fetchComments, deleteComment } from "../Utils";
import { UserComment } from "./index";
import Wrapper from "../Assets/Wrappers/CommentsWrapper";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [deletingComment, setDeletingComment] = useState(false);

const handleDeleteComment = (comment_id) => {
  setDeletingComment(true);
  const deletedComment = comments.find((comment) => comment.comment_id === comment_id);
  const updatedComments = comments.filter((comment) => comment.comment_id !== comment_id);
  setComments(updatedComments);
  deleteComment(comment_id).then(()=>{
    setDeletingComment(false)
  }).catch((error)=>{
    console.log("error deleting!!", error)
    setComments([...updatedComments, deletedComment])
  })

}

  useEffect(() => {
    setLoading(true);
    fetchComments(props.article_id).then((response) => {
      setComments(response);
      setLoading(false);
    });
  }, [props.article_id]);

  if (isLoading) {
    return <div>Loading... please wait</div>;
  }


  return (
    <div>
      <Wrapper>
        <ul>
          {isError ? <p> Trying to post comment ... refresh the page if this persists! </p> :  <UserComment
          isError={isError}
            setIsError={setIsError}
            user={props.user}
            setComments={setComments}
            comments={comments}
            article_id={props.article_id}
          />}
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                {deletingComment && <p className="p-deletingComment"> Comment Deleting, please wait or refresh!!</p>}
                <div className="comment_li_info">
                  <p>Author : {comment.author}</p>
                </div>
                {comment.body ? (
                  <p>{comment.body}</p>
                ) : (
                  <p>No comment yet...</p>
                )}
                <div className="comment_li_info">
                  <p>Posted : {new Date(comment.created_at).toDateString()}</p>
                  <p>Votes : {comments.votes}</p>
                </div>
                {(comment.author === props.user.username) && <button onClick={() => handleDeleteComment(comment.comment_id)} disabled={deletingComment} className="delete-comment-button">Delete</button>}
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </div>
  );
};

export default Comments;
