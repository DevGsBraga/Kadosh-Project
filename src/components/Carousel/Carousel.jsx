





// IMGs
import bannerPrincipal from '../../assets/imgs/Banners/banner-principal.gif';
// import logo2 from '../../assets/teste2.jpg';
// import logo3 from '../../assets/teste3.jpg';

const CarouselContainer = () => {
  return (
    <>

    <div id="carouselExampleInterval"  className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img src={bannerPrincipal} className="d-block w-100" alt="..."  />
      </div>
      {/* <div className="carousel-item" data-bs-interval="3000">
        <img src={logo2} className="d-block w-100"  alt="..." />
        <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      </div> */}
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
