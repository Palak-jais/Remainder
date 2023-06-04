import React from 'react'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import App from './App';
import Nav from './Navbar'


function Pages(){
  
    return(
        <>
        
        <Router>        
        <Routes>
        <Route path="/" element={<Nav/>}>
        <Route path="/" index element={<App/>}        
        </Routes>
        </Router>
        
        </>
    );
   
}
export default Pages;
