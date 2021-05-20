import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeFeed from "./pages/Home/HomeFeed";
import Home from "./pages/Home/Home";
import Profile from "./pages/Home/Profile";
import Backpack from "./pages/Home/Backpack";
import Forum from "./pages/Home/Forum";
import GlobalState from "./context/GlobalState";
import globalContext from "./context/globalContext";

function App() {
    return (
        <div className="App">
            <GlobalState>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/registro" component={Register} />
                        <PrivateRoute>
                            <Home>
                                <Route path="/home" component={HomeFeed} />
                                <Route path="/mochila" component={Backpack} />
                                <Route path="/foro" component={Forum} />
                                <Route path="/perfil" component={Profile} />
                            </Home>
                        </PrivateRoute>
                    </Switch>
                </Router>
            </GlobalState>
        </div>
    );
}

function useAuth() {
    return useContext(globalContext);
}

function PrivateRoute({ children, ...rest }) {
    let { session } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                session ? (
                    children
                ) : (
                    <Redirect to={'/'} />
                )
            }
        />
    );
}

export default App;
