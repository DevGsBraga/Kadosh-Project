
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from "../components/NavBarContainer/NavBar";
import CarouselContainer from "../components/Carousel/Carousel";
import Information from '../components/Information/Information';
import FooterContain from '../components/Footer/FooterContain';
import VantagensContain from '../components/Vantagens/VantagensContain';
import CarouselAftBefore from '../components/Carousel/CarouselAftBefore';
import DepoimentosContain from '../components/Depoimentos/DepoimentosContain';
import FormContain from '../components/CotacaoComponents/Form/FormContain'
import {  animateScroll as scroll } from 'react-scroll';

// import AssociadosContain from '../components/Associados/AssociadosContain';

// ANIMAÇÃO

const Home = () => {
  const scrollToForm = () => {
    scroll.scrollTo(3800, { smooth: true }); // Ajuste a posição conforme necessário
  };


  return (
<>
<NavBar  />
<CarouselContainer scrollToForm={scrollToForm} />
<Information  />
<VantagensContain />
{/* <AssociadosContain /> */}
<DepoimentosContain />
<CarouselAftBefore />
<FormContain />
<FooterContain />


</>

  );
}

export default Home;
