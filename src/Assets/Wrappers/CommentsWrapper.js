import styled from "styled-components";

const Wrapper = styled.main`
background-color: cream;
  padding: 10px;

  ul {
    background-color: aliceblue;
 
  }

  li {
    
    display: block;
    border: solid black;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
  }

    h2 {
      padding: 0 10px;
      margin: 5px;
    }

section {
    display: flex;
    flex-direction: column;
}
h3 {
    margin: 5px;
}

.list_info_comments-votes, .list_info_author-date {
    display: bblock;
    background-color: antiquewhite;
}
  
  .p-deletingComment {
    color: red;
  }
`;

export default Wrapper;
