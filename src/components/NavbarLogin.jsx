import React from "react";

const NavbarLogin = () => {
    return (
        <header class="h-24 md:h-1/6 w-full">
            <div class="p-4 float-left">Logo</div>
            <button
                class="w-auto h-auto bg-violet shadow-lg px-2 rounded-full 
                        absolute top-4 right-4 sm:hidden xs:block"
            >
                <a href="#Ingresar" class="text-white text-sm">
                    Ingresar
                </a>
            </button>
        </header>
    );
};

export default NavbarLogin;
