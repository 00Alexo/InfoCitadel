import {useState, useEffect} from 'react'
import LoginComponent from "../components/LoginComponent";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
       setShowModal(true);
       console.log('test1');
    };
   
    const handleHideModal = () => {
       setShowModal(false);
       console.log('test2');
    };
   
    const handleWindowClick = (e) => {
       if (!e.target.matches('.SigninNavButton, .phone_SigninNavButton')) {
         handleHideModal();
       }
       console.log('test3');
    };
   
    const handleWindowKeyDown = (e) => {
       if (e.keyCode === 27) {
         handleHideModal();
       }
       console.log('test4');
    };
   
    useEffect(() => {
       window.addEventListener('click', handleWindowClick);
       window.addEventListener('keydown', handleWindowKeyDown);
   
       return () => {
         window.removeEventListener('click', handleWindowClick);
         window.removeEventListener('keydown', handleWindowKeyDown);
       };
    }, []);

    return (
        <div className="container1">
            <div className = "divPrincipal" id="divPrincipal">
                {showModal &&<LoginComponent/>}
            </div>
        </div>
    );
}
 
export default Home;