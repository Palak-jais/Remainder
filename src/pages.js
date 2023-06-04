import React from 'react'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import App from './App';
import Home from './Home'
import Nav from './Navbar'

function Pages(){
  
    return(
        <>
        
        <Router>
        
        <Routes>
        <Route path="/" element={<Nav/>}>
        <Route path="/" index element={<Home/>} /> 
        <Route path="/todo" index element={<App/>} />  

        </Route>
        </Routes>
        </Router>
        
        </>
    );
   
}
export default Pages;
