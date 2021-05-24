import React from "react";
import { ReactComponent as TrashIcon } from "../assets/icons/TrashIcon.svg";
import { ReactComponent as ShareIcon } from "../assets/icons/ShareIcon.svg";
import { ReactComponent as DownloadIcon } from "../assets/icons/DownloadIcon.svg";
import { toast } from "react-toastify";
import Axios from "../Axios";

const VerDocumentos = ({
    documentos,
    toggleEliminar,
    togglePost,
    setSelected,
}) => {
    return (
        <div className="w-full p-10">
            <div className="p-2 text-blue font-semibold grid grid-cols-12 border-b border-violet">
                <div className="col-span-10 md:col-span-4 ">Nombre</div>
                <div className="hidden md:block md:col-span-4 ">Materia</div>
                <div className="hidden md:block md:col-span-1 ">Semestre</div>
                <div className="hidden md:block md:col-span-2 ">
                    Última modificación
                </div>
            </div>
            {documentos.map((item) => {
                return (
                    <FilaTabla
                        key={item.id}
                        item={item}
                        toggleEliminar={toggleEliminar}
                        togglePost={togglePost}
                        setSelected={setSelected}
                    />
                );
            })}
        </div>
    );
};

const FilaTabla = ({ item, toggleEliminar, setSelected, togglePost }) => {
    const onDeleteClick = () => {
        toggleEliminar();
        setSelected(item.id);
    };

    const onPostClick = () => {
        togglePost();
        setSelected(item.id);
    };

    const onDownloadClick = () => {
        Axios({
            url: `api/mochila/descargar/${item.id}`,
            method: "GET",
            responseType: "blob",
        })
            .then((response) => {
                const url = window.URL.createObjectURL(
                    new Blob([response.data])
                );
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", item.nombre);
                document.body.appendChild(link);
                link.click();
            })
            .then(() => {
                toast.success("El archivo se descargará en unos momentos");
            });
    };

    return (
        <div className="my-1 p-2 grid grid-cols-12 rounded-lg hover:bg-gray-light hover:font-semibold">
            <div className="col-span-9 md:col-span-4 pr-1">{item.nombre}</div>
            <div className="hidden md:block md:col-span-4 pr-1">{item.materia}</div>
            <div className="hidden md:block md:col-span-1 text-center">{item.semestre}</div>
            <div className="hidden md:block md:col-span-2 text-center">
                {item.fecha_modificacion}
            </div>
            <div className="col-span-3 md:col-span-1">
                <div className="grid grid-cols-3 justify-items-start content-center">
                    <button
                        onClick={() => onDeleteClick()}
                        className="h-6 w-6  focus:outline-none"
                    >
                        <TrashIcon className="fill-current text-gray animation duration-500 ease-in-out hover:text-red" />
                    </button>
                    <button
                        onClick={() => onDownloadClick()}
                        className="h-6 w-6  focus:outline-none"
                    >
                        <DownloadIcon className="fill-current text-gray animation duration-500 ease-in-out hover:text-mint-dark" />
                    </button>
                    {item.privado && (
                        <button
                            onClick={() => onPostClick()}
                            className="h-6 w-6  focus:outline-none place-self-end"
                        >
                            <ShareIcon className="fill-current text-mint animation duration-500 ease-in-out hover:text-mint-dark" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};



export default VerDocumentos;
