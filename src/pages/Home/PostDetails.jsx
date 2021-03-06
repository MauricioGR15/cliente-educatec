import React, { useState, useEffect } from "react";
import PostsWrapper from "../../layout/PostsWrapper";
import Axios from "../../Axios";
import { useParams } from "react-router-dom";
import Post from "../../components/Posts";
import LoadingSpin from "../../components/LoadingSpin";
import { TextArea } from "../../components/Textfield";
import { useForm } from "react-hook-form";
import useModal from "../../components/Modal/useModal";
import { ReactComponent as CommentaryIcon } from "../../assets/icons/CommentaryIcon.svg";
import {
    ModalContainer,
    ModalHeader,
    ModalBody,
} from "../../components/Modal/Modal";
import { toast } from "react-toastify";
import Comment from "../../components/Comment";

const PostDetails = () => {
    const { id } = useParams();
    const [detalle, setDetalle] = useState(null);
    const { isShowing, toggle } = useModal();

    useEffect(() => {
        Axios.get(`api/posts/${id}`).then((response) => {
            setDetalle(response.data);
        });
    }, []);

    return (
        <PostsWrapper>
            {detalle ? (
                <RenderPostDetails
                    isShowing={isShowing}
                    detalle={detalle}
                    toggle={toggle}
                    setDetalle={setDetalle}
                />
            ) : (
                <LoadingSpin />
            )}
        </PostsWrapper>
    );
};

export const RenderPostDetails = ({ detalle, isShowing, toggle, setDetalle }) => (
    <>
        <Post post={detalle} />
        <button
            onClick={toggle}
            className="fixed right-2 bottom-2 md:right-40 md:bottom-12
            flex items-center justify-center gap-2 h-auto w-32 p-4 self-end rounded-full bg-violet focus:outline-none shadow-xl
                            transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:bg-mint"
        >
            <CommentaryIcon className="fill-current text-white" />
            <p className="text-white font-medium text-xs">Comentar</p>
        </button>
        <div className="w-full flex flex-col gap-2 items-center">
            {detalle !== null && detalle.Comentarios.length === 0 ? (
                <div className="text-xl text-violet text-semibold h-8">
                    A??n no hay comentarios
                </div>
            ) : (
                detalle.Comentarios.map((item) => <Comment comment={item} />)
            )}
        </div>

        <ModalComentario
            id={detalle.id}
            isShowing={isShowing}
            toggle={toggle}
            setDetalle={setDetalle}
        />
    </>
);

export const ModalComentario = ({ id, isShowing, toggle, setDetalle, apiUrl }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        Axios.post(`api/comentar/post/${id}`, data).then((response) => {
            toast.success("Tu comentario se realiz?? con ??xito");
            toggle();
            reset();
            setDetalle((prevState) => {
                return {
                    ...prevState,
                    Comentarios : [...prevState.Comentarios, response.data]
                };
            });
        });
    };

    const onClose = () => {
        toggle();
        reset();
    };

    return (
        <ModalContainer isShowing={isShowing}>
            <ModalHeader title="Escribe un comentario" hide={() => onClose()} />
            <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full flex-col">
                        <TextArea
                            name="texto"
                            register={register}
                            errors={errors}
                            validations={{
                                required: "El texto es requerido",
                            }}
                        >
                            Comentario
                        </TextArea>
                        <button
                            type="submit"
                            className="m-2 h-12 w-28 p-4 self-end rounded-full bg-violet focus:outline-none shadow-xl
                            transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:bg-mint"
                        >
                            <p className="text-white font-medium text-xs">
                                Comentar
                            </p>
                        </button>
                    </div>
                </form>
            </ModalBody>
        </ModalContainer>
    );
};

export default PostDetails;
