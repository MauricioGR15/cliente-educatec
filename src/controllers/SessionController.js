import Axios from "../Axios";

export function handleLogin(e, matricula, password, login) {
    e.preventDefault();
    login({
        matricula,
        password,
    });
}

export function registerUser(e, datos) {
    e.preventDefault()
    
    Axios.post('api/registro', datos)
        .then(({data}) => {
            
        })
     
    


}
