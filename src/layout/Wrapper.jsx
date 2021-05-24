import React from 'react'

const Wrapper = ({children}) => {
    return (
        <div className="w-full h-full min-h-full">
            {children}
        </div>
    )
}

export default Wrapper
