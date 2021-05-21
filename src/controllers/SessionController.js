import Axios from "../Axios";
import { toast } from 'react-toastify'


export const registerUser = async(datos, history) => {

    const body = {...datos, carrera: 1}

    Axios.post('api/registro', body)
        .then(({data}) => {
            console.log(data.response);
            toast.success("Te has registrado con éxito")
            history.push('/')
        })
        .catch(({response})=> {
            toast.error(response.data.Mensaje)
        })
}
