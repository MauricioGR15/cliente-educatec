import axios from 'axios'

const Axios = axios.create(
    {
        withCredentials: true,
        baseURL :'http://localhost:8000/',
        headers : {
            'Accept' : 'application/json',
            'X-XSRF-COOKIE': getCookie("XSRF-TOKEN")
        }
    }
)

function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return value != null ? unescape(value[1]) : null;
}


export default Axios;