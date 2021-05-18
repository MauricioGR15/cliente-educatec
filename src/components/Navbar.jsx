import React from "react";
import { ReactComponent as HomeIcon } from "../assets/icons/HomeIcon.svg";
import { ReactComponent as BackpackIcon } from "../assets/icons/BackpackIcon.svg";
import { ReactComponent as ForoIcon } from "../assets/icons/ForoIcon.svg";
import ProfilePhoto from "../assets/images/profile.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="rounded-r-full bg-violet absolute left-0 top-2 px-4 sm:px-0 shadow-2xl">
            <ul className="flex justify-end items-center pr-8">
                <li>
                    <NavLink to='/perfil' class="flex items-center p-3">
                        <img
                            class="rounded-full border-2 border-mint sm:mx-2 w-8"
                            src={ProfilePhoto}
                            alt="Foto de perfil"
                        />
                        <p class="text-white hidden sm:block">
                            Mauricio Garcia
                        </p>
                    </NavLink>
                </li>
                <NavItem label="Home" route={"/home"}>
                    <HomeIcon class="fill-current text-mint" />
                </NavItem>
                <NavItem label="Mochila" route="/mochila">
                    <BackpackIcon class="fill-current text-mint" />
                </NavItem>
                <NavItem label="Foro" route="/foro">
                    <ForoIcon class="fill-current text-mint" />
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
