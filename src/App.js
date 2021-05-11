import React, {useEffect} from 'react'
import lottie from 'lottie-web'
import CoffeeComputer from './animations/ComputerCoffee'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeFeed from './pages/Home/HomeFeed'

function App() {


  // useEffect(()=> {
  //   lottie.loadAnimation({
  //     container: document.querySelector('#computer-coffee'),
  //     animationData: CoffeeComputer
  //   })
  // },[])

  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/registro' component={Register}/>
            <Route path='/home' component={HomeFeed}/>
          </Switch>
        </BrowserRouter>
      {/* <div id='computer-coffee' className='w-96 h-auto'/> */}
    </div>
  );
}

export default App;
