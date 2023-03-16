import {Article} from "../Components"
import Wrapper from "../Assets/Wrappers/ArticleWrapper"

const ArticlePage = (props) => {
    return (
        <Wrapper>
            <Article user={props.user}/>
        </Wrapper>
    )
}

export default ArticlePage