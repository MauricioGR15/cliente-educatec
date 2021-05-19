import React from "react";
import {ReactComponent as AddIcon} from '../assets/icons/AddIcon.svg'

export const BotonNuevo = () => {
    return (
        <button
            type="submit"
            className="h-auto w-auto py-3 px-4 rounded-full bg-blue focus:outline-none shadow-xl flex
                    transition duration-500 ease-in-out  hover:bg-black"
        >
            <AddIcon className='fill-current text-mint'/>
            <p className="text-white font-medium">Nuevo</p>
        </button>
    );
};
