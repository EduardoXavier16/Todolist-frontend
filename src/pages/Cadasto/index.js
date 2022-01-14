import React from 'react';
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value; 
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;
    const dataCriacao = evento.target.data.value;

    const lista = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo,
      dataCriacao
    }
    console.log(lista);

    const response = await Api.fetchPost(lista);
    const result = await response.json();

    alert(result.message);
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='card mt-4'>
        <div className='card-title'>
          <h3 className='m-3'>Cadastro de lista</h3>
        </div>
        <div className='card-body'>
          <form method='POST' onSubmit={handleSubmit}>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='nome'>titulo:</label>
                  <input id='nome' className='form-control' type='text' placeholder='Digite o titulo da atividade' name='nome'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='plataforma'>Descricao:</label>
                  <input id='plataforma' className='form-control' type='text' placeholder='Digite a plataforma do game' name='plataforma'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='valor'>Prioridade:</label>
                  <input id='valor' className='form-control' type='text' placeholder='Digite o valor do game' name='valor'/>
                </div>
              </div>
            </div>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='genero'>Status:</label>
                  <input id='genero' className='form-control' type='text' placeholder='Digite o genero do game' name='genero'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='nota'>Prazo:</label>
                  <input id='nota' className='form-control' type='text' placeholder='Digite o prazo' name='tempo'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='ano'>dataCriação:</label>
                  <input id='ano' className='form-control' type='text' placeholder='Digite a data' name='ano'/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <button className='btn btn-success me-2' type='submit'>Enviar</button>
                <button className='btn btn-outline-primary'>Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro