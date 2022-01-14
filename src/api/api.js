const Api = {
    apiUrl: 'https://api-tolist-eduardo.herokuapp.com/lista',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),
    fetchPost: (data) => {
      return fetch(`${Api.apiUrl}/add`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
    },
    fetchPut: (lista, id) => {
      return fetch(`${Api.apiUrl}/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify(lista),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
    },
    fetchDelete: (id) => {
      return fetch(`${Api.apiUrl}/delete/${id}`, {
        method: 'DELETE'
      })
    }
  }
  
  export default Api;