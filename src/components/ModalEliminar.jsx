import React from 'react'
import Axios from "../Axios";
import { toast } from "react-toastify";
import { ReactComponent as TrashIcon } from "../assets/icons/TrashIcon.svg";
import {
    ModalContainer,
    ModalBody,
    ModalHeader,
} from "../components/Modal/Modal";

const ModalEliminar = ({
    hide,
    isShowing,
    setDocumentos,
    selectedDelete,
}) => {
    const acceptDelete = () => {
        Axios.delete(`api/mochila/archivo/${selectedDelete}`).then(() => {
            setDocumentos((prevState) => {
                return prevState.filter(
                    (element) => element.id !== selectedDelete
                );
            });
            toast.success("Se eliminó el archivo con éxito");
            hide();
        });
    };

    return (
        <ModalContainer isShowing={isShowing}>
            <ModalHeader title={"Eliminar documento"} hide={hide} />
            <ModalBody
                description={
                    "Si aceptas eliminar este documento, dejará de aparecer en tu mochila. ¿Estás seguro?"
                }
            >
                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => acceptDelete()}
                        className="h-auto w-32 py-3 px-4 text-center rounded-full text-white bg-red focus:outline-none shadow-xl flex
                    transition duration-500 ease-in-out  hover:bg-red-dark"
                    >
                        <TrashIcon className="fill-current" />
                        Eliminar
                    </button>
                    <button
                        onClick={hide}
                        className="h-auto w-32 py-3 px-4 text-center rounded-full bg-gray-light focus:outline-none shadow-xl
                    transition duration-500 ease-in-out  hover:bg-gray"
                    >
                        Cancelar
                    </button>
                </div>
            </ModalBody>
        </ModalContainer>
    );
};
export default ModalEliminar
