const baseUrl=process.env.REACT_APP_BASE_URL;

export const getUsers =async()=>{
    try{
        const response =await fetch(`${baseUrl}/Users`);
        return response.json();
    } 
    catch(error){
        throw new Error(error.message);
    }
};