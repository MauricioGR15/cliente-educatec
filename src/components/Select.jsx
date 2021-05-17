import React from "react";
import PropTypes from 'prop-types'

const Select = ({ name, label, options, register, errors, validations }) => {
    return (
        <div
            className="w-full text-violet transition duration-500 ease-in-out "
        >
            <label htmlFor={name} class="pl-6">
                {label}
            </label>
            <select
                name={name}
                {...register(name, validations)}
                class=" rounded-full shadow-md border-violet h-14 w-full border-2 px-6 outline-none"
            >
                {options.map((item, key) => (
                    <option key={key} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            {errors[name]  && <p class='text-error font-work text-xs px-4'>{errors[name].message}</p>}
        </div>
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    
}

export default Select;
