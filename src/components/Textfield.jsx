import React from "react";
import PropTypes from "prop-types";

const Textfield = ({ name, type, register, errors, validations, children }) => {
    return (
        <div
            className="w-full text-violet transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                        focus:translate-y-1 focus:scale-110"
        >
            <label htmlFor={name} className="pl-6">
                {children}
            </label>
            <input
                {...register(name, validations)}
                type={type}
                className=" rounded-full shadow-md border-violet h-14 w-full border-2 px-6 outline-none"
            />
            {errors[name] && (
                <p className="text-error font-work text-xs px-4">
                    {errors[name].message}
                </p>
            )}
        </div>
    );
};

export const TextArea = ({ name, register, errors, validations, children }) => {
    return (
        <div className="w-full text-violet  ">
            <label htmlFor={name} className="pl-6">
                {children}
            </label>
            <textarea
                id={name}
                rows={8}
                {...register(name, validations)}
                type="text"
                className="flex align-top rounded-2xl shadow-md border-violet h-auto w-full border-2 px-6 outline-none transition duration-500 ease-in-out hover:border-violet-dark hover:border-2"
            />
            {errors[name] && (
                <p className="text-error font-work text-xs px-4">
                    {errors[name].message}
                </p>
            )}
        </div>
    );
};

Textfield.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    register: PropTypes.any.isRequired,
    errors: PropTypes.any,
    validations: PropTypes.object,
};

export default Textfield;
