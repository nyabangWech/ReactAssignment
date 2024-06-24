const baseUrl=process.env.REACT_APP_BASE_URL;

export const login = async ({username,password,Gender,Address})=>{
    try{
   const response =await fetch(`${baseUrl}/auth/login`,{
    method:'POST',
    headers:{
'content-Type':'application/json'
    },
    body:JSON.stringify({username,password,Gender,Address})
   });
   return response.json
    }

    catch (error){
        return'Error during login'
    }
}