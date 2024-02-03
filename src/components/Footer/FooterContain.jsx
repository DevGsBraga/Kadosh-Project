import "./Footerstyle.css";

import logoKadosh from '../../assets/logo-kadosh.png';



// ICONS
import {FaInstagram} from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import {FaWhatsapp} from 'react-icons/fa';
import { Link } from "react-router-dom";


const FooterContain = () => {
  return (
    <div className="container-footer">
      <div className="footer-redes-sociais">
        <hr />
        <div className="footer-img-logo">
          <Link to={'/'}><img className="logo-img-footer" src={logoKadosh} alt="Logo da Kadosh Proteção Veicular" /></Link>
        </div>
        <div className="icons-redes-socias">
        <Link><FaInstagram size={'32px'} /></Link>
        <Link><AiOutlineFacebook size={'32px'} /></Link>
        <Link><FaWhatsapp size={'32px'} /></Link>

        </div>
      </div>
      <div className="footer-description">
        <div className="footer-location">
          <h5>Entre em contato</h5>
        <iframe className="container-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.4868584197307!2d-35.75507152422537!3d-9.553232100499827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701497a0086b327%3A0xee0d65807b637d7c!2sKadosh%20Prote%C3%A7%C3%A3o%20Veicular!5e0!3m2!1spt-BR!2sbr!4v1706994166395!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="footer-navBar">
          <ul>
            <Link>Inicio</Link>
            <Link>Cotação</Link>
            <Link>Vantagens</Link>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default FooterContain
