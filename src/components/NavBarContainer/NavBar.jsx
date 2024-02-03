// CSS
import "./NavBar.css";


// IMGS
import logoDoSite from '../../assets/logo-kadosh.png';

import { Link } from "react-router-dom";

const NavBar = () => {



  return (
    <>
        <div className="container-contacts">
            <ul className="contacts-nav">
                <Link className="contacts-list">E-mail</Link>
                <Link className="contacts-list">Contatos</Link>
            </ul>

        </div>
        <nav className="container__navBar">
{/* DIV DE IMAGEM */}
            <div className="navBar-img">
                <img className="img-logo" src={logoDoSite} alt="" />
            </div>

{/* DIV DE LISTA DE NAVEGAÇÃO  */}
            <div className="navBar-list-nav">
                <ul className="list-nav-container">
                    <Link className="gp-list-nav" to="/">Inicio</Link>
                    <Link className="gp-list-nav" to="/cotacao">Cotação</Link>
                    <Link className="gp-list-nav" to="#">Vantagens</Link>
                </ul>

            </div>
        </nav>

    </>
  )
}

export default NavBar;
