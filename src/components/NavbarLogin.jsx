import React from "react";
import Logo from "../assets/images/Logo.png";

const NavbarLogin = () => {
    return (
        <header className="h-24 md:h-1/6 w-full flex items-center justify-between px-4">
            <img className="w-48" alt="Logo de educatec" src={Logo} />
            <button className="sm:hidden block shadow-md p-2 rounded-full">
                <a href="./#Ingresar" className="text-violet text-sm font-semibold">
                    Ingresar
                </a>
            </button>
        </header>
    );
};

export default NavbarLogin;
