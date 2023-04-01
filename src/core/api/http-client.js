import axios from 'axios'

export class Http {
    connect() {
        const instance = axios.create({
            baseURL : '',
            headers: {}
        })
        return instance
    }
}