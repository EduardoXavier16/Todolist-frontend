import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
  const lista = props.game;
  return (
    <Link to={`/view/${lista._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Nome: {lista.titulo}</h5>
          <p className="card-text">Valor: {lista.descricao}</p>
          <p className="card-text">Nota: {lista.prioridade}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;