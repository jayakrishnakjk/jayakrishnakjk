import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import React from "react";
import Jokespot from './components/Jokespot';
import Viewtasks from './components/Viewtasks';
import Login from './components/login/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';



var  isAuthenticate = false

function PublicRoute({component: Component, ...rest}){
  return(
        <Route 
        {...rest}
        render = {(props)=>
          isAuthenticate ? (
            <Redirect
            to = {{
              pathname: '/',
              state: {from: props.location}
            }} 
            />
          ):(
            <Component {...props} />
          )
        }
        
        />
  )
}
function PrivateRoute({component: Component, ...rest}){
  return(
      <Route 
        {...rest}
        render={(props)=>
          isAuthenticate ? (
          <Component {...props}/>
        ):(
          <Redirect 
            to={{
            pathname: '/Login',
            state: {from : props.location}
          }}/>
        )
        }
      />
  )
}


function App(props) {
 
  return (
  
    <Router>
    <div className="App">
    <Nav />
    </div>
    <Switch>
      <PublicRoute exact path='/login' component={Login}/> 
      <PublicRoute exact path='/'  component={Jokespot}/>
      <PublicRoute exact path='/viewtasks'  component={Viewtasks}/>
     
    
     
    </Switch>
    <div style={{marginTop:'47px' ,backgroundColor:'#28328c'}}>
    
<Footer />

</div>
    </Router>
 
  );
}

export default App;
