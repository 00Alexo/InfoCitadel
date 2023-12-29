import { useEffect, useState } from "react";
import Leaderboard from "../components/Leaderboard";

const Home = () => {
    const [activeTheme, setActiveTheme] = useState("defaultTheme")
    
     useEffect(() => {
        setActiveTheme(localStorage.getItem("theme"));
     }, []);

    return (
        <div className="homecontainer">
            <Leaderboard/>
            {activeTheme == 'defaultTheme' || activeTheme == null ?( 
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            ): <></>}
            {activeTheme == 'christmasTheme' ?(    
                <div className="background-animation">
                </div>
            ) : <></>}
        </div>
    );
}
 
export default Home;