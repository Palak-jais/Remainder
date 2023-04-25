import React,{ useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login(){
    let navigate=useNavigate();
    const logged=window.localStorage.getItem("loggedIn")
  
    const[user,setUser]=useState({
        email:'',
        password:''
    })

    
    const targetValue=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
       console.log(value)
        
    }
    const loginSubmit=async e=>{
        e.preventDefault()
        try{
           // await axios.post('/user/login',{...user})
             await axios.post("https://remainerbackend.onrender.com/login", {...user},
             )
             window.localStorage.setItem("loggedIn",true)
             alert("sucessfully login");
              return navigate("/todo");

            }             
        catch(err){
            alert(err.response.data.msg)
        }

    }
    return logged?<div className='warn'><h1>You already logged In!😒</h1></div> :<div className='login'>
        
        <div className='login-parent'>
        <form onSubmit={loginSubmit} >
        <input className="login-input" type="email" name='email' value={user.email} placeholder='Enter your email here' required onChange={targetValue}/>
        <input className="login-input" type="text" name='password' value={user.password} placeholder='Enter your password here' onChange={targetValue}/>
        <div className='login-child1'>
            <button className="login-btn" type='submit'>LOGIN</button>
            
            
        </div>
        </form>
          
        </div>
        
    </div>
}
export default Login;
