import'./index.css';
import { useState } from 'react';
import { login } from './utill';


const Login =()=>{
    const[username,setUsername]=useState('');
    const[password,setpassword]=useState('');
    const[Gender,setGender]=useState('');
    const[Address,setAddress]=useState('');
    const handleSubmit = async(event)=>{
        event.preventDefault();

        const results = await login({ username, password,Gender,Address });
         console.log({results});
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input placeholder="Enter UserName" type="text" onChange={(event)=>setUsername(event.target.value)}/>
            <br/>
            <input placeholder='Enter password' type='text' onChange={(event)=>setpassword(event.target.value)}/>
                <br/>
                <input placeholder="Enter Gender" type="text" onChange={(event)=>setGender(event.target.value)}/>

                    <br/>
                    <input placeholder="Enter Address" type="text" onChange={(event)=>setAddress(event.target.value)}/>
                    <button type="submit">Login</button>
        </form>
    )
}
export default Login;