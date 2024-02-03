import './AssociadosStyle.css';

import imgGif from '../../assets/imgs/kadosh-associados.gif';


const AssociadosContain = () => {
  return (
    <div className='container-Associados'>
        <div className='Associados-Banner'>
            <img className='img-associados' src={imgGif} alt="" />
        </div>
    </div>
  )
}

export default AssociadosContain
