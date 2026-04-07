
import './WhatsStyle.css';
import {FaWhatsapp} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Whatsapp = () => {

  return (
    <>
      <div className="container-whatsapp" >
        <Link className='selector-description' to={'https://w.app/e9w6m4'} target='_blank' >
          <FaWhatsapp size={'52px'} color='white'/>
        </Link>
      </div>
    </>
  );
};

export default Whatsapp;
