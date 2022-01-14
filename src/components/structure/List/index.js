import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Api from '../../../api/api';

// faz uma requisicao para a API http://localhost:3001/lista e vai listar na tela
// em cards a lista de jogos
const List = () => {
  // estado = memoria do componennte
  // const [count, setCount] = useState(0);
  const [lista, setLista] = useState([]);

  // dispara uma funcao de call back quando o componete é criado ou
  // quando esta vinculado a uma variavel de estado
  useEffect(() => {
    getLista();
  }, [])

  const getLista = async () => {
    // faz a requisao http GET atraves do fetch API do javascript.
    try {
      const response = await Api.fetchGetAll();
      if(response.status >= 400 && response.status < 600) {
        alert('Nao foi possivel acessar os dados verifique a sua api')
      }
      // gamesApi = dados que recebe da api
      const listaApi = await response.json();
      console.log('RESPOSTA DA API', listaApi);
      setLista(listaApi);
    }catch (err) {
      console.error('ERRO:', err);
    }
    // atualizar o meu estado em memoria com os games para que possa atualizar o DOM.
  }
  
  // const handleButton = () => {
  //   setCount(count + 1);
  // }

  return(
    <div>
      <p className='text-center h5'>LISTAGEM</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          lista.map((lista) => (
            <Card key={lista._id} lista={lista}/>
          ))
        }

      </div>
      {/* <button onClick={handleButton}>Incrementa</button>
      <p>Numero: { count }</p> */}
    </div>
  )
}
export default List;