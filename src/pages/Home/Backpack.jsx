import React, { useState, useEffect } from "react";
import { BotonNuevo } from "../../components/Botones";
import { ReactComponent as EmptySvg } from "../../assets/svg/Empty.svg";
import useModal from "../../components/Modal/useModal";
import {
    ModalContainer,
    ModalHeader,
    ModalBody,
} from "../../components/Modal/Modal";
import Textfield from "../../components/Textfield";
import Select from "../../components/Select";
import { useForm } from "react-hook-form";
import Axios from "../../Axios";
import { sortArrayAlphabetically } from "../../helpers/Util";
import { uploadFile } from "../../controllers/SessionController";
import VerDocumentos, { ModalEliminar } from "../../components/VerDocumentos";

const semestres = ["", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Backpack = () => {
    const { isShowing, toggle } = useModal();
    const [documentos, setDocumentos] = useState([]);
    const [materias, setMaterias] = useState([]);
    const [selectedDelete, setSelected] = useState(null);
    const { isShowing: showingEliminar, toggle: toggleEliminar } = useModal();
    const { isShowing: showingPublish, toggle: togglePublish } = useModal();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        uploadFile(data, toggle, reset);
    };

    const onClose = () => {
        toggle();
        reset();
    };

    useEffect(() => {
        Axios.get("api/mochila").then((response) => {
            setDocumentos(response.data);
        });
        Axios.get("api/materias").then((response) => {
            let elementos = response.data;
            sortArrayAlphabetically(elementos);
            setMaterias(elementos);
        });
    }, []);

    return (
        <div>
            <div className="w-full flex items-center gap-16 px-4">
                <BotonNuevo onClick={toggle} />
                <h2 className="text-blue font-semibold text-2xl">Mi mochila</h2>
            </div>
            {documentos.length !== 0 ? (
                <VerDocumentos
                    documentos={documentos}
                    toggleEliminar={toggleEliminar}
                    setSelected={setSelected}
                />
            ) : (
                <MochilaVacia />
            )}

            <Modal
                isShowing={isShowing}
                onClose={onClose}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
                materias={materias}
            />
            <ModalEliminar
                setDocumentos={setDocumentos}
                hide={toggleEliminar}
                isShowing={showingEliminar}
                selectedDelete={selectedDelete}
            />
        </div>
    );
};

const MochilaVacia = () => (
    <div className="w-full p-8 flex flex-col items-center justify-start gap-8">
        <legend className="font-work text-blue text text-center">
            Aún no tienes documentos en tu
            <br />
            repositorio. Puedes empezar a subir
            <br />
            archivos y organizarlos a tu gusto.
        </legend>
        <EmptySvg className="h-72 md:w-7/12 md:h-auto w-min" />
    </div>
);

const Modal = ({
    isShowing,
    onClose,
    register,
    handleSubmit,
    errors,
    materias,
    onSubmit,
}) => (
    <ModalContainer isShowing={isShowing} hide={onClose}>
        <ModalHeader title="Agrega un documento" hide={onClose} />
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

export default Backpack;
