import'.index.css';
import { useState } from 'react';
import { login } from './utill';

const login =()=>{
    const[Username,setUsername]=useState('');
    const[password,setpassword]=useState('');
    const handleSubmit =async(event)=>{
        event.preventDefault();
        const results = await login({ Username, password });
         console.log({results});
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input placeholder="Enter UserName" type="text" onChange={(event)=>setUsername(event.target.value)}/>
            <br/>
            <input placeholder='Enter password' type='text' onChange={(event)=>setpassword(event.target.value)}/>
                <br/>
                <input placeholder="Enter UserName" type="text"/>
                    <br/>
                    <button type="submit">Login</button>
                
            
        </form>
    )
}
export default login;