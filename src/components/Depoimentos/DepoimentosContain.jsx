import "./StyleDepo.css";

import CardDepoimento from "../CardDepoimento/CardDepoimento";
import ButtonContain from "../Button/ButtonContain";

const DepoimentosContain = () => {
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
        <div>
          <CardDepoimento
            coment="Excelente atendimento, profissional capacitado, esclareceu todas as dúvidas com agilidade e presteza!"
            name="Poliana Amorim"
          />
        </div>

        <div>
          <CardDepoimento
            coment="Ótimo atendimento, cumpre o que promete, pessoal do guincho atencioso, tudo muito bom, parabéns !"
            name="Ayres Meneses"
          />
        </div>

        <div>
          <CardDepoimento
            coment="Excelente!
                        Nas vezes que eu precisei, prontamente fui atendido.
                        Esse atendimento é gratificante e deixa o cliente muito satisfeito."
            name="Claudio Freitas"
          />
        </div>

        <div>
          <CardDepoimento
            coment="Sensacional... Bom atendimento, bom estabelecimento, rastreador, assistência 24hrs, guincho 24hrs... 1 ano junto com a empresa e não tenho oq reclamar, só satisfação."
            name="Zenctro BR"
          />
        </div>

        <div>
          <CardDepoimento
            coment="Kadosh Proteção Veicular segurança para o seu carro e moto, credibilidade e segurança dos Donos, Gerentes e funcionários. Eu confio!!!"
            name="Ana Cristina Ferreira Amorim"
          />
        </div>

        <div>
          <CardDepoimento
            coment="excelente empresa, atendimento, competência no serviço e sobretudo planos de coberturas completo."
            name="Jeronimo Muniz"
          />
        </div>

      </div>

      <div className="btn-depoimentos">
        <ButtonContain src={"https://wa.link/nbh7a5"} title={"SOLICITE UMA COTAÇÃO"} />
      </div>
    </div>
  );
};

export default DepoimentosContain;
