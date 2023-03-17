import React from 'react'
import { Link } from 'react-router-dom'
import { ArticlesList } from '../Components'
import Wrapper from "../Assets/Wrappers/CodingPageWrapper"

const CodingPage = () => {
  return (
    <Wrapper>
    <div>
    <h2>Coding Page</h2>
    <Link to={"/articles"}>Home</Link>
    <ArticlesList topic="coding" />
    </div>
    </Wrapper>
  )
}

export default CodingPage
