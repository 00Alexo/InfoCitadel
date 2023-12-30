import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const Leaderboard = () => {

    const userData = [
        {
            username: 'UHijaifga',
            points: 1000,
            solutions: 10,
            top: 1
        },
        {
            username: 'ISJida',
            points: 900,
            solutions: 9,
            top: 2
        },
        {
            username: 'Midaga',
            points: 800,
            solutions: 8,
            top: 3
        },
        {
            username: 'jajagfga',
            points: 700,
            solutions: 7,
            top: 4
        },
        {
            username: 'ahghkn',
            points: 600,
            solutions: 6,
            top: 5
        },
        {
            username: 'ijfaifkjhij',
            points: 500,
            solutions: 5,
            top: 6
        },
        {
            username: 'okjaokjggfj',
            points: 400,
            solutions: 4,
            top: 7
        },
        {
            username: 'ajhkamfhfin',
            points: 300,
            solutions: 3,
            top: 8
        },
        {
            username: 'ajhfin',
            points: 200,
            solutions: 2,
            top: 9
        },
        {
            username: 'ajhlakfhlaahgdffin',
            points: 100,
            solutions: 1,
            top: 10
        },
    ];



    return ( 
        <div className="leaderboard">
                <div className = "leaderboard-container">
                    <h1>Leaderboard</h1>
                </div>

                <div className="topUsersTop">
                    <div className = "mostProblems">
                        <p className="leaderboardTopText"> Problems solved</p>
                        
                        <div className="mostProblemsDivForContent">
                            <SimpleBarReact style={{ maxHeight: 275 }}>
                        {userData.map((data) => (
                            <div className = "mostProblemsElmDiv" key={data.username}>
                                <p className="topNumber"> {data.top}</p>
                                <img className="rounded-circle" src="/FirstPage/Photos/veryadelin.png"/>
                                <div className = "userLeaderboardData">
                                    <p className="userLeaderboardDataName"> {data.username} </p>
                                    <p className="userLeaderboardDataData"> {data.solutions} solutions </p>
                                </div>
                                <svg
                                    className="leaderboardSVG"
                                    fill="#ffffff"
                                    height="15px"
                                    width="15px"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 32.055 32.055"
                                    xmlSpace="preserve"
                                    stroke="#ffffff"
                                    >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                        <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path>
                                        </g>
                                    </g>
                                    </svg>
                            </div>
                        ))}
                            </SimpleBarReact>
                        </div>
                    </div>

                    <div className = "mostProblems">
                        <p className="leaderboardTopText"> Accumulated points</p>
                        
                        <div className="mostProblemsDivForContent">
                            <SimpleBarReact style={{ maxHeight: 275 }}>
                        {userData.map((data) => (
                            <div className = "mostProblemsElmDiv" key={data.username}>
                                <p className="topNumber"> {data.top}</p>
                                <img className="rounded-circle" src="/FirstPage/Photos/veryadelin.png"/>
                                <div className = "userLeaderboardData">
                                    <p className="userLeaderboardDataName"> {data.username} </p>
                                    <p className="userLeaderboardDataData"> {data.points} points </p>
                                </div>
                                <svg
                                    className="leaderboardSVG"
                                    fill="#ffffff"
                                    height="15px"
                                    width="15px"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 32.055 32.055"
                                    xmlSpace="preserve"
                                    stroke="#ffffff"
                                    >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                        <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path>
                                        </g>
                                    </g>
                                    </svg>
                            </div>
                        ))}
                            </SimpleBarReact>
                        </div>
                    </div>
                </div> 
        </div>
    );
}
 
export default Leaderboard;