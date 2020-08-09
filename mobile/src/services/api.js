import axios from 'axios'

const api = axios.create({
    baseURL:'https://192.168.0.102:3333'
})

export default api