import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import CoffeeComputer from "../animations/CoffeeComputer";
import LoginSvg from "../assets/svg/Login.svg";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import Wrapper from "../layout/Wrapper";
import Textfield from "../components/Textfield";

const Login = () => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#computer-coffee"),
            animationData: CoffeeComputer,
        });
    }, []);

    return (
        <Wrapper>
            <NavbarLogin />
            <main class="w-full h-auto md:h-5/6 flex items-start flex-wrap justify-center">
                <SeccionRegistrar />
                <SeccionIngresar/>
            </main>
            <Footer />
        </Wrapper>
    );
};

const SeccionRegistrar = () => (
    <div class="md:w-1/2 w-full flex flex-col  items-center space-y-16 my-4">
        <h3 class="text-violet text-sans text-xl font-semibold">
            ¿Eres nuevo en EducaTec?
        </h3>
        <div id="computer-coffee" className="w-96 h-auto" />
        <button
            class="h-14 w-40 p-4 bg-violet rounded-full shadow-xl focus:outline-none
                    transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                    hover:bg-violet-dark "
        >
            <Link to="/registro" class="text-white font-medium text-lg">
                Regístrate
            </Link>
        </button>
        <p class="text-center text-blue text-work">
            Solo necesitas tu correo
            <br />
            institucional
        </p>
    </div>
);

const SeccionIngresar = () => (
    <div
        id="Ingresar"
        class=" md:w-1/2 w-full flex flex-col  items-center space-y-16 my-4"
    >
        <h3 class="text-blue text-sans text-xl font-semibold">
            Si ya eres parte, ingresa ya!
        </h3>
        <img class="w-96" src={LoginSvg} alt='Imagen referente al login'/>
        <form class="w-72 flex flex-col items-center space-y-8">
            <Textfield name='NoControl' type='text'>
                No. de Control
            </Textfield>
            <Textfield name='Password' type='password'>
                Contraseña
            </Textfield>
            <button
                class="h-14 w-40 p-4 rounded-full bg-blue focus:outline-none shadow-xl
                    transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:bg-mint"
            >
                <Link to="/home" class="text-white font-medium text-xl">
                    Ingresar
                </Link>
            </button>
        </form>
    </div>
);

export default Login;
