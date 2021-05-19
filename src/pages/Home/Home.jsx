import React from "react";
import Navbar from "../../components/Navbar";
import Wrapper from "../../layout/Wrapper";
import { Switch, Route } from "react-router-dom";
import HomeFeed from '../Home/HomeFeed'
import Backpack from '../Home/Backpack'
import Forum from '../Home/Forum'
import Profile from '../Home/Profile'

const Home = () => {
    return (
        <Wrapper>
            <Navbar />
            <main className=' w-full mt-20 p-2 pt-0'>
                <Switch>
                    <Route path="/home" component={HomeFeed} />
                    <Route path="/mochila" component={Backpack} />
                    <Route path="/foro" component={Forum} />
                    <Route path="/perfil" component={Profile} />
                </Switch>
            </main>
        </Wrapper>
    );
};

export default Home;
