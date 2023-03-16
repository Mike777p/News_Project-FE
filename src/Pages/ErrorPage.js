import { Link } from "react-router-dom";
import img from "../Assets/images/error.jpeg";
import Wrapper from "../Assets/Wrappers/ErrorWrapper";

const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Go back!!!!</h3>
        <p>Sort it out me old China!!</p>
        <Link to="/articles">back home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
