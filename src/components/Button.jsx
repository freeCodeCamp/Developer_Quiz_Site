import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({text, path, isTransparent}) => {
  if (!isTransparent) {
    return (
      <>
        <Link to={path}>
          <button 
            className='btn-default'>
            {text}
          </button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to={path}>
          <button 
            className='btn-default transparent-btn'>
            {text}
          </button>
        </Link>
      </>
    );
  }
}

export default Button;