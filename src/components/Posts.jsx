import React, {useEffect, useState} from "react";
import { ReactComponent as DownloadIcon } from "../assets/icons/DownloadIcon.svg";
import { ReactComponent as UtilIcon } from "../assets/icons/UtilIcon.svg";
import { ReactComponent as NoUtilIcon } from "../assets/icons/NoUtilIcon.svg";
import { ReactComponent as CommentIcon } from "../assets/icons/CommentIcon.svg";
import Axios from "../Axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {set} from "react-hook-form";

export const Post = ({ post, setPosts }) => {
    return (
        <ContainerCard>
            <HeaderCard
                nombre={post.nombre}
                semestre={post.semestre}
                materia={post.materia}
                foto={post.fotoAutor}
            />
            <SubHeaderCard subtitulo={post.subtitulo} fecha={post.fecha} />
            <DescriptionCard descripcion={post.texto} />
            {post.archivos && <DocumentosAnexados documentos={post.archivos} />}

            <FooterCard
                post={post}
                cantComentarios={post.numComentarios}
                comentarios={post.Comentarios}
            />
        </ContainerCard>
    );
};


export const ContainerCard = ({ children }) => (
    <div className="w-full p-3  h-auto rounded-lg shadow">{children}</div>
);

const HeaderCard = ({ nombre, semestre, materia, foto }) => {
    return (
        <div className="w-full flex justify-between items-center border-b border-gray pb-1">
            <div className="flex items-center">
                <div
                    className="rounded-full mr-1 border-2 border-mint w-8 h-8 bg-center bg-cover"
                    style={{backgroundImage: `url(${foto})`}}
                    alt="Foto de perfil"
                />
                <p className="text-blue text-left font-semibold text-xs ">
                    {`${nombre} • ${semestre}`}
                </p>
            </div>

            <p className="w-1/2 text-mint text-xs font-semibold text-right">
                {materia}
            </p>
        </div>
    );
};

const SubHeaderCard = ({ fecha, subtitulo }) => {
    return (
        <div className="w-full flex justify-between py-2">
            <p className="text-xs xl:text-xs text-mint-dark">{subtitulo}</p>
            <p className="text-xs xl:text-xs text-mint-dark">{fecha}</p>
        </div>
    );
};

const DescriptionCard = ({ descripcion }) => {
    return (
        <pre className="text-blue font-work font-medium py-2 whitespace-pre-wrap">
            {descripcion}
        </pre>
    );
};

const DocumentosAnexados = ({ documentos }) => {
    const onDownloadClick = (id, nombre) => {
        Axios({
            url: `api/mochila/descargar/${id}`,
            method: "GET",
            responseType: "blob",
        })
            .then((response) => {
                const url = window.URL.createObjectURL(
                    new Blob([response.data])
                );
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", nombre);
                document.body.appendChild(link);
                link.click();
            })
            .then(() => {
                toast.success("El archivo se descargará en unos momentos");
            });
    };

    return (
        <div>
            {documentos.map((item) => {
                return (
                    <button
                        onClick={() => onDownloadClick(item.id, item.nombre)}
                        key={item.id}
                        className="w-auto p-2 pl-0 flex justify-start focus:outline-none text-violet 
                        transition ease-in-out duration-500 hover:text-mint-dark hover:underline"
                    >
                        <DownloadIcon className="fill-current   h-6 pr-2" />
                        <p>{item.nombre}</p>
                    </button>
                );
            })}
        </div>
    );
};

const FooterCard = ({
    cantComentarios,
    post,
    comentarios,
}) => {
    const location = useLocation();

    const calcularAceptacion = (votosBuenos, votosMalos) =>
        Math.round((votosBuenos / (votosBuenos + votosMalos)) * 100);

    const [calificaciones, setCalificaciones] = useState(post.calificaciones)
    const [like, setLike] = useState(post.calificaciones.votoPropio)

    useEffect(() => {
        setCalificaciones({
                ...calificaciones,
                aceptacion: calcularAceptacion(calificaciones.votosBuenos, calificaciones.votosMalos)
            }
        )
    }, [calificaciones.votosBuenos, calificaciones.votosMalos])

    const handleLikes = (estado) => {
        Axios.post(`api/calificar/post/${post.id}`, { voto: estado })
            .then(response => {
                setCalificaciones(response.data.votosBuenos + response.data.votosMalos)
                setLike(response.data.votoPropio)
            })
            .catch(error =>  toast.error('No puedes votar tus propios posts o comentarios'))
    };



    return (
        <div className="pt-4 pr-4 flex justify-between">
            {cantComentarios === undefined ? (
                <div
                    className="flex focus:outline-none items-center
                    select-none
                    transition duration-500 ease-in-out 
                    transform hover:translate-y-1 hover:translate-x-1 hover:scale-110"
                >
                    <CommentIcon className="fill-current text-mint" />
                    <span className="text-xs text-blue pl-1">{`${comentarios.length} comentarios`}</span>
                </div>
            ) : (
                <Link to={`${location.pathname}/${post.id}`}>
                    <button
                        disabled={comentarios ? false : true}
                        className="flex focus:outline-none items-center
                    transition duration-500 ease-in-out 
                    transform hover:translate-y-1 hover:translate-x-1 hover:scale-110"
                    >
                        <CommentIcon className="fill-current text-mint" />
                        <span className="text-xs text-blue pl-1">{`${cantComentarios} comentarios`}</span>
                    </button>
                </Link>
            )}

            <div className="grid grid-cols-3 gap-2">
                <button
                    onClick={() => handleLikes(1)}
                    className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110"
                >
                    {like === 2 ? (
                        <UtilIcon className="fill-current text-mint animation duration-1500 ease-in-out" />
                    ) : (
                        <UtilIcon className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint" />
                    )}
                </button>
                <button
                    className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110"
                    onClick={() => handleLikes(0)}
                >
                    {like === 0 ? (
                        <NoUtilIcon className="fill-current text-mint-dark animation duration-1500 ease-in-out" />
                    ) : (
                        <NoUtilIcon className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint-dark" />
                    )}
                </button>
                <p className='w-4'>{isNaN(calificaciones.aceptacion) ? "0%" : `${calificaciones.aceptacion}%`}</p>
            </div>
        </div>
    );
};

export default Post;
