import React from "react";

const Textfield = () => {
    return (
        <input
            type="text"
            placeholder="No. de Control"
            class="text-violet rounded-full shadow-md border-violet h-14 w-full border-2 px-8 outline-none 
                     transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                     focus:translate-y-1 focus:scale-110"
        />
    );
};

export default Textfield;
