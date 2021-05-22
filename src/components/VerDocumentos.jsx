import React from "react";
import { ReactComponent as TrashIcon } from "../assets/icons/TrashIcon.svg";
import { ReactComponent as ShareIcon } from "../assets/icons/ShareIcon.svg";
import { ReactComponent as DownloadIcon } from "../assets/icons/DownloadIcon.svg";
import {
    ModalContainer,
    ModalHeader,
    ModalBody,
} from "../components/Modal/Modal";
import { toast } from "react-toastify";
import Axios from "../Axios";

const VerDocumentos = ({ documentos, toggleEliminar, setSelected }) => {
    return (
        <div className="w-full p-10">
            <div className="p-2 text-blue font-semibold grid grid-cols-12 border-b border-violet">
                <div className="col-span-4 ">Nombre</div>
                <div className="col-span-4 ">Materia</div>
                <div className="col-span-1 ">Semestre</div>
                <div className="col-span-2 ">Última modificación</div>
            </div>
            {documentos.map((item) => {
                return (
                    <FilaTabla
                        key={item.id}
                        item={item}
                        toggleEliminar={toggleEliminar}
                        setSelected={setSelected}
                    />
                );
            })}
        </div>
    );
};

const FilaTabla = ({ item, toggleEliminar, setSelected }) => {
    const onDeleteClick = () => {
        toggleEliminar();
        setSelected(item.id);
    };

    const onDownloadClick = () => {
        console.log('llega');
        Axios({
            url: `api/mochila/descargar/${item.id}`,
            method: "GET",
            responseType: "blob",
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", item.nombre); //or any other extension
            document.body.appendChild(link);
            link.click();
        }).then(()=> {
            toast.success('El archivo se descargará en unos momentos')
        });
    };

    return (
        <div className="my-1 p-2 grid grid-cols-12 rounded-lg hover:bg-gray-light hover:font-semibold">
            <div className="col-span-4 pr-1">{item.nombre}</div>
            <div className="col-span-4 pr-1">{item.materia}</div>
            <div className="col-span-1 ">{item.semestre}</div>
            <div className="col-span-2 ">{item.fecha_modificacion}</div>
            <div className="grid grid-cols-3 justify-items-start content-center">
                <button
                    onClick={() => onDeleteClick()}
                    className="h-6 w-6  focus:outline-none"
                >
                    <TrashIcon className="fill-current text-gray animation duration-500 ease-in-out hover:text-red" />
                </button>
                <button onClick={() => onDownloadClick()} className="h-6 w-6  focus:outline-none">
                    <DownloadIcon  className="fill-current text-gray animation duration-500 ease-in-out hover:text-mint-dark" />
                </button>
                {item.privado && (
                    <button className="h-6 w-6  focus:outline-none place-self-end">
                        <ShareIcon className="fill-current text-mint animation duration-500 ease-in-out hover:text-mint-dark" />
                    </button>
                )}
            </div>
        </div>
    );
};

export const ModalEliminar = ({
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

export default VerDocumentos;
