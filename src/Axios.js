import axios from "axios";

const Axios = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8000/",
    headers: {
        Accept: "application/json",
        "X-XSRF-COOKIE": getCookie("XSRF-TOKEN"),
    },
});

export async function getCSRFCookie() {
    document.cookie = 'X-XSRF-COOKIE= "";expires= Thu, 21 Aug 2014 20:00:00 UTC'
    Axios.get("/sanctum/csrf-cookie");
}

export function addHeaders() {
    if (document.cookie)
        Axios.defaults.headers.common["X-XSRF-COOKIE"] =
            getCookie("XSRF-TOKEN");
}

export function addAuthHeader(token) {
    if (token) {
        Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete Axios.defaults.headers.common["Authorization"];
    }
}

function getCookie(name) {
    let re = new RegExp(name + "=([^;]+)");
    let value = re.exec(document.cookie);
    return value != null ? unescape(value[1]) : null;
}

export default Axios;
