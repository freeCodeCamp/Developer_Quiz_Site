import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({text, path, isTransparent}) => {
  return (
    <>
      <Link to={path}>
        <button
          className={!isTransparent ? 'btn-default' : 'btn-default transparent-btn'}>
          {text}
        </button>
      </Link>
    </>
  );
}

export default Button;