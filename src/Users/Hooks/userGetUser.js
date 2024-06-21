import { getUsers } from "../Utils";
import { useState,useEffect } from "react";

export const useGetUsers =() =>{
    const [Users, setUsers] = useState ([]);
    const[errors,setErrors]= useState('');
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
        const fetchUsers =async () =>{
            try{
                setLoading(true);
                const response =await getUsers();
                setUsers(response.Users);
                setLoading(false);

            }
            catch(error){
            setLoading(false);
            setErrors(`Error:${error.message}`)

            }
        }
        fetchUsers();
    },[])
    return{Users,loading,errors}

}