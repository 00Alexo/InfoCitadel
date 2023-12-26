import { useEffect, useState } from "react";


const Home = () => {
    const [activeTheme, setActiveTheme] = useState("defaultTheme")
    
     useEffect(() => {
        setActiveTheme(localStorage.getItem("theme"));
     }, []);

    return (
        <div className="homecontainer">
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