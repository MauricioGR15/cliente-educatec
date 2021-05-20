import React, { useContext, useEffect } from "react";
import {  Link, useHistory, useLocation } from "react-router-dom";
import lottie from "lottie-web";
import CoffeeComputer from "../animations/CoffeeComputer";
import LoginSvg from "../assets/svg/Login.svg";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import Wrapper from "../layout/Wrapper";
import { useForm } from "react-hook-form";
import Textfield from "../components/Textfield";
import globalContext from "../context/globalContext";

const Login = () => {

    const GlobalContext = useContext(globalContext);
    const { login } = GlobalContext;
    const history = useHistory()



    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#computer-coffee"),
            animationData: CoffeeComputer,
        });
    }, []);

    return (
        <Wrapper>
            <NavbarLogin />
            <main className="w-full h-auto md:h-5/6 flex items-start flex-wrap justify-center">
                <SeccionRegistrar />
                <SeccionIngresar login={login} history={history} />
            </main>
            <Footer />
        </Wrapper>
    );
};

const SeccionRegistrar = () => (
    <div className="md:w-1/2 w-full flex flex-col  items-center space-y-16 my-4">
        <h3 className="text-violet text-sans text-xl font-semibold">
            ¿Eres nuevo en EducaTec?
        </h3>
        <div id="computer-coffee" className="w-96 h-auto" />
        <button
            className="h-14 w-40 p-4 bg-violet rounded-full shadow-xl focus:outline-none
                    transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                    hover:bg-violet-dark "
        >
            <Link to="/registro" className="text-white font-medium text-lg">
                Regístrate
            </Link>
        </button>
        <p className="text-center text-blue text-work">
            Solo necesitas tu correo
            <br />
            institucional
        </p>
    </div>
);

const SeccionIngresar = ({login, history}) => {

    
   

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        login(data, history)
    };

    return (
        <div
            id="Ingresar"
            className=" md:w-1/2 w-full flex flex-col  items-center space-y-16 my-4"
        >
            <h3 className="text-blue text-sans text-xl font-semibold">
                Si ya eres parte, ingresa ya!
            </h3>
            <img
                className="w-96"
                src={LoginSvg}
                alt="Imagen referente al login"
            />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-72 flex flex-col items-center space-y-8"
            >
                <Textfield
                    name="matricula"
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type="text"
                    errors={errors}
                >
                    No. de Control
                </Textfield>
                <Textfield
                    name="password"
                    type="password"
                    register={register}
                    validations={{ required: "Este campo es obligaorio" }}
                    errors={errors}
                >
                    Contraseña
                </Textfield>
               
                <button
                    type="submit"
                    className="h-14 w-40 p-4 rounded-full bg-blue focus:outline-none shadow-xl
                    transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:bg-mint"
                >
                    <p className="text-white font-medium text-xl">Ingresar</p>
                </button>
            </form>
        </div>
    );
};

export default Login;
