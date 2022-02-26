import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login'
import Register from './components/Register';
import DashBoard from './components/DashBoard';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';

function App() {
  //Check Logged
const [auth, setauth] = useState(false);
const [auth1, setauth1] = useState(true);

const isLoggedIn = async () => {
  try {
    const res = await fetch('/auth',{
    method : "GET",
    headers : {
      Accept : 'application/json',
      "Content-Type" : 'application/json'
    },
    credentials : "include"
  });

  if(res.status === 200) {
    setauth(true)
    setauth1(false)
  }

  if(res.status === 401) {
    setauth(false)
    setauth1(true)
  }

  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  isLoggedIn();
}, [])



  return (
  <>
  
    <BrowserRouter>

    <Navbar auth={auth1}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about/' component={About}/>
    <Route exact path='/service/' component={Services}/>
    <Route exact path='/contact/' component={Contact}/>
    <ProtectedRoute exact path='/login/' component={Login} auth={auth1}/>
    <ProtectedRoute exact path='/register/' component={Register} auth={auth1}/>
    <ProtectedRoute exact path='/dashboard/' component={DashBoard} auth={auth}/>
    <ProtectedRoute exact path='/logout/' component={Logout} auth={auth}/>
    


    
    
    </BrowserRouter>
    <Footer/>
  </>
  );
}

export default App;
