import React from 'react'
import { Link } from 'react-router-dom'
import { ArticlesList, SelectionBar } from '../Components'
import Wrapper from "../Assets/Wrappers/CodingPageWrapper"

const CodingPage = () => {
  return (
    <Wrapper>
      <SelectionBar/>
    <div>
    <h2>Coding Page</h2>
    <Link to={"/articles"}>Home</Link>
    <ArticlesList topic="coding" />
    </div>
    </Wrapper>
  )
}

export default CodingPage
