import { useGetUsers } from "./Hooks/userGetUser";
import Usercard from "../Atoms/Usercard";
import './index.css'
const Users =()=>{
    const{users,loading,errors} =useGetUsers();
    console.log({users});
return(
    <div>
    <div className="users">
 {loading&&<h2>loading users...</h2>}
 {errors.length>0 &&<h2>{errors}</h2>}
 {users.length>0 
 ? users.map((user)=>(
    <Usercard
    key={user.id}
    image={user.image}
    fullName={`${user.firstname} ${user.lastname}`}
    age={`${user.age}`}
        gender={`${user.gender}`}
        email={`${user.email}`}
    
    />

 ))
 :!loading&&<h2>Users not found</h2>
}
    </div>
    </div>
)

};
export default Users;