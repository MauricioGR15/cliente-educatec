import Axios from "../Axios";
import { toast } from "react-toastify";
import { object } from "prop-types";

export const registerUser = async (datos, history) => {
    const body = { ...datos, carrera: 1 };

    Axios.post("api/registro", body)
        .then(({ data }) => {
            console.log(data.response);
            toast.success("Te has registrado con éxito");
            history.push("/");
        })
        .catch(({ response }) => {
            toast.error(response.data.Mensaje);
        });
};

export const uploadFile = async (datos, toggle, reset) => {
    const body = {
        ...datos,
        archivo: datos.archivo[0],
        privado: 1,
        path: "/",
    };
    console.log(body);

    const formData = new FormData();
    Object.keys(body).forEach((key) => formData.append(key, body[key]));
    console.log(formData);

    Axios.post("api/mochila/archivo", formData)
        .then(({ data }) => {
            toast.success(data.Mensaje);
            toggle();
            reset();
        })
        .catch((error) => {
            toast.error(error.data.response.mensaje);
        });
};
