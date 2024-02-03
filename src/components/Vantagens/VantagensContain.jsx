import './Vantagensstyle.css';

// IMGS
import imginfo from '../../assets/image_info.jpg';

const VantagensContain = () => {
  return (



    <div className='container__vantagens'>
        <div className="vantagens-information">

            <div className='vantagens-img'>
                <img className='img-info' src={imginfo} alt="" />
            </div>
            <div className='vantagens-descriptions'>
                <div className='description-titles'>
                <span>Temos tudo que seu veiculo precisa!</span>
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
                </div>
            </div>





        </div>
    </div>
  )
}

export default VantagensContain
