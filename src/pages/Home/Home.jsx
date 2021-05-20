import React from "react";
import Navbar from "../../components/Navbar";
import Wrapper from "../../layout/Wrapper";

const Home = ({children}) => {
    return (
        <Wrapper>
            <Navbar />
            <main className=' w-full h-auto pt-20 p-2 '>
                {children}
            </main>
        </Wrapper>
    );
};

export default Home;
