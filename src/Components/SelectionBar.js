import Wrapper from "../Assets/Wrappers/SelectionBarWrapper";
import { ArticlesList } from "./index";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SelectionBar = () => {
  const [topic, setTopic] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const navigate = useNavigate();

    const handleTopicChange = (e) => {
      setTopic(e.target.value);
      navigate(`/newTopic/${e.target.value}`);
      
    };

  return (
    <div>
      <Wrapper>
        <div className="selector_topic">
          <label htmlFor="topic">Topic:</label>
          <select
            id="topic"
            value={topic}
            onChange={handleTopicChange}
          >
            <option value="">--select a topic--</option>
            <option value="cooking">Cooking</option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
          </select>
        </div>
        <div className="selector_sort-by">
          <label>Sort by:</label>
          <select value={sortBy} onChange={handleTopicChange}>
            <option value="">--select a sorting option--</option>
            <option value="author">Author</option>
            <option value="date">Date</option>
            <option value="votes">Votes</option>
            <option value="commentCount">Comment count</option>
          </select>
        </div>
        <div className="selector_sort-by">
          <label>Order by:</label>
          <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
            <option value="">--select an ordering option--</option>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </Wrapper>
      <ArticlesList topic={topic} sortBy={sortBy} orderBy={orderBy} />
    </div>
  );
};

export default SelectionBar;
