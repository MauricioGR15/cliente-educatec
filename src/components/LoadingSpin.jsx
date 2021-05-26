import React from 'react'
import { ReactComponent as LoadingIcon } from "../assets/icons/LoadingIcon.svg";
const LoadingSpin = () => (
    <div className="pt-20 flex items-center gap-2 justify-center text-3xl animate-pulse">
        <LoadingIcon className="fill-current text-violet-dark animate-spin" />
        <p className="font-semibold text-blue">Cargando</p>
    </div>
);

export default LoadingSpin
