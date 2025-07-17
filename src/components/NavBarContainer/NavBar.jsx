// CSS
import "./NavBar.css";


// IMGS
import logoDoSite from '../../assets/logo-kadosh.png';
import {FaInstagram} from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import {FaWhatsapp} from 'react-icons/fa';




import { Link } from "react-router-dom";
import ButtonContain from "../Button/ButtonContain";



const NavBar = () => {




  return (
    <>
        <div className="container-contacts">
            <Link to={'https://www.instagram.com/kadoshprotecaoveicular/'} target="_blank"><FaInstagram size={'24px'} color="white" /></Link>
            <Link to={'https://www.facebook.com/profile.php?id=100085684614120&mibextid=rS40aB7S9Ucbxw6v'} target="_blank"> <AiOutlineFacebook size={'24px'} color="white" /></Link>
            <Link to={"https://wa.link/nbh7a5"} target="_blank"><FaWhatsapp size={'24px'} color="white" /></Link>
        </div>
        <nav className="container__navBar">
{/* DIV DE IMAGEM */}
            <div className="navBar-img">
                <img className="img-logo" src={logoDoSite} alt="" />
            </div>

{/* DIV DE LISTA DE NAVEGAÇÃO  */}

            <div className="section-button">
            <ButtonContain src={'https://wa.me/5582991520114?text=Ol%C3%A1%2C%20Vim%20pelo%20site%20e%20estou%20interessado(a)%20em%20obter%20uma%20cota%C3%A7%C3%A3o%20para%20prote%C3%A7%C3%A3o%20veicular.%20%0A%0AComo%20posso%20proceder%20para%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20garantir%20a%20seguran%C3%A7a%20do%20meu%20ve%C3%ADculo%3F%20'} title={'COTAÇÃO VIA WHATSAPP'} />

            </div>
        </nav>
    </>
  )
}

export default NavBar;
