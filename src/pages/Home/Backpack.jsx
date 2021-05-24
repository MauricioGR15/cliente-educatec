import React, { useState, useEffect } from "react";
import { BotonNuevo } from "../../components/Botones";
import { ReactComponent as EmptySvg } from "../../assets/svg/Empty.svg";
import useModal from "../../components/Modal/useModal";
import Axios from "../../Axios";
import { sortArrayAlphabetically } from "../../helpers/Util";
import VerDocumentos from "../../components/VerDocumentos";
import ModalNuevoDocumento from "../../components/ModalNuevoDocumento";
import ModalPost from "../../components/ModalPost";
import ModalEliminar from '../../components/ModalEliminar'
import LoadingSpin from '../../components/LoadingSpin'

const Backpack = () => {
    const { isShowing, toggle } = useModal();
    const [documentos, setDocumentos] = useState([]);
    const [materias, setMaterias] = useState([]);
    const [selectedIdDocument, setSelected] = useState(null);
    const { isShowing: showingEliminar, toggle: toggleEliminar } = useModal();
    const { isShowing: showingPost, toggle: togglePost } = useModal();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get("api/mochila").then((response) => {
            setDocumentos(response.data);
            setLoading(false);
        });
        Axios.get("api/materias").then((response) => {
            let elementos = response.data;
            sortArrayAlphabetically(elementos);
            setMaterias(elementos);
        });
    }, []);

    const RenderMochila = () => {
        if (isLoading) {
            return <LoadingSpin />;
        } else {
            if (documentos.length === 0) return <MochilaVacia />;
            else
                return (
                    <VerDocumentos
                        documentos={documentos}
                        toggleEliminar={toggleEliminar}
                        togglePost={togglePost}
                        setSelected={setSelected}
                    />
                );
        }
    };

    return (
        <div>
            <div className="w-full flex items-center gap-16 px-4">
                <BotonNuevo onClick={toggle} />
                <h2 className="text-blue font-semibold text-2xl">Mi mochila</h2>
            </div>

            <RenderMochila />

            <ModalNuevoDocumento
                isShowing={isShowing}
                toggle={toggle}
                materias={materias}
            />
            <ModalEliminar
                setDocumentos={setDocumentos}
                hide={toggleEliminar}
                isShowing={showingEliminar}
                selectedIdDocument={selectedIdDocument}
            />
            <ModalPost
                isShowing={showingPost}
                toggle={togglePost}
                materias={materias}
                selectedIdDocument={selectedIdDocument}
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

export default Backpack;
