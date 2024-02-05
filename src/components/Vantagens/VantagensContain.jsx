import './Vantagensstyle.css';

// IMGS
import imginfo from '../../assets/image_info.jpg';
import ButtonContain from '../Button/ButtonContain';

// ANIMAÇÕES
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

const VantagensContain = () => {

    // ANIMAÇÕES
    const animationContainerRef = useRef(null);
    const animationImgRef = useRef(null);
    const animationTitlesRef = useRef(null);


    useEffect(() => {
        const container = animationContainerRef.current
        const img = animationImgRef.current;
        const title = animationTitlesRef.current;

        function animar(element, eixoX, eixoY, endX, endY, scroll, time) {
            gsap.fromTo(element, {
                opacity:0,
                x:eixoX,
                y:eixoY,
            }, {
                opacity: 1,
                x: endX,
                y:endY,
                duration: time,
                scrollTrigger: {
                    trigger: scroll,
                    start: "top center",
                    end: "bottom center"
                }
            })
        }





// CHAMADAS DAS ANIMAÇÕES
    animar(container, 0, 0, 0, 0,'.container__vantagens',.5);
    animar(img, -100, 0, 0, 0,'.container__vantagens',.8);
    animar(title, 0, -100, 0, 0,'.container__vantagens',1)
    })















    // CONTEUDO DO BOTÃO
    const linkParaWhatsapp = "#";
    const tituloDoBotao = "COTAÇÃO VIA WHATSAPP"
  return (
    <div className='container__vantagens'>
        <div className="vantagens-information" ref={animationContainerRef}>

            <div className='vantagens-img' ref={animationImgRef}>
                <img className='img-info' src={imginfo} alt="" />
            </div>
            <div className='vantagens-descriptions' ref={animationTitlesRef}>
                <div className='description-titles'>
                <span style={{fontSize: '1.2em'}}>Temos tudo que seu veiculo precisa!</span>
                <h2 style={{fontSize:"2.5em"}}>Fique <b style={{color:"#fff112"}}>100%</b> protegido!</h2>
                </div>
                <div className='description-list'>
                    <ul className='list-gp'>
                        <li className='gp-Li'>FIPE 100%</li>
                        <li className='gp-Li'>PROTEÇÃO PARA TERCEIROS</li>
                        <li className='gp-Li'>ROUBO E FURTO</li>
                        <li className='gp-Li'>PERDA TOTAL</li>
                        <li className='gp-Li'>REBOQUE 24 HORAS</li>
                        <li className='gp-Li'>OFICINAS REFERENCIADAS</li>
                        <li className='gp-Li'>FENÔMENOS NATURAIS</li>
                        <li className='gp-Li'>COBERTURA PARA VIDROS</li>
                        <li className='gp-Li'>VEÍCULO RASTREADO</li>
                        <li className='gp-Li'>INCÊNDIO</li>
                    </ul>
                        <ButtonContain src={linkParaWhatsapp} title={tituloDoBotao} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default VantagensContain
