import React from "react";
import {
    ModalContainer,
    ModalBody,
    ModalHeader,
} from "../components/Modal/Modal";
import Select from "../components/Select";
import Textfield, { TextArea } from "../components/Textfield";
import {useForm} from 'react-hook-form'
import Axios from '../Axios'
import { toast } from "react-toastify";

const ModalPost = ({ isShowing, toggle, materias, selectedIdDocument }) => {


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onClose = () => {
        toggle();
        reset();
    };

    const onSubmit = (data) => {
        let archivos = []
        archivos.push(selectedIdDocument)
        const texto = document.getElementById('texto').value.trim();
        const body = {...data, archivos, texto}
        console.log(body);

        Axios.post('api/posts', body)
            .then(response => {
                toast.success("El documento ha sido publicado, lo puedes ver en Home")
                onClose()
            })
            .catch(error => {
                console.log(error.reponse);
                toast.error("Ha ocurrido un problema al publicar documento")
            })
        
    }

    return (
        <ModalContainer isShowing={isShowing}>
            <ModalHeader title="Publicar documento" hide={onClose} />
            <ModalBody
                description="Este documento se publicará y estará visible
                para otros usuarios de EducaTec. En la descripción intenta mantener 
                un lenguaje formal y educado."
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-center p-6 gap-4">
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
                        <Textfield
                            name="subtitulo"
                            register={register}
                            errors={errors}
                            validations={{}}
                        >
                            Temas
                        </Textfield>
                        <TextArea
                            name="texto"
                            register={register}
                            errors={errors}
                            validations={{
                                required: "La descripción es obligatoria",
                            }}
                        >
                            Descripción
                        </TextArea>
                        <button
                            type="submit"
                            className="h-14 w-40 p-4 rounded-full bg-violet focus:outline-none shadow-xl
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
};
export default ModalPost;
