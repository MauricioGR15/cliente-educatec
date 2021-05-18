import React from "react";

const NavbarLogin = () => {
    return (
        <header className="h-24 md:h-1/6 w-full">
            <div className="p-4 float-left">Logo</div>
            <button
                className="w-auto h-auto bg-violet shadow-lg px-2 rounded-full 
                        absolute top-4 right-4 sm:hidden xs:block"
            >
                <a href="#Ingresar" className="text-white text-sm">
                    Ingresar
                </a>
            </button>
        </header>
    );
};

export default NavbarLogin;
