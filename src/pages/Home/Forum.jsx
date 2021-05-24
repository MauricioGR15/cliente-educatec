import React, {useEffect, useState, useContext} from 'react'
import PostsWrapper from '../../layout/PostsWrapper'
import Axios from '../../Axios'
import Post from '../../components/Posts'
import {ModalBody, ModalContainer, ModalHeader} from "../../components/Modal/Modal";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import Textfield, {TextArea} from "../../components/Textfield";
import globalContext from "../../context/globalContext";
import Select from "../../components/Select";
import {ReactComponent as QuestionIcon} from '../../assets/icons/QuestionIcon.svg'
import useModal from "../../components/Modal/useModal";

const Forum = () => {


    const [posts, setPosts] = useState([]);
    const {isShowing, toggle} = useModal()

    useEffect(() => {
        Axios.get('api/foro')
            .then(response => {
                setPosts(response.data)
            })

    }, [])


    return (
        <PostsWrapper>
            {posts.map((post, key) => {
                return <Post key={key} post={post}/>;
            })}
            <button
                onClick={toggle}
                className='fixed right-2 bottom-2 md:right-1/4 md:bottom-12 bg-mint h-16 w-16
                            rounded-full focus:outline-none hover:bg-violet shadow-lg
                            flex items-center justify-center duration-500 hover:scale-110 ease-in-out'
            >
                <QuestionIcon className='fill-current text-white'/>
            </button>
            <ModalNuevaPregunta isShowing={isShowing} toggle={toggle} />
        </PostsWrapper>
    );
}

const ModalNuevaPregunta = ({isShowing, toggle}) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const {materias} = useContext(globalContext)

    const onSubmit = (data) => {
        Axios.post('api/foro', data)
            .then(response => {
                toast.success("Tu pregunta ha sido publicada. Espera aportaciones de compañeros EducaTec")
                toggle()
                reset()
            })
    }

    const onClose = () => {
        toggle()
        reset()
    }

    return (
        <ModalContainer isShowing={isShowing}>
            <ModalHeader title={'Haz una pregunta'} hide={() => onClose()}/>
            <ModalBody
                description={'Escribe tu duda o pregunta en este foro. Compañeros de EducaTec aportarán a tu situación.'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-2'>
                        <Textfield
                            name='subtitulo'
                            register={register}
                            errors={errors}
                            validations={{
                                required: 'El tema es requerido',
                                maxLength: 25
                            }}
                        >
                            Tema
                        </Textfield>
                        <TextArea
                            name='texto'
                            register={register}
                            errors={errors}
                            validations={{
                                required: 'Es necesario que hagas una pregunta'
                            }}
                        >
                            Pregunta
                        </TextArea>
                        <Select
                            options={materias}
                            name={'materia'}
                            register={register}
                            errors={errors}
                            validations={{
                                required: 'Es necesario seleccionar una materia'
                            }}
                            label={'Materia'}
                        />
                        <button
                            type="submit"
                            className="m-2 h-12 w-28 p-4 self-end rounded-full bg-violet focus:outline-none shadow-xl
                            transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:bg-mint"
                        >
                            <p className="text-white font-medium text-xs">
                                Preguntar
                            </p>
                        </button>
                    </div>
                </form>
            </ModalBody>
        </ModalContainer>
    )
}

export default Forum
