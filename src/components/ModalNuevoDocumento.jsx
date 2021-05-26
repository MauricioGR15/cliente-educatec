import React from "react";
import {
    ModalContainer,
    ModalHeader,
    ModalBody,
} from "./Modal/Modal";
import {uploadFile} from "../controllers/SessionController";
import Textfield from "../components/Textfield";
import Select from "../components/Select";
import {useForm} from 'react-hook-form'

const semestres = ["", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ModalNuevoDocumento = ({isShowing, toggle, materias, setDocumentos}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const onClose = () => {
        toggle();
        reset();
    };

    const onSubmit = (data) => {
        uploadFile(data, toggle, reset, setDocumentos);
    };

    return (
        <ModalContainer isShowing={isShowing}>
            <ModalHeader title="Agrega un documento" hide={onClose}/>
            <ModalBody description="Selecciona un archivo para agregar a tu mochila">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-center p-6 gap-4">
                        <Textfield
                            name={"archivo"}
                            type="file"
                            register={register}
                            errors={errors}
                            validations={{
                                required: "El documento es obligatorio",
                            }}
                        >
                            Documento
                        </Textfield>
                        <Select
                            name={"materia"}
                            label="Materia"
                            options={materias}
                            register={register}
                            errors={errors}
                            validations={{
                                required: "Seleccione una opción",
                            }}
                        />
                        <Select
                            name={"semestre"}
                            label="Semestre"
                            options={semestres}
                            register={register}
                            errors={errors}
                            validations={{
                                required: "Seleccione una opción",
                            }}
                        />
                        <button
                            type="submit"
                            className="h-14 w-40 p-4 rounded-full bg-blue focus:outline-none shadow-xl
                                                transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:bg-mint"
                        >
                            <p className="text-white font-medium text-xl">
                                Agregar
                            </p>
                        </button>
                    </div>
                </form>
            </ModalBody>
        </ModalContainer>
    );
};
export default ModalNuevoDocumento;
