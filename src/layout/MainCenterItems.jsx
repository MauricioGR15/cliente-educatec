import React from 'react'

const MainCenterItems = ({children}) => {
    return (
        <main className="w-full min-h-screen flex items-center flex-wrap justify-center">
            {children}
        </main>
    )
}

export default MainCenterItems
