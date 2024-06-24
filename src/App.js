import Login from "./Login";
import LoginPath from "./Loginpath";
import Users from "./Users";
 import { Routes,Route,Link } from "react-router-dom";
 import axios from "axios";

 export const Introduction=()=>{
  return(
    <h2>What is React?</h2>
  );
 
};

// const App=()=>{
//   return(
//     <div>
//      <Login/>
//      <Loginpath/>
//      <nav>

//      </nav>
//      <Users/>
//     </div>
//   );
// };


function App(){
  return(
    <div>
      <LoginPath/>
      <nav>
      <Link to="/login"></Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
      <modal></modal>
    </div>
  )
}
export default App;

