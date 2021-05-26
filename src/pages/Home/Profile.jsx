import React, {useContext} from 'react'
import globalContext from "../../context/globalContext";
import PostsWrapper from "../../layout/PostsWrapper";
import {ModalBody, ModalContainer, ModalHeader} from "../../components/Modal/Modal";
import useModal from "../../components/Modal/useModal";
import {useForm} from "react-hook-form";
import Textfield from "../../components/Textfield";
import { ReactComponent as UploadIcon } from'../../assets/icons/UploadIcon.svg'
import Axios from "../../Axios";
import {toast} from "react-toastify";

const Profile = () => {

    const {usuario} = useContext(globalContext)
    const {isShowing, toggle} = useModal()
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('Foto', data.Foto['0'])
        Object.keys(data).forEach((key) => formData.append(key, data[key]));
        Axios.post(`api/user`, data)
            .then(() => {
                toast.success('Se ha actualizado tu foto de perfil con éxito')
                reset()
                toggle()
            })
            .catch(()=>{
                toast.error('Ha ocurrido un error al actualizar tu foto de perfil')
            })

    }

    return (
        <PostsWrapper>
            <div className='w-full h-full flex gap-4 shadow-lg p-4 rounded-lg'>

                {/*<img*/}
                {/*    onClick={() => toggle()}*/}
                {/*    src={usuario.Foto}*/}
                {/*    alt={`Foto de perfil de ${usuario.Nombre}`}*/}
                {/*    className='h-24 rounded-full border-4 border-violet cursor-pointer'*/}
                {/*/>*/}
                <div
                    onClick={() => toggle()}
                    className="rounded-full border-2 border-violet h-24 w-24 bg-center bg-cover cursor-pointer"
                    style={{backgroundImage: `url(${usuario.Foto})`}}
                    alt="Foto de perfil"
                />


                <div className='flex flex-col w-auto justify-center'>
                    <p className='text-sm text-mint font-semibold tracking-widest'>
                        {usuario.NoControl}
                    </p>
                    <p className='text-xl text-blue'>
                        {usuario.Nombre}
                    </p>
                </div>
            </div>
            <ModalContainer isShowing={isShowing}>
                <ModalHeader title='Cambiar foto de perfil' hide={toggle}/>
                <ModalBody>
                    <form className='p-4 flex flex-col items-center gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <Textfield
                            type='file'
                            name='Foto'
                            register={register}
                            errors={errors}
                        >
                            Foto
                        </Textfield>
                        <button
                            type='submit'
                            className="h-14 w-40 p-4 flex justify-center gap-1 rounded-full bg-violet focus:outline-none shadow-xl
                                      transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:bg-mint"
                        >
                            <UploadIcon className='fill-current text-white' />
                            <p className='text-white' >Subir foto</p>
                        </button>
                    </form>
                </ModalBody>
            </ModalContainer>
        </PostsWrapper>
    )
}

export default Profile
