import { useEffect, useState } from "react";
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const ComunitateAll = () => {
    const [problemeLength, setProblemeLength] = useState(1);
    const [probleme, setProbleme] = useState(null);
    const [activePage, setActivePage] = useState(1);

    useEffect(() =>{
        const fetchProbleme = async () =>{
            const response = await fetch('/api/probleme/getAll');
            const json = await response.json();

            if(response.ok){
                setProbleme(json);
                console.log(json);
            }
            setProblemeLength(Math.ceil(json.length/10));
            console.log(problemeLength)
        }

        fetchProbleme();
    }, []);


    return (
        <div className="divPostateDeComunitate">
            <nav className="Page navigation example" style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                <ul className="pagination mt-2" style={{marginBottom: '0px', cursor:'pointer'}}>
                    <li className="page-item">
                    <a className="page-link bg-dark text-light" aria-label="Previous"
                    onClick={() => setActivePage(1)}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    {Array.from({ length: problemeLength }, (_, i) => i + 1).slice(activePage-1, activePage+4).map(number => ( 
                        <li key={number} className="page-item"><a className={activePage === number ? "page-link bg-light text-dark" : "page-link bg-dark text-light"}
                        onClick={() => setActivePage(number)}
                        >{number}</a></li>
                    ))} 
                    {activePage !== problemeLength && activePage !== problemeLength -1 && activePage !== problemeLength - 2 && activePage !== problemeLength - 3
                    && activePage !== problemeLength - 4 && problemeLength > 3 ? 
                    (<li class="page-item"><a class="page-link bg-dark text-light">. . .</a></li>) : <></>}
                    <li className="page-item">
                    <a className="page-link bg-dark text-light" aria-label="Next"
                    onClick={() => setActivePage(problemeLength)}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
            <SimpleBarReact style={{ maxHeight: 645, width: '100%'}} >
                        {probleme && probleme.slice((activePage - 1) * 10, activePage * 10).map(problema =>(
                        <div className="mb-4 problemaDiv card shadow bg-dark text-white rounded mx-auto" 
                        style={{width: '50rem', maxHeight:'15rem', minHeight:'10rem'}} key={problema._id}>
                            <div className="card-body">
                                <div className="d-flex flex-column justify-content-between">
                                <div className="d-flex flex-row justify-content-between mb-3">
                                    <h2 className="card-title">{problema.numeProblema}</h2>
                                    <div>
                                        <p className="card-text">
                                        Creator: JohnDoe123
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row mb-3" 
                                style={{backgroundColor: '#292E34', height:'2.5rem', padding:'10px', gap:'25px'}}>
                                    <span className="badge bg-primary">{problema.operatii}</span>
                                    <span className="badge bg-success">{problema.dificultate}</span>
                                    <span className="badge bg-danger">Tag3</span>
                                </div>
                                <div>
                                    <p className="card-text mb-2">
                                        {problema.cerinta}
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        ))}
            </SimpleBarReact>
        </div>
    );
}
 
export default ComunitateAll;