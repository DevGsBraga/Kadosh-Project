import "./AfterBeforeStyle.css";

// IMGs
import img1 from "../../assets/imgs/AntesEDepois/aircros.jpg";
import img2 from "../../assets/imgs/AntesEDepois/uno-vermelho.jpg";
import img3 from "../../assets/imgs/AntesEDepois/banner-principal.jpg";
import ButtonContain from "../Button/ButtonContain";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const CarouselAftBefore = () => {
   // ANIMAÇÕES
   const animationContainerRef = useRef(null);
   const animationTextRef = useRef(null);
   const animationTitlesRef = useRef(null);
   const animationCarouselRef = useRef(null);
   const animationButtonRef = useRef(null);


   useEffect(() => {
       const container = animationContainerRef.current
       const text = animationTextRef.current;
       const title = animationTitlesRef.current;
       const carousel = animationCarouselRef.current;
       const button = animationButtonRef.current;

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
    animar(container, 0, 0, 0, 0,'.container-AfterBefore',.3);
    animar(title, -200, 0, 0, 0,'.container-AfterBefore',.6)
    animar(text, -200, 0, 0, 0,'.container-AfterBefore',.8);
    animar(carousel, 200, 0, 0, 0,'.container-AfterBefore',1);
    animar(button, -200, 0, 0, 0,'.container-AfterBefore',1.2);
   })
  return (
    <>
      <div className="container-AfterBefore" ref={animationContainerRef}>

        <div className="afterBefore-associados">
          <h1 className="associados-title" ref={animationTitlesRef}>Associados <b style={{color:"#2A55A3"}}>100%</b> satisfeitos!</h1>
          <p className="associados-p" ref={animationTextRef}>Com a <b style={{color: "#fff112"}}>Kadosh</b> você pode contar com um atendimento especializado!</p>
          <div ref={animationButtonRef}>
          <ButtonContain src="https://wa.link/si2s7a" title="COTAÇÃO VIA WHATSAPP"  />
          </div>
        </div>

        <div className="afterBefore-titles" ref={animationCarouselRef}>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <img src={img2} className="d-block w-100" alt="..." />

              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <img src={img3} className="d-block w-100" alt="..." />

              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselAftBefore;
