import React from "react";
import PropTypes from 'prop-types'

const Textfield = ({ name, type, children }) => {
    

    return (
        <div
            className="w-full text-violet transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                        focus:translate-y-1 focus:scale-110"
        >
            <label htmlFor={name} class="pl-6">
                {children}
            </label>
            <input
                name={name}
                type={type}
                class=" rounded-full shadow-md border-violet h-14 w-full border-2 px-6 outline-none"
            />
        </div>
    );
};


Textfield.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
}

export default Textfield;
