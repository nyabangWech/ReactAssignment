import { useGetUsers } from "./Hooks/userGetUser";
import Usercard from "../Atoms/Usercard";
const Users =()=>{
    const{Users,loading,errors} =useGetUsers();
    console.log({Users});
return(
    <div>
 {loading&&<h2>loading users...</h2>}
 {errors.length>0 &&<h2>{errors}</h2>}
 {Users.length>0 
 ? Users.map((user)=>(
    <Usercard
    key={user.id}
    image={user.image}
    fullName={`${user.firstname} ${user.lastname}`}
    />

 ))
 :!loading&&<h2>Users not found</h2>
}
    </div>
)

};
export default Users;