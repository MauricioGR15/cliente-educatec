import React, { useReducer } from "react";
import globalContext from "./globalContext";
import globalReducer from "./globalReducer";
import Axios, { CSRF_Cookies } from "../Axios";

const GlobalState = (props) => {
    const initialState = {
        token: "",
        session: false,
        usuario: null,
        postSelected: null,
    };

    const [state, dispatch] = useReducer(globalReducer, initialState);

    const login = async (usuario, history) => {
        await getCSRFCookie();
        addHeaders(state.token);
        await signIn(dispatch, usuario, history);
    };

    return (
        <globalContext.Provider
            value={{
                usuario: state.usuario,
                session: state.session,
                postSelected: state.postSelected,
                login,
            }}
        >
            {props.children}
        </globalContext.Provider>
    );
};

function addHeaders(token) {
    if (document.cookie) {
        Axios.defaults.headers.common["X-XSRF-COOKIE"] =
            getCookie("XSRF-TOKEN");
    }

    if (token) {
        Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete Axios.defaults.headers.common["Authorization"]
    }
}

function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return value != null ? unescape(value[1]) : null;
}

async function getCSRFCookie() {
    Axios.get("/sanctum/csrf-cookie");
}

const signIn = async (dispatch, usuario, history) => {
    Axios.post("api/login", usuario).then((response) => {
        dispatch({
            type: "INICIAR_SESION",
            payload: response.data,
        });

        history.push("/home");
    });
};

export default GlobalState;
