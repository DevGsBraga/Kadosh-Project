import "./Footerstyle.css";

import logoKadosh from '../../assets/logo-kadosh.png';



// ICONS
import {FaInstagram} from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import {FaWhatsapp} from 'react-icons/fa';
import { Link } from "react-router-dom";


const FooterContain = () => {
  const rolarTela = () => {
    window.scrollTo( {
      top: 0,
      behavior: 'smooth'
    } )
  }

  return (
    <div className="container-footer">
      <div className="footer-redes-sociais">
        <hr />
        <div className="footer-img-logo">
          <Link to={'/'}><img className="logo-img-footer" onClick={rolarTela} src={logoKadosh} alt="Logo da Kadosh Proteção Veicular" /></Link>
        </div>
        <div className="icons-redes-socias">
        <Link to={"https://www.instagram.com/kadoshprotecaoveicular/"} target="_blank"><FaInstagram size={'32px'} /></Link>

        <Link to={"https://www.facebook.com/profile.php?id=100085684614120&mibextid=rS40aB7S9Ucbxw6v"} target="_blank">
          <AiOutlineFacebook size={'32px'} /></Link>
        <Link to={"https://wa.link/nbh7a5"} target="_blank"><FaWhatsapp size={'32px'} /></Link>

        </div>
      </div>
      <div className="footer-description">
        <div className="footer-location">
          <h5>Entre em contato</h5>

        </div>

        <div className="footer-navBar">
          <ul>
            <Link className="gp-list-footer" to={'/'} onClick={rolarTela}>Inicio</Link>
            <Link className="gp-list-footer" to={'/cotacao'}>Cotação</Link>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default FooterContain
