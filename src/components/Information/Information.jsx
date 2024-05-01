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
            }, {
                opacity: 1,
                x: fim,
                duration: 1,
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


    <div className='container-information' id='protecao'>

        <div className='information-titles' ref={animaTitleRef}>
            <span>A proteção que o seu veículo merece</span>
            <h2><b>Proteção</b> total para o seu veiculo!</h2>
        </div>

        <div className="information-cards" ref={animaVantagensRef}>
            <div className='gp-cards '>
                <div className='cards-styles'>
                <img className='gp-img-cards' src={carIcon} alt="Imagem de um veiculo e um simbolo de proteção" />
                <h4>Seu veiculo 100% protegido</h4>
                <p>Proteção Completa.</p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={crashIcon} alt="Imagem de dois veiculos colidindo, simulando um acidente de trânsito" />
                <h4>Proteção contra colisão</h4>
                <p>Danos materiais ocorridos pelo associado em seu veículo e sobre terceiros.</p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={rouboIcon} alt="Imagem de um homem mascarado e um veiculo, simulando um roubo ou furto" />
                <h4>Roubo e furto</h4>
                <p>Não conte com a sorte. Previna-se.</p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={monitoramentoIcon} alt="Imagem de uma localização, simulando um monitoramento em tempo real" />
                <h4>Monitoramento 24 horas</h4>
                <p>Agilidade em caso de roubo ou furto temos o rastreamento.</p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={guinchoIcon} alt="Imagem de um caminhão tipo reboque com um veiculo em cima, simulando uma assistência de guincho" />
                <h4>Assistência 24 horas </h4>
                <p>Reboque, socorro mecânico, pane elétrica, troca de pneus e outros.</p>
                </div>
            </div>
            <div className='gp-cards'>
                <div className="cards-styles">
                <img className='gp-img-cards' src={glassIcon} alt="Imagem de uma porta de veiculo destacando o vidro, enfatizando a proteção para vidros" />
                <h4>Proteção para vidros</h4>
                <p>Troca de faróis, para-brisas, lanternas e outros periféricos.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Information
