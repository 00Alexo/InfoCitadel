import {useState, useEffect} from 'react'
import LoginComponent from "../components/LoginComponent";
import Navbar from '../components/Navbar'

const Home = (viewSignin) => {
    // const [viewSignin, setViewSignin] = useState(false);
    

    // const handleSigninClick = () => {
    //     setViewSignin(true);
    // };

    return (
        <div className="container1">
            {viewSignin && <LoginComponent/>}
        </div>
    );
}
 
export default Home;