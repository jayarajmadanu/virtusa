import React from 'react';
import './App.css';
import {Login} from "./components/login/index"
import {Register} from "./components/login/register"
import loginImg from 'C:/Users/infantjs/Desktop/ggg/ui/src/components/login/images/download.jpg'
import {BrowserRouter  ,Switch,Route } from 'react-router-dom';
import Navigation from './components/login/Navigation';
import Dashboard from './components/Dashboard/Dashboard'
 
function App() {
  return (
    <div>
      
      <div className="pham">
          <img src={loginImg} className="img"></img>
          <p className="par"> 
          <b> <i>Virtusa Pharmacy </i></b>
          </p>
        </div>
      <div className="App"  >
        
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Navigation></Navigation>
      </BrowserRouter>
       
      </div>
  
    </div>
    
  );
}

export default App;
