import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, label, options, register, errors, validations }) => {
    const FillOption = ({item}) => {
        if (typeof item === "object") {
            return <option value={item.id}>{item.nombre}</option>;
        } else {
            return <option value={item}>{item}</option>;
        }
    };


    return (
        <div className="w-full text-violet transition duration-500 ease-in-out ">
            <label htmlFor={name} className="pl-6">
                {label}
            </label>
            <select
                name={name}
                {...register(name, validations)}
                className=" rounded-full shadow-md border-violet h-14 w-full border-2 px-6 outline-none"
            >
                {options.map((item, key) => <FillOption key={key} item={item}/>)}
            </select>
            {errors[name] && (
                <p className="text-error font-work text-xs px-4">
                    {errors[name].message}
                </p>
            )}
        </div>
    );
};



Select.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
};

export default Select;
