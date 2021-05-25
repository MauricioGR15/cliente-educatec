import {ReactComponent as UtilIcon} from "../assets/icons/UtilIcon.svg";
import {ReactComponent as NoUtilIcon} from "../assets/icons/NoUtilIcon.svg";
import React, {useState, useEffect} from "react";
import {ContainerCard} from "./Posts";
import Axios from "../Axios";
import {toast} from "react-toastify";

const calcularAceptacion = (votosBuenos, votosMalos) =>
    Math.round((votosBuenos / (votosBuenos + votosMalos)) * 100);

const Comment = ({comment}) => {


    return (
        <ContainerCard>
            <CommentHeader comment={comment}/>
            <CommentText comment={comment}/>
            <CommentFooter comment={comment}/>

        </ContainerCard>
    )
};

const CommentHeader = ({comment}) => (
    <div className="w-full flex justify-between items-center border-gray py-1">
        <div className="flex items-center">
            <div
                className="rounded-full border-2 border-mint sm:mx-2 w-8 h-8 bg-center bg-cover"
                style={{backgroundImage: `url(${comment.autor.foto})`}}
                alt="Foto de perfil"
            />
            <p className="text-blue text-left font-semibold text-xs">
                {`${comment.autor.nombre}`}
            </p>
        </div>
        <p className="text-xs text-mint-dark">{comment.fecha}</p>
    </div>
)

const CommentText = ({comment}) => (
    <div className="text-blue font-work font-medium py-2 whitespace-pre-wrap">
        {comment.texto}
    </div>
)

const CommentFooter = ({comment}) => {

    const [calificaciones, setCalificaciones] = useState(comment.calificaciones)
    const [like, setLike] = useState(comment.calificaciones.votoPropio)

    useEffect(() => {
        setCalificaciones({
                ...calificaciones,
                aceptacion: calcularAceptacion(calificaciones.votosBuenos, calificaciones.votosMalos)
            }
        )
    }, [calificaciones.votosMalos, calificaciones.votosBuenos])

    const handleLikes = (estado) => {
        Axios.post(`api/calificar/comentario/${comment.id}`, {voto: estado})
            .then(response => {
                setCalificaciones(response.data.votosBuenos + response.data.votosMalos)
                setLike(response.data.votoPropio)
            })
            .catch(error =>  toast.error('No puedes votar tus propios posts o comentarios'))
    }

    return (
        <div className="pt-2 pr-4 flex justify-end">
            <div className="flex gap-4">
                <button
                    onClick={() => handleLikes(1)}
                    className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110"
                >
                    {like === 2 ? (
                        <UtilIcon className="fill-current text-mint animation duration-1500 ease-in-out"/>
                    ) : (
                        <UtilIcon
                            className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint"/>
                    )}
                </button>
                <button
                    className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110"
                    onClick={() => handleLikes(0)}
                >
                    {like === 0 ? (
                        <NoUtilIcon className="fill-current text-mint-dark animation duration-1500 ease-in-out"/>
                    ) : (
                        <NoUtilIcon
                            className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint-dark"/>
                    )}
                </button>
                <p>{isNaN(calificaciones.aceptacion) ? "0%" : `${calificaciones.aceptacion}%`}</p>
            </div>
        </div>
    )
}

export default Comment