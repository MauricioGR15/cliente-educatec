import React, {useEffect} from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeFeed from './pages/Home/HomeFeed'
import Backpack from './pages/Home/Backpack'
import Forum from './pages/Home/Forum'
import Profile from './pages/Home/Profile'

function App() {




  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/registro' component={Register}/>
            <Route path='/home' component={HomeFeed}/>
            <Route path='/mochila' component={Backpack}/>
            <Route path='/foro' component={Forum}/>
            <Route path='/perfil' component={Profile}/>
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
