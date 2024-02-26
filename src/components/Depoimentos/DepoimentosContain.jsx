import "./StyleDepo.css";

// IMPORT DAS ANIMAÇÕES
import gsap from "gsap";
import { useEffect } from "react";


import CardDepoimento from "../CardDepoimento/CardDepoimento";
import ButtonContain from "../Button/ButtonContain";


const DepoimentosContain = () => {
  // ANIMAÇÃO


  useEffect(() => {
    function animarDepoimento(element, eixoX, eixoY, endX, endY, inicio, time) {
      gsap.fromTo(element, {
        opacity: 0,
        x: eixoX,
        y: eixoY,
      }, {
        opacity:1,
        x: endX,
        y: endY,
        duration: time,
        scrollTrigger: {
          trigger: inicio,
          start: "top center",
          end: "bottom center"
        }
      })
    }

    animarDepoimento(".depoimento-description", 0, 0, 0, 0, ".depoimento-description",.9);
    animarDepoimento(".gp-card1", -200, 0, 0, 0, ".depoimento-description",.5);
    animarDepoimento(".gp-card2", 0, -200, 0, 0, ".depoimento-description",.6);
    animarDepoimento(".gp-card3", 200, 0, 0, 0, ".depoimento-description",.7);
    animarDepoimento(".gp-card4", -200, 200, 0, 0, ".depoimento-description",.8);
    animarDepoimento(".gp-card5", 0, 200, 0, 0, ".depoimento-description",.9);
    animarDepoimento(".gp-card6", 200, 200, 0, 0, ".depoimento-description",.9);
  })










  return (
    <div className="container-Depoimento">
      <div className="container-avaliacao">
        <span className="depoimento-class">
          AVALIAÇÃO 5 NO GOOGLE ⭐⭐⭐⭐⭐{" "}
        </span>
        <iframe className="container-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.4868584197307!2d-35.75507152422537!3d-9.553232100499827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701497a0086b327%3A0xee0d65807b637d7c!2sKadosh%20Prote%C3%A7%C3%A3o%20Veicular!5e0!3m2!1spt-BR!2sbr!4v1706994166395!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{
            width: '100vw',
            height:'300px'
        }}></iframe>
      </div>

      <div className="depoimento-description">
        <h2 className="description-title">
          O que os clientes andam <b style={{color:'#2A55A3'}}>falando…</b>
        </h2>
        <span>
           Proteja seu veículo de forma abrangente com nossa cobertura contra acidentes, roubos, danos e muitos mais:
        </span>
      </div>
      <div className="depoimentos_cards">
        <div className="gp-card1">
          <CardDepoimento
            coment="Excelente atendimento, profissional capacitado, esclareceu todas as dúvidas com agilidade e presteza!"
            name="Poliana Amorim"
          />
        </div>

        <div className="gp-card2">
          <CardDepoimento
            coment="Ótimo atendimento, cumpre o que promete, pessoal do guincho atencioso, tudo muito bom, parabéns !"
            name="Ayres Meneses"
          />
        </div>

        <div className="gp-card3">
          <CardDepoimento
            coment="Excelente!
                        Nas vezes que eu precisei, prontamente fui atendido.
                        Esse atendimento é gratificante e deixa o cliente muito satisfeito."
            name="Claudio Freitas"
          />
        </div>

        <div className="gp-card4">
          <CardDepoimento
            coment="Sensacional... Bom atendimento, bom estabelecimento, rastreador, assistência 24hrs, guincho 24hrs... 1 ano junto com a empresa e não tenho oq reclamar, só satisfação."
            name="Zenctro BR"
          />
        </div>

        <div className="gp-card5">
          <CardDepoimento
            coment="Kadosh Proteção Veicular segurança para o seu carro e moto, credibilidade e segurança dos Donos, Gerentes e funcionários. Eu confio!!!"
            name="Ana Cristina Ferreira Amorim"
          />
        </div>

        <div className="gp-card6">
          <CardDepoimento
            coment="excelente empresa, atendimento, competência no serviço e sobretudo planos de coberturas completo."
            name="Jeronimo Muniz"
          />
        </div>

      </div>

      <div className="btn-depoimentos">
        <ButtonContain src={"https://wa.link/si2s7a"} title={"SOLICITE UMA COTAÇÃO"} />
      </div>
    </div>
  );
};

export default DepoimentosContain;
