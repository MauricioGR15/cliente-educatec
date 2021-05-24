import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const NavbarLogin = () => {
    return (
        <header className="w-full h-auto absolute top-0 flex items-center justify-between px-4">
            <Link to='/'>
                <img className="w-48 sm:w-52 md:w-72" alt="Logo de educatec" src={Logo} />
            </Link>
            
            <button className="sm:hidden block shadow-md p-2 rounded-full">
                <a href="./#Ingresar" className="text-violet text-sm font-semibold">
                    Ingresar
                </a>
            </button>
        </header>
    );
};

export default NavbarLogin;
