import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from './login';

const ProtectedRoutes=()=>{
    const loggedin=window.localStorage.getItem("loggedIn")
       return loggedin?<Outlet/>:<div className='warn'><h1>Please Login First!😅</h1></div>
}
export default ProtectedRoutes;
