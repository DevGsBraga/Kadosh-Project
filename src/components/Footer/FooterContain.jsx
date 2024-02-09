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

      <div className="footer-components">
        <div className="footer-img-logo">
          <Link to={'/'}><img className="logo-img-footer" onClick={rolarTela} src={logoKadosh} alt="Logo da Kadosh Proteção Veicular" /></Link>
          <div className="icons-redes-socias">
              <Link to={"https://www.instagram.com/kadoshprotecaoveicular/"} target="_blank"><FaInstagram size={'32px'} /></Link>

              <Link to={"https://www.facebook.com/profile.php?id=100085684614120&mibextid=rS40aB7S9Ucbxw6v"} target="_blank">
                <AiOutlineFacebook size={'32px'} /></Link>
              <Link to={"https://wa.link/nbh7a5"} target="_blank"><FaWhatsapp size={'32px'} /></Link>
          </div>
        </div>



      {/* CONTEUDO DA KADOSH */}
      <div className="footer-central">
        <h4>Central de Atendimento</h4>
        <p>Atendimento de segunda a sexta: 08:00 às 18:00</p>
      </div>
      <div className="footer-endereco">
        <h4>Endereço</h4>
        <p>Av. Dr.André Papini Góis, 50-A - Cidade universitária, Maceió-AL, 57073-130</p>
      </div>
      <div className="footer-seguradora">
        <p>A <b style={{color:'#2A55A3'}}>KADOSH</b> não é uma seguradora. Oferecemos através do associativismo o serviço de proteção automotiva.</p>
      </div>
      </div>



      </div>

  )
}

export default FooterContain
