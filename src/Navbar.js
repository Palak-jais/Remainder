import React from 'react';
import {Outlet,Link} from 'react-router-dom'
function Nav(){
    return( <>
              <div className='head'>     
            <nav>
            <h2 className='heading'>ToDo List</h2>
            <ul>
            <li>
                    <Link to="/todo">TODOS</Link>
                </li>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                
                
            </ul>
            </nav>
            </div> 
            <Outlet/>
            </>

    
    )
}
export default Nav;
