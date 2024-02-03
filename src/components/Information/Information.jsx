import './Information.css';

// SVGS
import carIcon from '../../assets/icons/car_icon.svg';
import rouboIcon from '../../assets/icons/criminal_icon.svg';
import crashIcon from '../../assets/icons/crash_icon.svg';
import guinchoIcon from '../../assets/icons/guincho_icon.svg';
import glassIcon from '../../assets/icons/glass_icon.svg';
import monitoramentoIcon from '../../assets/icons/monitoramento_icon.svg';


// ANIMAÇÃO
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Information = () => {


    const animaTitleRef = useRef(null);
    const animaVantagensRef = useRef(null);


    useEffect(() => {
        const title = animaTitleRef.current
        const vantagens = animaVantagensRef.current

        function animar(element, inicio, Eixo, fim) {
            gsap.fromTo(element, {
                opacity: 0,
                x: Eixo,
                duration: 2,
            }, {
                opacity: 1,
                x: fim,
                scrollTrigger: {
                    trigger: inicio,
                    start: 'top center',
                    end: 'bottom center'
                }
            })
        }

        animar(title, '.container-information', -100, 0);
        animar(vantagens, '.container-information', 100, 0 );

    })






  return (
    <>


    <div className='container-information'>

        <div className='information-titles' ref={animaTitleRef}>
            <span>A proteção que o seu veículo merece</span>
            <h2><b>Proteção</b> total para o seu veiculo!</h2>
        </div>

        <div className="information-cards" ref={animaVantagensRef}>
            <div className='gp-cards '>
                <div className='cards-styles'>
                <img className='gp-img-cards' src={carIcon} alt="" />
                <h4>Seu veiculo 100% protegido</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Assumenda illo doloremque hic! Temporibus repreh <br /> </p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={crashIcon} alt="" />
                <h4>Proteção contra colisão</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Assumenda illo doloremque hic! Temporibus repreh <br /> </p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={rouboIcon} alt="" />
                <h4>Roubo e furto</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Assumenda illo doloremque hic! Temporibus repreh <br /> </p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={monitoramentoIcon} alt="" />
                <h4>Monitoramento 24 horas</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Assumenda illo doloremque hic! Temporibus repreh <br /> </p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={guinchoIcon} alt="" />
                <h4>Assistência 24 horas </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Assumenda illo doloremque hic! Temporibus repreh <br /> </p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={glassIcon} alt="" />
                <h4>Proteção contra vidros</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Assumenda illo doloremque hic! Temporibus repreh <br /> </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Information
