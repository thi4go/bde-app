import axios from 'axios'


const http = axios.create({
  baseURL: 'https://batalha-da-escada.herokuapp.com/'
});


const api = {


  getBattles () {
    return http.get('battles')
  },

  getUsers () {
    return http.get('users')
  },


  postLogin (credentials) {
    return http.post('login', credentials)
  }

}


export default api
