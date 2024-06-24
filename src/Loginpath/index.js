import { Link } from "react-router-dom";
import './index.css'
// import './LoginPath'
function LoginPath(){
    return(
        <div>
            <h1 className='log'>Welcome our page</h1>
            <nav className='text'>
                <button type='submit' className='btn'><Link to='/login'>Login</Link></button>
            </nav>
        </div>
    )
}
export default LoginPath;