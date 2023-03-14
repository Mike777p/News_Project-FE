import Logo from "./Logo";
import { Link } from "react-router-dom";
import Wrapper from "../Assets/wrappers/HeaderWrapper";

const Header = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        <Link to="/">back home</Link>
      </nav>
    </Wrapper>
  );
};

export default Header;
