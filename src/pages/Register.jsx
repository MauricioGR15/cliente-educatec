import React from "react";
import { Link } from "react-router-dom";
import RegistroSvg from "../assets/svg/Sharing.svg";
import Footer from "../components/Footer";
import NavbarLogin from "../components/NavbarLogin";
import Wrapper from "../layout/Wrapper";
import Textfield from "../components/Textfield";
import Select from "../components/Select";

const carreras = [
    "Seleccione",
    "Sistemas computacionales",
    "Bioquímica",
    "Mecatrónica",
    "Mecánica",
];
const semestres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Register = () => {
    return (
        <Wrapper>
            <NavbarLogin />

            <main class="w-full h-auto md:h-5/6 flex items-start flex-wrap justify-center">
                <ImagenInvitacion />
                <div class="md:w-1/2 w-full flex flex-col  items-center space-y-4 md:space-y-16 my-4">
                    <h2 class="text-center text-blue text-sans text-xl font-semibold">
                        Llena el formulario para iniciar <br />
                        en EducaTec
                    </h2>
                    <Formulario />
                </div>
            </main>
            <Footer />
        </Wrapper>
    );
};

const ImagenInvitacion = () => (
    <div class="md:w-1/2 w-full flex flex-col  items-center space-y-16 my-4">
        <img src={RegistroSvg} class="w-80 md:w-96" />
        <p class="text-violet text-work font-medium">
            Regístrate para comenzar a compartir <br />
            tus documentos y recibir feedback
        </p>
    </div>
);

const Formulario = () => (
    <form class="w-72 md:w-96 ">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-full">
                <Textfield name={"Nombre"} type="text">
                    Nombre
                </Textfield>
            </div>
            <div class="col-span-full">
                <Textfield name={"Apellidos"} type="text">
                    Apellidos
                </Textfield>
            </div>
            <div class="col-span-full">
                <Textfield name={"Correo"} type="email">
                    Correo Institucional
                </Textfield>
            </div>
            <div class="col-span-full md:col-span-9">
                <Select name={"Carrera"} options={carreras} label="Carrera" />
            </div>
            <div class="col-span-6 md:col-span-3">
                <Select name={"Semestre"} label="Sem" options={semestres} />
            </div>
            <div class="col-span-full">
                <div class="p-4 flex justify-center">
                    <button
                        class="h-14 w-40 p-4 bg-violet rounded-full shadow-xl focus:outline-none
                                        transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                                        hover:bg-violet-dark "
                    >
                        <Link to="/" class="text-white font-medium text-lg">
                            Registrarse
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </form>
);

export default Register;
