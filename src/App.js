import React, {useEffect} from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeFeed from './pages/Home/HomeFeed'

function App() {




  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/registro' component={Register}/>
            <Route path='/home' component={HomeFeed}/>
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
