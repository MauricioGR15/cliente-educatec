import React from "react";
import { ReactComponent as PdfIcon } from "../assets/icons/PDFIcon.svg";
import { ReactComponent as UtilIcon } from "../assets/icons/UtilIcon.svg";
import { ReactComponent as NoUtilIcon } from "../assets/icons/NoUtilIcon.svg";
import { ReactComponent as CommentIcon } from "../assets/icons/CommentIcon.svg";

const PostHome = ({ post }) => {
    return (
        <div className="w-full p-3 md:w-3/4 lg:w-3/5 h-auto rounded-lg shadow">
            <HeaderCard
                nombre={post.nombre}
                semestre={post.semestre}
                materia={post.materia}
                foto={post.foto}
            />
            <SubHeaderCard categoria={post.categoria} fecha={post.fecha} />
            <DescriptionCard descripcion={post.descripcion} />
            <DocumentosAnexados documentos={post.documentos} />
            <FooterCard
                cantComentarios={post.cantComentarios}
                util={post.util}
                cantNoUtil={post.cantNoUtil}
                cantUtil={post.cantUtil}
            />
        </div>
    );
};

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

const SubHeaderCard = ({ fecha, categoria }) => {
    return (
        <div className="w-full flex justify-between py-1">
            <p className="text-xs xl:text-xs text-mint-dark">{categoria}</p>
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
    return (
        <div className="grid grid-cols-1 gap-2">
            <div className="flex">
                <PdfIcon className="fill-current text-violet h-6 pr-2" />
                <p className="text-violet">Protocólo de investigación.pdf</p>
            </div>
            <div className="flex">
                <PdfIcon className="fill-current text-violet h-6 pr-2" />
                <p className="text-violet">Protocólo de investigación 2.pdf</p>
            </div>
        </div>
    );
};

const FooterCard = ({ cantComentarios, util, cantUtil, cantNoUtil }) => {
    return (
        <div className="pt-4 pr-4 flex justify-between">
            <button
                className="flex focus:outline-none items-center
                    transition duration-500 ease-in-out 
                    transform hover:translate-y-1 hover:translate-x-1 hover:scale-110"
            >
                <CommentIcon className="fill-current text-mint" />
                <span className="text-xs text-blue pl-1">{`${cantComentarios}`}</span>
            </button>
            <div className="flex gap-4">
                <button className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110">
                    {util === 2 ? (
                        <UtilIcon className="fill-current text-mint animation duration-1500 ease-in-out hover:text-gray" />
                    ) : (
                        <UtilIcon className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint" />
                    )}
                </button>
                <button className="focus:outline-none transition duration-1000 ease-in-out transform hover:scale-110">
                    {util === 0 ? (
                        <NoUtilIcon className="fill-current text-mint-dark animation duration-1500 ease-in-out hover:text-mint-gray" />
                    ) : (
                        <NoUtilIcon className="fill-current text-gray animation duration-1500 ease-in-out hover:text-mint-dark" />
                    )}
                </button>
                <p>{cantUtil / (cantUtil + cantNoUtil)}</p>
            </div>
        </div>
    );
};

export default PostHome;
