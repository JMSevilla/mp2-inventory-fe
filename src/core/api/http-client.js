import axios from 'axios'
export class Http {
    connect() {
        const instance = axios.create({
            baseURL : process.env.REACT_APP_BASE_URL,
            headers: {}
        })
        return instance
    }
}