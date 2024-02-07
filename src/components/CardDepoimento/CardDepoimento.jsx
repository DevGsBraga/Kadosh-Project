import "../CardDepoimento/CardStyle.css";


// eslint-disable-next-line react/prop-types
const CardDepoimento = ({coment, name}) => {
  return (
    <div className="container-Card">
        <span className="Card-description">{coment}</span>
        <p className="Card-name">{name}</p>

    </div>
  )
}

export default CardDepoimento
