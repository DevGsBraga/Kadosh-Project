



import {Link} from 'react-router-dom';

// IMGs
import bannerPrincipal from '../../assets/imgs/Banners/banner-principal.svg';
import bannerSecundary from '../../assets/imgs/Banners/banner-secundario.svg';


// eslint-disable-next-line react/prop-types
const CarouselContainer = ({ scrollToForm }) => {
  return (
    <>

    <div id="carouselExampleInterval"  className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img src={bannerPrincipal} className="d-block w-100" alt="Banner primário do site"  />
        <div className="carousel-caption d-none d-md-block">
          <Link style={{
            background: 'blue',
            padding:'1rem',
            borderRadius:'1rem',
            color:'white',
            textDecoration:'none',
            fontWeight:'bold',

                  }} onClick={scrollToForm} to="#formContain" smooth={true} duration={300} >SOLICITE UMA COTAÇÃO GRATUITA</Link>

      </div>
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={bannerSecundary} className="d-block w-100"  alt="Banner secundário do site" />
        <div className="carousel-caption d-none d-md-block">

      </div>
      </div>
       {/* <div className="carousel-item" data-bs-interval="3000">
        <img src={logo3} className="d-block w-100" alt="..." />
      </div> */}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </>

  );
};

export default CarouselContainer;
