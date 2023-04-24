import React from 'react'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Login from './login'
import Register from './register';
import App from './App';
import Home from './Home'
import Nav from './Navbar'
import Logout from './logout';
import ProtectedRoutes from './protectedRoutes';


function Pages(){
  
    return(
        <>
        
        <Router>
        
        <Routes>
        <Route path="/" element={<Nav/>}>
        <Route path="/" index element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="logout" element={<Logout/>} />
         <Route element={<ProtectedRoutes/>}>
        <Route path="todo" element={<App/>} />
        </Route>
        </Route>
        
        </Routes>
        </Router>
        
        </>
    );
   
}
export default Pages;