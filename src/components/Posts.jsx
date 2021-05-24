import React from "react";
import { ReactComponent as DownloadIcon } from "../assets/icons/DownloadIcon.svg";
import { ReactComponent as UtilIcon } from "../assets/icons/UtilIcon.svg";
import { ReactComponent as NoUtilIcon } from "../assets/icons/NoUtilIcon.svg";
import { ReactComponent as CommentIcon } from "../assets/icons/CommentIcon.svg";
import Axios from "../Axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
                id={post.id}
                cantComentarios={post.numComentarios}
                util={post.calificaciones.votoPropio}
                cantNoUtil={post.calificaciones.votosMalos}
                cantUtil={post.calificaciones.votosBuenos}
                setPosts={setPosts}
                comentarios={post.Comentarios}
            />
        </ContainerCard>
    );
};

export const Comment = ({ comment }) => { 
    
    let aceptacion = Math.round((comment.votosBuenos / (comment.votosBuenos + comment.votosMalos)) * 100);

    return (
    <ContainerCard>
        <div className="w-full flex justify-between border-gray py-1">
            <div className="flex items-center">
                <img
                    className="rounded-full border-2 border-mint sm:mx-2 w-8"
                    src={comment.autor.foto}
                    alt={`Foto de perfil de ${comment.autor.nombre}`}
                />
                <p className="text-blue text-left font-semibold text-sm sm:text-base">
                    {`${comment.autor.nombre}`}
                </p>
            </div>
            <p className="text-xs xl:text-xs text-mint-dark">{comment.fecha}</p>
        </div>
        <div className="text-blue font-work font-medium py-2">
            {comment.texto}
        </div>

        <div className="pt-4 pr-4 flex justify-end">
            <div className="flex gap-4">
                <button
                    onClick={() => {}}
                    className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110"
                >
                    {comment.votoPropio === 2 ? (
                        <UtilIcon className="fill-current text-mint animation duration-1500 ease-in-out" />
                    ) : (
                        <UtilIcon className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint" />
                    )}
                </button>
                <button
                    className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110"
                    onClick={() => {}}
                >
                    {comment.votoPropio === 0 ? (
                        <NoUtilIcon className="fill-current text-mint-dark animation duration-1500 ease-in-out" />
                    ) : (
                        <NoUtilIcon className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint-dark" />
                    )}
                </button>
                <p>{isNaN(aceptacion) ? "0%" : `${aceptacion}%`}</p>
            </div>
        </div>
    </ContainerCard>
)};

export const ContainerCard = ({ children }) => (
    <div className="w-full p-3  h-auto rounded-lg shadow">{children}</div>
);

const HeaderCard = ({ nombre, semestre, materia, foto }) => {
    return (
        <div className="w-full flex justify-between border-b border-gray py-1">
            <div className="flex items-center">
                <img
                    className="rounded-full border-2 border-mint sm:mx-2 w-8"
                    src={foto}
                    alt={`Foto de perfil de ${nombre}`}
                />
                <p className="text-blue text-left font-semibold text-sm sm:text-base">
                    {`${nombre} • ${semestre}`}
                </p>
            </div>

            <p className="text-mint text-sm sm:text-base font-semibold">
                {materia}
            </p>
        </div>
    );
};

const SubHeaderCard = ({ fecha, subtitulo }) => {
    return (
        <div className="w-full flex justify-between py-1">
            <p className="text-xs xl:text-xs text-mint-dark">{subtitulo}</p>
            <p className="text-xs xl:text-xs text-mint-dark">{fecha}</p>
        </div>
    );
};

const DescriptionCard = ({ descripcion }) => {
    return (
        <div className="text-blue font-work font-medium py-2">
            {descripcion}
        </div>
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
    id,
    cantComentarios,
    util,
    cantUtil,
    cantNoUtil,
    setPosts,
    comentarios,
}) => {
    const location = useLocation();

    let aceptacion = Math.round((cantUtil / (cantUtil + cantNoUtil)) * 100);

    let votoPropio;

    const handleLike = () => {
        if (util === 2) votoPropio = 1;
        if (util === 0 || util === 1) votoPropio = 2;

        Axios.post(`api/calificar/post/${id}`, { voto: votoPropio })
            .then(() => {
                setPosts((state) => {
                    const objIndex = state.findIndex((obj) => obj.id === id);
                    if (util === 1)
                        state[objIndex].calificaciones.votosBuenos =
                            cantUtil + 1;
                    if (util === 0)
                        state[objIndex].calificaciones.votosMalos =
                            cantNoUtil - 1;
                    if (util === 2)
                        state[objIndex].calificaciones.votosBuenos =
                            cantUtil - 1;

                    state[objIndex].calificaciones.votoPropio = votoPropio;
                });
            })
            .catch((error) => {
                if (error.response.data.Error)
                    toast.error(error.response.data.Error);
                else
                    toast.error(
                        "Ha ocurrido un error al dar like a esta publicación"
                    );
            });
    };

    const handleDislike = () => {
        if (util === 0) votoPropio = 1;
        if (util === 1 || util === 2) votoPropio = 0;

        Axios.post(`api/calificar/post/${id}`, { voto: votoPropio })
            .then(() => {
                setPosts((state) => {
                    const objIndex = state.findIndex((obj) => obj.id === id);
                    if (util === 1)
                        state[objIndex].calificaciones.votosBuenos =
                            cantNoUtil + 1;
                    if (util === 0)
                        state[objIndex].calificaciones.votosMalos =
                            cantNoUtil - 1;
                    if (util === 2)
                        state[objIndex].calificaciones.votosBuenos =
                            cantUtil - 1;

                    state[objIndex].calificaciones.votoPropio = votoPropio;

                    return state;
                });
            })
            .catch((error) => {
                if (error.response.data.Error)
                    toast.error(error.response.data.Error);
                else
                    toast.error(
                        "Ha ocurrido un error al dar like a esta publicación"
                    );
            });
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
                <Link to={`${location.pathname}/${id}`}>
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

            <div className="flex gap-4">
                <button
                    onClick={() => handleLike()}
                    className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110"
                >
                    {util === 2 ? (
                        <UtilIcon className="fill-current text-mint animation duration-1500 ease-in-out" />
                    ) : (
                        <UtilIcon className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint" />
                    )}
                </button>
                <button
                    className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110"
                    onClick={() => handleDislike()}
                >
                    {util === 0 ? (
                        <NoUtilIcon className="fill-current text-mint-dark animation duration-1500 ease-in-out" />
                    ) : (
                        <NoUtilIcon className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint-dark" />
                    )}
                </button>
                <p>{isNaN(aceptacion) ? "0%" : `${aceptacion}%`}</p>
            </div>
        </div>
    );
};

export default Post;
