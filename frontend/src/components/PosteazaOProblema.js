import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const PosteazaOProblema = () => {
    const [fisierInput, setFisierInput] = useState(false);
    const [marginBottom2, setMarginBottom2] = useState('95px')

    function handleFisierClick(e) {
        if (e.target.value === "3") {
            setFisierInput(true);
            setMarginBottom2('7px');
        }else{
            setFisierInput(false);
            setMarginBottom2('95px');
        }
        console.log(fisierInput);
    }




    const [pas, setPas] = useState(1);
    console.log(pas);
    const [variabile, setVariabile] = useState({
        width: '33.3%',
        paragraph: 'Informatii despre problema:',
    });

    const handleBackClick = () =>{
        setPas(pas-1);
        console.log(pas);
        switch (pas) {
            case 2:
                setVariabile({
                    width: '33.3%',
                    paragraph: 'Informatii despre problema:',
                });
                break;
            case 3:
                setVariabile({
                    width: '66.6%',
                    paragraph: 'Restrictii si date:',
                });
                break;
        }
    }
    const handleNextClick = () =>{
        setPas(pas+1);
        console.log(pas);
            switch (pas) {
                case 1:
                    setVariabile({
                        width: '66.6%',
                        paragraph: 'Restrictii si date:',
                    });
                    break;
                case 2:
                    setVariabile({
                        width: '100%',
                        paragraph: 'Alte detalii:',
                    });
                    break;
            }
    }




    

    const [inputList, setInputList] = useState([{ name: "restrictii1" }]);
    const [marginBottom, setMarginBottom] = useState(90);
 
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = (event, index) => {
        event.preventDefault();
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
        setMarginBottom(marginBottom + 60);
    };

    const handleAddClick = (event) => {
        event.preventDefault();
        if (inputList.length < 3) {
            setInputList([...inputList, { name: "restrictii" + (inputList.length + 1) }]);
            setMarginBottom(marginBottom - 60);
        }
        if(inputList.length == 3) {
            //TODO: cand termini backendu tre sa faci o eroare aci, daca is 3 inputuri sa apara ca nu mai poti da add
        }
    };



    const navigate = useNavigate();
    const [timpHome, setTimpHome] = useState(10);

    const handlePosteazaClick = () =>{
        setPas('postat');
        setInterval(() => {
            setTimpHome((prevTimpHome) => prevTimpHome - 1);
        }, 1000);
        setTimeout(() =>{
            navigate('/home');
        }, 10000);
    }
    return ( 
        <div class="PosteazaOProblemaDivPrincipal">
            <SimpleBarReact style={{ maxHeight: 750}}>
            <div class = "topItems">
                {pas === 3 || pas === 2 || pas === 1 ? (
                <div style={{width: '345px', margin: '0 auto', marginBottom:'40px'}}>
                    <p class="pPosteaza">POSTEAZA O PROBLEMA</p>
                </div>
                ): pas === 'postat' ? 
                <div style={{width: '470px', margin: '0 auto', marginBottom:'40px'}}>
                    <p class="pPosteaza">PROBLEMA POSTATA CU SUCCES!</p>
                </div>
                :<></>}
                <div class="progress" style={{marginBottom:'10px'}}>
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" 
                    style={{width: variabile.width}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                {pas === 3 || pas === 2 || pas === 1 ? (
                <div class="pStep" style={{marginBottom:'40px'}}>
                    <p style={{width:'250px', height: '20px'}}>{variabile.paragraph}</p>
                    <p style={{width:'80px', height: '20px'}}>Pasul {pas}/3</p>
                </div>
                ) : pas === 'postat' ? (
                    <div>
                        <div class="pStep" style={{marginBottom:'40px'}}>
                            <p style={{width:'250px', height: '20px'}}>Multumim pentru ajutor!</p>
                            <p style={{width:'90px', height: '20px'}}>FINALIZAT</p>
                        </div>
                        <div class="success-animation">
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>

                            <div style={{width: '440px', margin: '0 auto', marginTop:'50px'}}>
                                <h4> Redirectionare catre pagina principala in:</h4>
                                <div style={{margin: '0 auto', width:'35px'}}>
                                    <h3> {timpHome} </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <></>}
                <form>
                {pas === 1 ? (
                    <div>
                        <div>
                            <label for="numeProblema">Numele problemei:</label>
                            <input type="text" id="numeProblema" name="numeProblema" className="bg-dark text-light"/>
                        </div>
                        <div>
                            <label for="cerinta">Cerinta:</label>
                            <textarea id="cerinta" name="cerinta" className="bg-dark text-light"/>
                        </div>
                        <div>
                            <label for="explicatie">Explicatie (optional):</label>
                            <textarea id="explicatie" name="explicatie" className="bg-dark text-light"/>
                        </div>
                    </div>
                ) : <></>}
                {pas === 2 ? (
                    <div style={{marginBottom: marginBottom}}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <label htmlFor="restrictii">Restrictii:</label>
                            <div>
                                {inputList.length > 1 && 
                                    <button 
                                        style={{ marginRight: '10px', height:'25px', padding: '0px 10px', backgroundColor: '#F1174C', color: 'white', border: 'none', borderRadius: '5px' }} 
                                        onClick={(event) => handleRemoveClick(event, inputList.length - 1)}
                                    >
                                        Remove
                                    </button>
                                }
                                <button
                                    style={{ height:'25px', padding: '0px 10px', backgroundColor: '#28A745', color: 'white', border: 'none', borderRadius: '5px' }} 
                                    onClick={(event) => handleAddClick(event)}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        <div>
                            {inputList.map((x, i) => {
                                return (
                                    <div key={i}>
                                        <input
                                            name={x.name}
                                            value={x.value}
                                            onChange={e => handleInputChange(e, i)}
                                            className="bg-dark text-light"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <label for="dateDeIntrare">Date de intrare:</label>
                            <input type="text" id="dateDeIntrare" name="dateDeIntrare" className="bg-dark text-light"/>
                        </div>
                        <div>
                            <label for="dateDeIesire">Date de iesire:</label>
                            <input type="text" id="dateDeIesire" name="dateDeIesire" className="bg-dark text-light"/>
                        </div>
                    </div>
                ) : <></>}
                {pas === 3 ? (
                    <div> 
                        <label for="dificultate">Dificultate:</label>
                        <Form.Select aria-label="Default select example" style={{marginBottom:'20px', borderRadius: '16px'}}
                        id="dificultate" name="dificultate" className="bg-dark text-light">
                            <option value="1"> </option>
                            <option value="2"> Easy </option>
                            <option value="3"> Medium </option>
                            <option value="4"> Hard </option>
                            <option value="5"> Concurs </option>
                        </Form.Select>

                        <label for="operatii">Operatii intrare/iesire:</label>
                        <Form.Select aria-label="Default select example" style={{marginBottom:'20px', borderRadius: '16px'}}
                        id="operatii" name="operatii" className="bg-dark text-light" onChange={handleFisierClick}>
                            <option value="1"> </option>
                            <option value="2"> Tastatura/ecran </option>
                            <option value="3"> Fisier </option>
                        </Form.Select>
                        {fisierInput === true ? (
                            <div>
                                <div style={{display:'flex', justifyContent:'space-between', width: '80%'}}>
                                    <label for="numeFisierInput">Nume fisier input:</label>
                                    <label for="numeFisierOutput">Nume fisier output:</label>
                                </div>
                                <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    <input className="bg-dark text-light" type="text" id="numeFisierInput" name="numeFisierInput" style={{width:'45%'}} />
                                    <input className="bg-dark text-light" type="text" id="numeFisierOutput" name="numeFisierOutput" style={{width:'45%'}}/>
                                </div>
                            </div>
                        ): <></>}
                        <div style={{marginBottom:marginBottom2}}>
                            <div style={{display:'flex', justifyContent:'space-between', width: '76.7%'}}>
                                <label for="exempleInput">Exemple input:</label>
                                <label for="exempleOutput">Exemple output:</label>
                            </div>
                            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <input className="bg-dark text-light" type="text" id="exempleInput" name="exempleInput" style={{width:'45%'}} />
                                <input className="bg-dark text-light" type="text" id="exempleOutput" name="exempleOutput" style={{width:'45%'}}/>
                            </div>
                        </div>
                    </div>
                ) : <></>}
                </form>
            </div>
            <div class ="bottomItems">
                {pas === 2 || pas === 3 ? (
                    <button type="button" class="btn btn-dark" onClick={handleBackClick}>BACK</button>
                ) : <></>}
                {pas === 1 || pas === 2 ? (
                    <button type="button" class="btn btn-dark" style={{marginLeft: 'auto'}} onClick={handleNextClick}>NEXT</button>
                ) : <></>}
                {pas === 3 ? (
                    <button type="button" class="btn btn-dark" style={{marginLeft: 'auto'}} onClick={handlePosteazaClick}>POSTEAZA</button>
                ) : <></>}
            </div>
            </SimpleBarReact>
        </div>
    );
}
 
export default PosteazaOProblema;