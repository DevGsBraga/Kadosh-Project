



import {Link} from 'react-router-dom';

// IMGs
import bannerPrincipal from '../../assets/imgs/Banners/banner-kadosh-01.jpg';
import bannerSecundary from '../../assets/imgs/Banners/banner-kadosh-03.jpg';


const CarouselContainer = () => {
  return (
    <>

    <div id="carouselExampleInterval"  className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img src={bannerPrincipal} className="d-block w-100" alt="..."  />
        <div className="carousel-caption d-none d-md-block">
          <Link style={{
            background: 'blue',
            padding:'1rem',
            borderRadius:'1rem',
            color:'white',
            textDecoration:'none',
            fontWeight:'bold',
            
                  }} to={'/cotacao'}>SOLICITE UMA COTAÇÃO GRATUITA</Link>

      </div>
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={bannerSecundary} className="d-block w-100"  alt="..." />
        <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
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
