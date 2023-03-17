import { useState } from "react";
import { postComment } from "../Utils";
import Wrapper from "../Assets/Wrappers/UserCommentWrapper";

const UserComment = (props) => {
  const [commentText, setCommentText] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [commentPosted, setCommentPosted] = useState(false)


  const handleSubmit = (event) => {
    setIsUpdated(true)
    props.setIsError(true)
    event.preventDefault();
    const currentDate = new Date();
    const newCommentObj = {
      comment_id: 9999,
      body: commentText,
      article_id: 9999,
      author: props.user.username,
      votes: 0,
      created_at: new Date(currentDate).toDateString(),
    };

    props.setComments([newCommentObj, ...props.comments]);

    postComment(props.article_id, props.user.username, commentText)
      .then(() => {
        props.setIsError(false)
        setCommentPosted(true)
        setIsUpdated(false)
      })
      .catch((error) => {
        props.setIsError(true)
        console.error("Error posting comment in handleSubmit:", error);
      });

    setCommentText("");

    
  };

  return (
    <Wrapper>
        {commentPosted && !props.isError ? <p>Comment Posted!!!</p> : <p>Post Comment</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-text">Add a comment:</label>
        <textarea
          id="comment-text"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
          rows="4"
          cols="50"
          placeholder="Write your comment here..."
          required
        />
        <button type="submit" disabled={isUpdated}>Submit</button>
      </form>
    </Wrapper>
  );
};

export default UserComment;
