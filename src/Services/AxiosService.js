import Axios from 'axios'

const baseURL = window.location.origin.includes('localhost') ? 'https://localhost:5001' : ''
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const nameApi = Axios.create({
  baseURL: 'https://https://www.dnd5eapi.co/spells',
  timeout: 8000
})

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}
