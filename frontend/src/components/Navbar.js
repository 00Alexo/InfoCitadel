import { useState, useEffect, useRef} from 'react'
import LoginComponent from "../components/LoginComponent";
import { Link } from "react-router-dom";



const Navbar = () => {
    const body = document.querySelector('body');


    const [viewSignin, setViewSignin] = useState(false);
    
    window.onkeydown = function(e) {
        if (e.keyCode === 27) {
            setViewSignin(false);
        }
    }

        const handleSigninClick = () => {
            setViewSignin(!viewSignin);
        };


    const [dropDownActive, isDropDownActive] = useState(false);

    const handleDropDownClick = () => {
        isDropDownActive(!dropDownActive);
    }

    const [activeTheme, setActiveTheme] = useState(localStorage.getItem("theme"));

    function toggleChristmasTheme(theme) {
        window.location.reload()
        setActiveTheme(theme)
        localStorage.setItem('theme', theme);
    }
    function toggleChatGPTTheme(theme) {
        window.location.reload()
        setActiveTheme(theme)
        localStorage.setItem('theme', theme);
    }
    function toggleDefaultTheme(theme) {
        window.location.reload()
        setActiveTheme(theme)
        localStorage.setItem('theme', theme);
    }

    const handleThemeChange = (theme) =>{
        switch(theme){
            case 'christmasTheme':
                toggleChristmasTheme('christmasTheme');
                break;
            case 'chatGPTTheme':
                toggleChatGPTTheme('chatGPTTheme');
                break;
            default:
                toggleDefaultTheme('defaultTheme');
                break;
        }
    }

    useEffect(() => {
        body.classList.add(`${activeTheme}Body`);
    }, [])





//////////////////////////////////////////////////////////////////////////////////////////////////////
// State for regular dropdown visibility
const [isDropdownVisible, setIsDropdownVisible] = useState(false);
// State for phone dropdown visibility
const [isPhoneDropdownVisible, setIsPhoneDropdownVisible] = useState(false);

// Effect for handling clicks on the regular dropdown
useEffect(() => {
  const handleDropdownClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Event listener for regular dropdown click
  document
    .querySelector('.secondForHoverDropdown')
    .addEventListener('click', handleDropdownClick);

  // Cleanup function to remove event listener
  return () => {
    document
      .querySelector('.secondForHoverDropdown')
  };
}, [isDropdownVisible]); // Dependency array includes isDropdownVisible

// Effect for handling clicks on the phone dropdown
useEffect(() => {
  const handlePhoneDropdownClick = () => {
    setIsPhoneDropdownVisible(!isPhoneDropdownVisible);
  };

  // Event listener for phone dropdown click
  document
    .querySelector('.phone_secondForHoverDropdown')
    .addEventListener('click', handlePhoneDropdownClick);

  // Cleanup function to remove event listener
  return () => {
    document
      .querySelector('.phone_secondForHoverDropdown')

  };
}, [isPhoneDropdownVisible]); // Dependency array includes isPhoneDropdownVisible

// Effect to automatically close the regular dropdown after 1 millisecond
useEffect(() => {
  const interval = setInterval(() => {
    setIsDropdownVisible(false);
  }, 1);

  // Cleanup function to clear the interval
  return () => clearInterval(interval);
}, []);

// Effect for handling clicks on the phone div SVG
useEffect(() => {
  const phoneDivSVG = document.querySelector('.phone_divSVG');
  const phoneNavbar = document.querySelector('.phone_NavBar');
  const svgTreiBari = document.querySelector('.svgTreiBari');

  const handlePhoneDivSVGClick = () => {
    phoneNavbar.classList.toggle('ascuns');
    phoneDivSVG.classList.toggle('marireLungime');
    svgTreiBari.classList.toggle('marireHeightWidth');
  };

  // Event listener for phone div SVG click
  phoneDivSVG.addEventListener('click', handlePhoneDivSVGClick);

  // Cleanup function to remove event listener
  return () => {
    phoneDivSVG.removeEventListener('click', handlePhoneDivSVGClick);
  };
}, []);




    return (
    <div className = "contineNavBar"> 
        <div className="phone_dropDownNavbarDiv">
            <div className = "phone_divSVG" style={{cursor:'pointer'}}>
                <svg className = "svgTreiBari" height = "56px" style={{margin:'0 auto'}} width="56px" display = "none" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m21 15.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414
                            0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fillRule="nonzero" fill="white"/>
                </svg>
            </div>
            
            <div className="phone_NavBar">
                <div className="phone_dropDownHead">
                    <Link className="phone_SigninNavButton" style={{textDecoration: 'none', cursor: 'pointer'}}> SIGN-IN</Link>
                </div>

                <div className = "phone_dropDownHead">
                    <Link to="/" style={{textDecoration: 'none'}}> 
                        <svg  style={{marginRight: '0.8rem'}}xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-journal-check" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                          </svg>
                        Probleme
                    </Link>
                </div>


                <div className="phone_dropDownHead" style={{width:'18rem', marginLeft:'-4rem', justifyContent:'space-around', alignItems: 'flex-end'}}>
                    <Link to="/" style={{textDecoration: 'none', marginLeft:'3rem'}}> 
                    <svg style={{marginRight: '0.8rem'}}fill="white" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                        <g>
                            <path d="M475.691,0.021c-14.656,0-27.776,8.725-33.451,22.251l-32.64,77.973c-9.728-9.152-22.421-14.933-36.267-14.933h-320 C23.936,85.312,0,109.248,0,138.645v320c0,29.397,23.936,53.333,53.333,53.333h320c29.397,0,53.333-23.936,53.333-53.333V225.152 l81.92-172.821c2.24-4.757,3.413-10.048,3.413-16.043C512,16.299,495.701,0.021,475.691,0.021z M405.333,458.645 c0,17.643-14.357,32-32,32h-320c-17.643,0-32-14.357-32-32v-320c0-17.643,14.357-32,32-32h320 c11.243,0,21.312,6.101,27.072,15.573l-37.739,90.197v-52.437c0-5.888-4.779-10.667-10.667-10.667H74.667 c-5.888,0-10.667,4.779-10.667,10.667v85.333c0,5.888,4.779,10.667,10.667,10.667h269.76l-8.939,21.333h-90.155 c-5.888,0-10.667,4.779-10.667,10.667v128c0,0.277,0.128,0.512,0.149,0.789c-8.768,7.787-14.144,10.389-14.528,10.539 c-3.371,1.259-5.888,4.096-6.699,7.616c-0.811,3.584,0.256,7.339,2.859,9.941c15.445,15.445,36.757,21.333,57.6,21.333 c26.645,0,52.48-9.643,64.128-21.333c16.768-16.768,29.056-50.005,19.776-74.773l47.381-99.925V458.645z M270.635,397.525 c2.944-9.685,5.739-18.859,14.229-27.349c15.083-15.083,33.835-15.083,48.917,0c13.504,13.504,3.2,45.717-10.667,59.584 c-11.563,11.541-52.672,22.677-80.256,8.256c3.669-2.859,7.893-6.549,12.672-11.328 C264.448,417.749,267.605,407.467,270.635,397.525z M256,375.339v-76.672h70.571l-16.363,39.083 c-14.251-0.256-28.565,5.483-40.448,17.387C263.125,361.771,259.008,368.661,256,375.339z M331.264,342.741l28.715-68.629 l16.128,7.915l-32.555,68.651C339.605,347.477,335.531,344.747,331.264,342.741z M341.333,170.645v64h-256v-64H341.333z M489.28,43.243l-104.064,219.52l-17.003-8.341l54.08-129.237l39.616-94.677c2.325-5.568,7.744-9.152,13.803-9.152 c8.235,0,14.933,6.699,14.933,15.659C490.645,39.147,490.176,41.344,489.28,43.243z"></path>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M181.333,277.312H74.667c-5.888,0-10.667,4.779-10.667,10.667v149.333c0,5.888,4.779,10.667,10.667,10.667h106.667 c5.888,0,10.667-4.779,10.667-10.667V287.979C192,282.091,187.221,277.312,181.333,277.312z M170.667,426.645H85.333v-128h85.333 V426.645z"></path>
                        </g>
                        </g>
                        </g>
                        </svg>
                        Themes
                        <div className = "phone_dropdownContent" id = "phone_dropDownContentJS">
                            <ul>
                                <li className="phone_secondForHoverDropdown">
                                    Change <br/> Theme
                                    <div className = "phone_dropDownContent phone_secondDropdownContent">
                                        <ul>
                                            <li className="phone_changeThemeButtonDefault" data-value="phone_defaultTheme"> Default</li>
                                            <li className="phone_changeThemeButtonNight1337Blue" data-value = "phone_skoskTheme"> Skosk</li>
                                            <li className="phone_changeThemeButtonChatGPT" data-value = "phone_ChatGPTTheme"> ChatGPT</li>
                                        </ul>
                                    </div>
                                </li>
                                <li> Create your <br/> own theme</li>
                                <li>Community <br/> Contribution</li>
                            </ul>
                        </div>
                    </Link>
                </div>

                <div className="phone_dropDownHead" style={{width:'18rem', marginLeft:'-4rem', justifyContent:'space-around', alignItems:'flex-end'}}>
                    <Link to="/" style={{textDecoration: 'none', marginLeft: '2.5rem'}}> 
                        <svg style={{marginRight: '0.8rem'}}xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-journals" viewBox="0 0 16 16">
                            <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
                            <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
                          </svg>
                        Cursuri
                        <div className = "phone_dropdownContent">
                            <ul>
                                <li> Course <br/> Catalog</li>
                                <li> Propose <br/> Course</li>
                                <li> Community <br/> Contribution</li>
                            </ul>
                        </div>
                    </Link>
                </div>

                <div className = "phone_dropDownHead">
                    <Link to="/compiler" style={{textDecoration: 'none'}}> 
                    <svg style={{marginRight: '0.8rem'}}height="25px" width="25px" fill="white" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path style={{ fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} d="M28.6,13c-1.6,0.2-3.1-0.5-4-2c-0.8-1.4-0.7-3.2,0.3-4.4c-1.5-1.4-3.3-2.4-5.2-3C19.1,5,17.7,6,16,6 s-3.1-1-3.7-2.5c-2,0.6-3.8,1.6-5.2,3C8,7.8,8.2,9.6,7.3,11c-0.8,1.4-2.4,2.2-4,2c-0.2,1-0.4,2-0.4,3c0,1,0.1,2.1,0.4,3 c1.6-0.2,3.1,0.5,4,2c0.8,1.4,0.7,3.2-0.3,4.4c1.5,1.4,3.3,2.4,5.2,3c0.6-1.4,2-2.5,3.7-2.5s3.1,1,3.7,2.5c2-0.6,3.8-1.6,5.2-3 c-0.9-1.2-1.1-3-0.3-4.4c0.8-1.4,2.4-2.2,4-2c0.2-1,0.4-2,0.4-3C29,15,28.9,13.9,28.6,13z"></path>
                            <polyline style={{ fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinejoin: 'round', strokeMiterlimit: 10 }} points="11,13 8,16 11,19 "></polyline>
                            <polyline style={{ fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinejoin: 'round', strokeMiterlimit: 10 }} points="21,13 24,16 21,19 "></polyline>
                            <line style={{ fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinejoin: 'round', strokeMiterlimit: 10 }} x1="18" y1="12" x2="14" y2="20"></line>
                        </g> 
                    </svg>
                        Compiler
                    </Link>
                </div>

                <div className = "phone_dropDownHead">
                    <Link to="/" style={{textDecoration: 'none', marginLeft: '-20px'}} > 
                        <svg style={{marginRight: '0.8rem'}}xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="white" viewBox="0 0 512 512">
                            <path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9V104l4.4-1.6L240.1 4.2zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z"/>
                        </svg>
                        History
                    </Link>
                </div>

                <div className = "phone_dropDownHead">
                    <Link to="/" style={{textDecoration: 'none', marginLeft: '-20px'}} >
                    <svg style={{marginRight: '0.8rem'}}viewBox="0 0 48 48" fill="none" width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 32C28.8366 32 36 26.6274 36 20C36 13.3726 28.8366 8 20 8C11.1634 8 4 13.3726 4 20C4 22.6842 5.17509 25.1626 7.16049 27.1616C6.35561 29.4537 5.31284 31.1723 4.6499 32.1319C4.4071 32.4834 4.65714 32.9802 5.08289 32.9453C6.78453 32.8058 10.1224 32.3105 12.3741 30.5519C14.6411 31.4754 17.2389 32 20 32Z" fill="#ffffff"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.7843 33.8337C31.4033 32.7928 38 26.9957 38 20.0002C38 19.4632 37.9611 18.9333 37.8855 18.4121C41.5534 20.1003 44 23.136 44 26.6002C44 28.7476 43.0599 30.7303 41.4716 32.3295C42.068 34.0278 42.8276 35.3325 43.3579 36.1259C43.5953 36.481 43.3423 36.9779 42.917 36.9372C41.5041 36.8021 39.0109 36.3773 37.3007 35.0418C35.4872 35.7806 33.4089 36.2002 31.2 36.2002C27.9781 36.2002 25.0343 35.3074 22.7843 33.8337Z" fill="#ffffff"></path>
                    </g>
                    </svg>
                        Forum
                    </Link>
                </div>

                <div className = "phone_dropDownHead">
                    <Link to="/" style={{textDecoration: 'none', marginLeft: '15px'}}>
                        <svg style={{marginRight: '0.8rem'}}viewBox="0 0 24 24" fill="none" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19H9V12.5V8.6C9 8.26863 9.26863 8 9.6 8H14.4C14.7314 8 15 8.26863 15 8.6V14.5V19Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15 5H9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M20.4 19H15V15.1C15 14.7686 15.2686 14.5 15.6 14.5H20.4C20.7314 14.5 21 14.7686 21 15.1V18.4C21 18.7314 20.7314 19 20.4 19Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 19V13.1C9 12.7686 8.73137 12.5 8.4 12.5H3.6C3.26863 12.5 3 12.7686 3 13.1V18.4C3 18.7314 3.26863 19 3.6 19H9Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        TopUsers
                    </Link>
                </div>
            </div>
            
            
        </div>
            <div className = {`${activeTheme}MyNavbar MyNavbar`}>
                <div className = "dropdownHead" >
                    <Link to="/" style={{textDecoration: 'none'}}> <img src="logoCTD.gif" style={{width:'178px',height:'55px', marginTop: '-15px'}}/></Link>
                </div>
                <div className = "otherNavbarElements">
                    <div className = "dropdownHead">
                        <Link to="/" style={{textDecoration: 'none'}}> Probleme</Link>
                    </div>
                    <div className = "dropdownHead">
                        <Link to="/" style={{textDecoration: 'none'}}> Themes</Link>
                        <div className = "dropdownContent" id = "dropDownContentJS">
                            <ul>
                                <li className="secondForHoverDropdown" onClick={handleDropDownClick}>
                                    Change <br/> Theme
                                    {dropDownActive && (
                                    <div className = "dropDownContent secondDropdownContent">
                                        <ul>
                                            <li className="changeThemeButtonDefault" data-value="defaultTheme" onClick={() =>handleThemeChange("defaultTheme")}> Default</li>
                                            <li className="changeThemeButtonNight1337Blue" data-value = "skoskTheme" onClick={() =>handleThemeChange("christmasTheme")}> Christmas</li>
                                            <li className="changeThemeButtonChatGPT" data-value = "ChatGPTTheme" onClick={() =>handleThemeChange("chatGPTTheme")}> ChatGPT</li>
                                        </ul> 
                                    </div>
                                    )}
                                </li>
                                <li> Create your <br/> own theme</li>
                                <li>Community <br/> Contribution</li>
                            </ul>
                        </div>
                    </div>
                    <div className = "dropdownHead">
                        <Link to="/" style={{textDecoration: 'none'}}> Cursuri</Link>
                        <div className = "dropdownContent">
                            <ul>
                                <li> Course <br/> Catalog</li>
                                <li> Propose <br/> Course</li>
                                <li> Community <br/> Contribution</li>
                            </ul>
                        </div>
                    </div>
                    <div className = "dropdownHead"> 
                        <Link to="compiler" style={{textDecoration: 'none'}}> Compiler</Link>
                    </div>
                    <div className = "dropdownHead"> 
                        <Link to="/" style={{textDecoration: 'none'}}> ProgHistory</Link>
                    </div>
                    <div className = "dropdownHead"> 
                        <Link to="/" style={{textDecoration: 'none'}}> Forum</Link>
                    </div>
                </div>
                <div className = "dropdownHead" style={{marginRight: '1rem'}}> 
                    <Link  className="SigninNavButton"  onClick={handleSigninClick} style={{textDecoration: 'none', cursor:'pointer'}}> SIGN-IN</Link>
                </div>
            </div>
            {viewSignin && <LoginComponent activeTheme ={activeTheme}/>}
    </div>

    );
}
 
export default Navbar