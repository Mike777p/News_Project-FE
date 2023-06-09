import React from "react";
import { Link } from "react-router-dom";
import { ArticlesList, SelectionBar } from "../Components";
import Wrapper from "../Assets/Wrappers/CookingPageWrapper";


const CookingPage = () => {
  return (
    <Wrapper className="Cooking-Page-Div">
      <SelectionBar/>
    <div>
      <h2>CookingPage</h2>
      <Link to={"/articles"}>Home</Link>
      <ArticlesList topic="cooking" />
    </div>
    </Wrapper>
  );
};

export default CookingPage;
