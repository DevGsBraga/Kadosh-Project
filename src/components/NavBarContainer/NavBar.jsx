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
            <ButtonContain src={'https://wa.link/nbh7a5'} title={'COTAÇÃO VIA WHATSAPP'} />

            </div>
        </nav>
    </>
  )
}

export default NavBar;
