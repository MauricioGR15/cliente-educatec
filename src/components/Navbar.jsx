import React, { useContext } from "react";
import { ReactComponent as HomeIcon } from "../assets/icons/HomeIcon.svg";
import { ReactComponent as BackpackIcon } from "../assets/icons/BackpackIcon.svg";
import { ReactComponent as ForoIcon } from "../assets/icons/ForoIcon.svg";
import { NavLink } from "react-router-dom";
import globalState from "../context/globalContext";

const Navbar = () => {
    const { usuario } = useContext(globalState);

    return (
        <nav className="rounded-r-full bg-violet fixed left-0 top-2 px-4 sm:px-0 shadow-2xl">
            <ul className="flex justify-end items-center pr-8">
                <li>
                    <NavLink to="/perfil" className="flex items-center p-3">
                        <img
                            className="rounded-full border-2 border-mint sm:mx-2 w-8"
                            src={usuario.Foto}
                            alt="Foto de perfil"
                        />
                        <p className="text-white hidden sm:block">
                            {usuario.Nombre}
                        </p>
                    </NavLink>
                </li>
                <NavItem label="Home" route={"/home"}>
                    <HomeIcon className="fill-current text-mint" />
                </NavItem>
                <NavItem label="Mochila" route="/mochila">
                    <BackpackIcon className="fill-current text-mint" />
                </NavItem>
                <NavItem label="Foro" route="/foro">
                    <ForoIcon className="fill-current text-mint" />
                </NavItem>
            </ul>
        </nav>
    );
};

const NavItem = ({ label, children, route }) => {
    return (
        <li>
            <NavLink
                to={route}
                className="p-3 flex items-center border-white hover:border-b-2 hover:border-mint
                    transition duration-200 ease-in-out"
                activeClassName="border-mint border-b-2"
            >
                <div>{children}</div>
                <p className="text-white">{label}</p>
            </NavLink>
        </li>
    );
};

export default Navbar;
