import axios from 'axios'

const Axios = axios.create(
    {
        withCredentials: true,
        baseURL :'http://localhost:8000/',
        headers : {
            'Accept' : 'application/json',
            'X-XSRF-COOKIE': document.cookie
        }
    }
)


export default Axios;