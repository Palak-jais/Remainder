import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function Register(){
    let navigate=useNavigate();
    
    const logged=window.localStorage.getItem("loggedIn")
    const[user,setUser]=useState({
        name:"",
        email:'',
        password:''
    })
    
    const targetValue=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
                
    }
    const registerSubmit=async e=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/register",{...user})
                
            alert("Sucessfully registered");
            window.localStorage.setItem("loggedIn",true)
            return navigate("/todo")
        }
        catch(err){
            alert(err)
        }
    }
    return logged?<div className='warn'><h1>You already registered! 😒</h1></div>:<div className='login'>
            <div className='login-parent'>
                <form onSubmit={registerSubmit}>
            
            <input className="login-input" type="text" name="name" required autoComplete='on'
            placeholder='Name'value={user.name} onChange={targetValue}/>

            <input className="login-input"  type="email" name="email" required 
            placeholder='Email'value={user.email} onChange={targetValue}/>

           <input className="login-input" type="password" name="password" required autoComplete='on'
            placeholder='Password'value={user.password} onChange={targetValue}/>

            <div className='login-child1'>
                <button className="login-btn" type="submit">Register</button>
                
            
            </div>
            

        </form>
        </div>
     
        
    </div>
}
export default Register;
