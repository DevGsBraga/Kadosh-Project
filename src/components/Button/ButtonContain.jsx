import './ButtonStyle.css';

import { Link } from 'react-router-dom';
import {FaWhatsapp} from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const ButtonContain = ( {src, title}) => {
  return (
    <div className='container-btn-whats'>
        <Link className='btn-whats' to={src}><FaWhatsapp size={"32px"} /> {title} </Link>
    </div>
  )
}

export default ButtonContain
