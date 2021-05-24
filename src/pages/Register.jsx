import React, { useEffect, useState } from "react";
import { ReactComponent as RegistroSvg } from "../assets/svg/Sharing.svg";
import Footer from "../components/Footer";
import NavbarLogin from "../components/NavbarLogin";
import Wrapper from "../layout/Wrapper";
import Textfield from "../components/Textfield";
import Select from "../components/Select";
import { useForm } from "react-hook-form";
import { registerUser } from "../controllers/SessionController";
import { useHistory } from "react-router";
import MainCenterItems from "../layout/MainCenterItems";

const semestres = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Register = () => {
    return (
        <>
            <NavbarLogin />
            <Wrapper>
                <MainCenterItems>
                    <ImagenInvitacion />
                    <div className="md:w-1/2 w-full flex flex-col  items-center  my-4">
                        <h2 className="text-center text-blue text-sans text-xl font-semibold">
                            Llena el formulario para iniciar <br />
                            en EducaTec
                        </h2>
                        <Formulario />
                    </div>
                </MainCenterItems>
            </Wrapper>
            <Footer />
        </>
    );
};

const ImagenInvitacion = () => (
    <div className="md:w-1/2 w-full flex flex-col  items-center space-y-16 my-4">
        <RegistroSvg className="w-80 md:w-96 h-auto" />
        <p className="text-violet text-work font-medium">
            Regístrate para comenzar a compartir <br />
            tus documentos y recibir feedback
        </p>
    </div>
);

const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();

    const history = useHistory();

    const onSubmit = async (data) => {
        console.log(data);
        await registerUser(data, history);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-72 md:w-96 ">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-full">
                    <Textfield
                        name={"nombre"}
                        type="text"
                        register={register}
                        errors={errors}
                        validations={{ required: "Este campo es requerido" }}
                    >
                        Nombre
                    </Textfield>
                </div>
                <div className="col-span-full">
                    <Textfield
                        name={"apellidos"}
                        type="text"
                        register={register}
                        errors={errors}
                        validations={{ required: "Este campo es requerido" }}
                    >
                        Apellidos
                    </Textfield>
                </div>
                <div className="col-span-full">
                    <Textfield
                        name={"email"}
                        type="email"
                        register={register}
                        errors={errors}
                        validations={{
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "No es un correo válido",
                            },
                        }}
                    >
                        Correo Institucional
                    </Textfield>
                </div>
                <div className="col-span-full">
                    <Textfield
                        name={"password"}
                        type="password"
                        register={register}
                        errors={errors}
                        validations={{
                            required: "Este campo es requerido",
                            minLength: {
                                value: 8,
                                message:
                                    "Debe contener por lo menos 8 caracteres",
                            },
                        }}
                    >
                        Contraseña
                    </Textfield>
                </div>
                <div className="col-span-full">
                    <Textfield
                        name={"password_confirmation"}
                        type="password"
                        register={register}
                        errors={errors}
                        validations={{
                            validate: {
                                isEqual: () =>
                                    getValues("password") ===
                                        getValues("password_confirmation") ||
                                    "Las contraseñas no coinciden",
                            },
                            required: "Este campo es requerido",
                            minLength: {
                                value: 8,
                                message:
                                    "Debe contener por lo menos 8 caracteres",
                            },
                        }}
                    >
                        Confirmar contraseña
                    </Textfield>
                </div>
                {/* <div className="col-span-full md:col-span-9">
                    <Select
                        name={"carrera"}
                        options={carreras}
                        label="Carrera"
                        register={register}
                        errors={errors}
                        validations={{ required: "Seleccione una opción" }}
                    />
                </div> */}
                <div className="col-span-6">
                    <Select
                        name={"semestre"}
                        label="Semestre"
                        options={semestres}
                        register={register}
                        errors={errors}
                        validations={{ required: "Seleccione una opción" }}
                    />
                </div>
                <div className="col-span-full">
                    <div className="p-4 flex justify-center">
                        <button
                            className="h-14 w-40 p-4 bg-violet rounded-full shadow-xl focus:outline-none
                                        transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                                        hover:bg-violet-dark "
                        >
                            <p className="text-white font-medium text-lg">
                                Registrarse
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;
