import React from 'react'
import { Link } from 'react-router-dom'
import { ArticlesList, SelectionBar } from '../Components'
import Wrapper from "../Assets/Wrappers/FootballPageWrapper";

const FootballPage = () => {
  return (
    <Wrapper>
      <SelectionBar/>
    <div>
    Football Page
    <Link to={"/articles"}>Home</Link>
    <ArticlesList topic="football" />
    </div>
    </Wrapper>
  )
}

export default FootballPage
