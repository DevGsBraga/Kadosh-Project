import './StyleDepo.css';

import CardDepoimento from "../CardDepoimento/CardDepoimento";
import ButtonContain from '../Button/ButtonContain';

const DepoimentosContain = () => {
  return (
    <div className="container-Depoimento">
        <span className='depoimento-class'>SOMOS 5 ESTRELAS ⭐⭐⭐⭐⭐ </span>
      <div className='depoimento-description'>
        <h2 className='description-title'>Comentários de quem confia em nós:</h2>
        <span>Mantenha seu veículo protegido de maneira completa, com cobertura contra acidentes, roubos, danos e muito mais.</span>
      </div>
      <div className="depoimentos_cards">
        <div>
        <CardDepoimento coment="Excelente atendimento, profissional capacitado, esclareceu todas as dúvidas com agilidade e presteza!" name="Poliana Amorim" />
        </div>
        <div>
        <CardDepoimento coment="Ótimo atendimento, cumpre o que promete, pessoal do guincho atencioso, tudo muito bom, parabéns !" name="Ayres Meneses" />
        </div>
        <div>
        <CardDepoimento coment="Excelente!
        Nas vezes que eu precisei, prontamente fui atendido.
        Esse atendimento é gratificante e deixa o cliente muito satisfeito." name="Claudio Freitas" />
        </div>
        <div>
        <CardDepoimento coment="Sensacional... Bom atendimento, bom estabelecimento, rastreador, assistência 24hrs, guincho 24hrs... 1 ano junto com a empresa e não tenho oq reclamar, só satisfação." name="Zenctro BR" />
        </div>
        <div>
        <CardDepoimento coment="Kadosh Proteção Veicular segurança para o seu carro e moto, credibilidade e segurança dos Donos, Gerentes e funcionários. Eu confio!!!" name="Ana Cristina Ferreira Amorim" />
        </div>
        <div>
        <CardDepoimento coment="excelente empresa, atendimento, competência no serviço e sobretudo planos de coberturas completo." name="Jeronimo Muniz" />
        </div>
      </div>

      <div className='btn-depoimentos'>
        <ButtonContain src={'#'} title={"SOLICITE UMA COTAÇÃO"} />
      </div>

    </div>
  )
}

export default DepoimentosContain
