import React  from 'react';
import {useNavigate} from 'react-router-dom'


function Logout(){
     let navigate=useNavigate();
    const logout=(e)=>{
        const logged=window.localStorage.getItem("loggedIn")
        e.preventDefault()
        if(!logged){
            alert("please login to logout!")
            window.location = "/login";
        }
        else{
            
            alert("Sucessfully loggedOut");
            window.localStorage.removeItem("loggedIn");
            return navigate("/todo")

        }


    }
    return(
        
        <div className='home-parent'>
            <h1 className='home-heading'>Sure want to logout?</h1>
            <div className='login-child1'>
                <button className="login-btn" type="submit" onClick={logout}>LOGOUT</button>
                
            
            </div>
        


        </div>
    )
}
export default Logout;
