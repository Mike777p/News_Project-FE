import { Link } from 'react-router-dom';
import img from '../Assets/images/error.jpeg';
import Wrapper from '../Assets/wrappers/ErrorWrapper';

const ErrorPage = () => {
    return (
        <Wrapper className='full-page'>
          <div>
            <img src={img} alt='not found' />
            <h3>text</h3>
            <p>text</p>
            <Link to='/'>back home</Link>
          </div>
        </Wrapper>
      );
    }

export default ErrorPage;