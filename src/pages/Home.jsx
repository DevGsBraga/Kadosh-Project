
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from "../components/NavBarContainer/NavBar";
import CarouselContainer from "../components/Carousel/Carousel";
import Information from '../components/Information/Information';
import FooterContain from '../components/Footer/FooterContain';
import VantagensContain from '../components/Vantagens/VantagensContain';
import CarouselAftBefore from '../components/Carousel/CarouselAftBefore';
import DepoimentosContain from '../components/Depoimentos/DepoimentosContain';

// import AssociadosContain from '../components/Associados/AssociadosContain';

// ANIMAÇÃO

const Home = () => {


  return (
<>
<NavBar  />
<CarouselContainer />
<Information  />
<VantagensContain />
{/* <AssociadosContain /> */}
<DepoimentosContain />
<CarouselAftBefore />
<FooterContain />


</>

  );
}

export default Home;
