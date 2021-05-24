import React, {useReducer} from "react";
import globalContext from "./globalContext";
import globalReducer from "./globalReducer";
import Axios, {getCSRFCookie, addHeaders, addAuthHeader} from "../Axios";
import {toast} from "react-toastify";
import {sortArrayAlphabetically} from "../helpers/Util";

const GlobalState = (props) => {
    const initialState = {
        token: "",
        session: false,
        usuario: null,
        postSelected: null,
        materias: null,
    };

    const [state, dispatch] = useReducer(globalReducer, initialState);

    const login = async (usuario, history) => {
        await getCSRFCookie();
        addHeaders();
        await signIn(dispatch, usuario);
        const token = localStorage.getItem('Token')
        addAuthHeader(token)
        await getUser(dispatch, history)
        await getMaterias(dispatch)

    };


    return (
        <globalContext.Provider
            value={{
                usuario: state.usuario,
                session: state.session,
                postSelected: state.postSelected,
                materias: state.materias,
                login,
            }}
        >
            {props.children}
        </globalContext.Provider>
    );
};

const getMaterias = (dispatch) => {
    Axios.get('api/materias')
        .then(response => {
            sortArrayAlphabetically(response.data)
            dispatch({
                type: "INICIALIZAR_MATERIAS",
                payload: response.data
            })
        })
}

const signIn = async (dispatch, usuario) => {
    Axios.post("api/login", usuario)
        .then((response) => {
            dispatch({
                type: "INICIAR_SESION",
                payload: response.data,
            });
        })
        .catch(({response}) => {
            if (response.data.mensaje) {
                toast.error(response.data.mensaje);
            } else {
                toast.error("El número de control no sido registrado");
            }
        });
};

const getUser = async (dispatch, history) => {
    Axios.get('api/user')
        .then(({data}) => {
            dispatch({
                type: "OBTENER_USUARIO",
                payload: data
            })
            history.push("/home");
        })
}


export default GlobalState;
