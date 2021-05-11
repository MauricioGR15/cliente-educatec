import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            Login
            <button>
                <Link to={'/registro'}>Registrar</Link>
            </button>
            <button>
                <Link to={'/home'}>Ingresar</Link>
            </button>
        </div>
    );
};

export default Login;
