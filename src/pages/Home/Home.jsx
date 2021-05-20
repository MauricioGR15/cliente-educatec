import React from "react";
import Navbar from "../../components/Navbar";
import Wrapper from "../../layout/Wrapper";

const Home = ({children}) => {
    return (
        <Wrapper>
            <Navbar />
            <main className=' w-full mt-20 p-2 pt-0'>
                {children}
            </main>
        </Wrapper>
    );
};

export default Home;
