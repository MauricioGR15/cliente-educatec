import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import CoffeeComputer from "../animations/CoffeeComputer";
import LoginSvg from "../assets/svg/Login.svg";

const Login = () => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#computer-coffee"),
            animationData: CoffeeComputer,
        });
    }, [CoffeeComputer]);

    return (
        <div class="container">
            <div class="h-24 w-full p-4 float-left">Logo</div>
            <button class='w-auto h-auto bg-violet shadow-lg px-2 rounded-full 
            absolute top-4 right-4 sm:hidden xs:block'>
                <a href='#Ingresar' class='text-white text-sm'>
                    Ingresar
                </a>
                
            </button>
            <div class="w-full grid grid-cols-1  md:grid-cols-2">
                <div class="flex flex-col  items-center space-y-16 my-4">
                    <h3 class="text-violet text-sans text-xl font-semibold">
                        ¿Eres nuevo en EducaTec?
                    </h3>
                    <div id="computer-coffee" className="w-96 h-auto" />
                    <button class="h-14 w-40 p-4 bg-violet rounded-full shadow-xl focus:outline-none
                    transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                    hover:bg-violet-dark ">
                        <Link to='/registro' class="text-white font-medium text-lg">
                            Regístrate
                        </Link>
                    </button>
                    <p class="text-center text-blue text-work">
                        Solo necesitas tu correo
                        <br />
                        institucional
                    </p>
                </div>
                <div id='Ingresar' class="flex flex-col items-center space-y-16 my-4">
                    <h3 class="text-blue text-sans text-xl font-semibold">
                        Si ya eres parte, ingresa ya!
                    </h3>
                    <img class="w-96" src={LoginSvg} />
                    <input
                        type="email"
                        placeholder="Usuario"
                        class="text-violet rounded-full shadow-md border-violet h-14 border-2 px-8 outline-none 
                        transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                        focus:translate-y-1 focus:scale-110"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        class="text-violet rounded-full shadow-md border-violet h-14 border-2 px-8 outline-none 
                        transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                        focus:translate-y-1 focus:scale-110"
                    />
                    <button class='h-14 w-40 p-4 rounded-full bg-blue focus:outline-none shadow-xl
                    transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:bg-mint'>
                        <Link class='text-white font-medium text-xl'>
                            Ingresar
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
