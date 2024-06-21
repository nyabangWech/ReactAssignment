const baseUrl=process.env.REACT_APP_BASE_URL;

export const login =async()=>{
    try{
   const response =await fetch(`${baseUrl}/auth/login`,{
    method:'POST',
    headers:{
'content-Type':'application/json'
    },
    body,json:Stringify({username,Userpassword})
   });
   return response.json
    }

    catch (error){
        return'Error during login'
    }
}