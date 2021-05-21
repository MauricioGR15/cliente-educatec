import Axios from "../Axios"

export const  getDocumentos = async () => {
    const response = await Axios.get('api/mochila')
    return response.data
}