import React from "react";
import { BotonNuevo } from "../../components/Botones";
import { ReactComponent as EmptySvg } from "../../assets/svg/Empty.svg";

const Backpack = () => {
    return (
        <div>
            <div className="w-full flex items-center gap-16 px-4">
                <BotonNuevo />
                <h2 className="text-blue font-semibold text-2xl">Mi mochila</h2>
            </div>
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
        </div>
    );
};

export default Backpack;
