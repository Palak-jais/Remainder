import React  from 'react';



function Logout(){
    
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
            window.location = "/login";

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