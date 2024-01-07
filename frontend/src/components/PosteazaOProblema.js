import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


const PosteazaOProblema = () => {
    const [numeProblema, setNumeProblema] = useState('');
    const [cerinta, setCerinta] = useState('');
    const [explicatie, setExplicatie] = useState('');
    const [dateDeIntrare, setDateDeIntrare] = useState('');
    const [dateDeIesire, setDateDeIesire] = useState('');
    const [dificultate, setDificultate] = useState('');
    const [operatii, setOperatii] = useState('');
    const [numeFisierOutput, setNumeFisierOutput] = useState('');
    const [numeFisierInput, setNumeFisierInput] = useState('');
    const [exempleInput, setExempleInput] = useState('');
    const [exempleOutput, setExempleOutput] = useState('');




    const [fisierInput, setFisierInput] = useState(false);
    const [marginBottom2, setMarginBottom2] = useState('95px')

    function handleFisierClick(e) {
        if (e.target.value === "Fisier") {
            setFisierInput(true);
            setMarginBottom2('7px');
        }else{
            setFisierInput(false);
            setMarginBottom2('95px');
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









    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const [timpHome, setTimpHome] = useState(10);
    const eventBus = require('../hooks/EventBus');
    const [pas, setPas] = useState(1);
    const [variabile, setVariabile] = useState({
        width: '33.3%',
        paragraph: 'Informatii despre problema:',
    });

    const handleBackClick = () =>{
        setError(null);
        eventBus.emit('clearError');
        setEmptyFields([]);
        setPas(pas-1);
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
    const [emptyFields, setEmptyFields] = useState([]);


    const handleNextClick = () =>{
        let newEmptyFields = [...emptyFields];
        if(pas === 1){
            if(numeProblema === ''){
                newEmptyFields.push('numeProblema');
            }else{
                newEmptyFields = newEmptyFields.filter(item => item !== 'numeProblema');
            }
            if(cerinta === ''){
                newEmptyFields.push('cerinta');
            }else{
                newEmptyFields = newEmptyFields.filter(item => item !== 'cerinta');
            }
            if(newEmptyFields.length === 0){
                setError(null);
                eventBus.emit('clearError');
                newEmptyFields = newEmptyFields.filter(item => item !== 'cerinta');
                newEmptyFields = newEmptyFields.filter(item => item !== 'numeProblema');
                setEmptyFields(newEmptyFields);
            }
            if(newEmptyFields.length > 0){
                setError('Toate campurile sunt obligatorii pentru a trece la urmatorul pas!');
                eventBus.emit('error', 'Toate campurile sunt obligatorii pentru a trece la urmatorul pas!');
                setEmptyFields(newEmptyFields);
                return
            }
        }
        if(pas === 2){
            if(dateDeIntrare === ''){
                newEmptyFields.push('dateDeIntrare');
            }else{
                newEmptyFields = newEmptyFields.filter(item => item !== 'dateDeIntrare');
            }
            if(dateDeIesire === ''){
                newEmptyFields.push('dateDeIesire');
            }else{
                newEmptyFields = newEmptyFields.filter(item => item !== 'dateDeIesire');
            }
            if(newEmptyFields.length === 0){
                setError(null);
                eventBus.emit('clearError');
                newEmptyFields = newEmptyFields.filter(item => item !== 'dateDeIesire');
                newEmptyFields = newEmptyFields.filter(item => item !== 'dateDeIntrare');
                setEmptyFields(newEmptyFields);
            }
            if(newEmptyFields.length > 0){
                setError('Toate campurile sunt obligatorii pentru a trece la urmatorul pas!');
                eventBus.emit('error', 'Toate campurile sunt obligatorii pentru a trece la urmatorul pas!');
                setEmptyFields(newEmptyFields);
                return
            }
        }

        setPas(pas+1);
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

    const [clicked, setClicked] = useState(false);

    const handlePosteazaClick = async (e) =>{
        const restrictiiValues = inputList.map(item => item.value);
        const problema = {numeProblema, cerinta, explicatie, dateDeIntrare, dateDeIesire, restrictii: restrictiiValues,
        dificultate, operatii, numeFisierOutput, numeFisierInput, exempleInput, exempleOutput
        };

        const response = await fetch('/api/probleme/create', {
            method: 'POST',
            body: JSON.stringify(problema),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok){
            setEmptyFields(json.emptyFields)
            setError(json.error);
            eventBus.emit('error', json.error);
        }

        if(response.ok){
            setClicked(true);
            setEmptyFields([])
            setError(null);
            eventBus.emit('clearError');
            setNumeProblema('');
            setCerinta('');
            setExplicatie('');
            setDateDeIntrare('');
            setDateDeIesire('');
            setDificultate('');
            setOperatii('');
            setNumeFisierOutput('');
            setNumeFisierInput('');
            setExempleInput('');
            setExempleOutput('');
            console.log('problema noua:', json)
            setPas('postat');
            setInterval(() => {
                setTimpHome((prevTimpHome) => prevTimpHome - 1);
            }, 1000);
            setTimeout(() =>{
                navigate('/home');
            }, 10000);
        }
    }
    return ( 
        <div className="PosteazaOProblemaDivPrincipal">
            <SimpleBarReact style={{ maxHeight: 750}}>
            <div className = "topItems">
                {pas === 3 || pas === 2 || pas === 1 ? (
                <div className = "pPosteazadiv"style={{width: '345px', margin: '0 auto', marginBottom:'40px'}}>
                    <p className="pPosteaza">POSTEAZA O PROBLEMA</p>
                </div>
                ): pas === 'postat' ? 
                <div style={{width: '470px', margin: '0 auto', marginBottom:'40px'}}>
                    <p className="pPosteaza">PROBLEMA POSTATA CU SUCCES!</p>
                </div>
                :<></>}
                <div className="progress" style={{marginBottom:'10px'}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" 
                    style={{width: variabile.width}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                {pas === 3 || pas === 2 || pas === 1 ? (
                <div className="pStep" style={{marginBottom:'40px'}}>
                    <p style={{width:'250px', height: '20px'}}>{variabile.paragraph}</p>
                    <p style={{width:'80px', height: '20px'}}>Pasul {pas}/3</p>
                </div>
                ) : pas === 'postat' ? (
                    <div>
                        <div className="pStep" style={{marginBottom:'40px'}}>
                            <p style={{width:'250px', height: '20px'}}>Multumim pentru ajutor!</p>
                            <p style={{width:'90px', height: '20px'}}>FINALIZAT</p>
                        </div>
                        <div className="success-animation">
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
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
                            <label htmlFor="numeProblema">Numele problemei:</label>
                            <input type="text" id="numeProblema" value={numeProblema}
                            onChange={(e) => setNumeProblema(e.target.value)} name="numeProblema" 
                            className={emptyFields.includes('numeProblema') ? 'bg-dark text-light error' : "bg-dark text-light"}/>
                        </div>
                        <div>
                            <label htmlFor="cerinta">Cerinta:</label>
                            <textarea id="cerinta" value={cerinta}
                            onChange={(e) => setCerinta(e.target.value)}name="cerinta"
                            className={emptyFields.includes('cerinta') ? 'bg-dark text-light error' : "bg-dark text-light"}/>
                        </div>
                        <div>
                            <label htmlFor="explicatie">Explicatie (optional):</label>
                            <textarea id="explicatie" value={explicatie}
                            onChange={(e) => setExplicatie(e.target.value)}
                            name="explicatie" className="bg-dark text-light"/>
                        </div>
                    </div>
                ) : <></>}
                {pas === 2 ? (
                    <div style={{marginBottom: marginBottom}}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <label htmlFor="restrictii">Restrictii (optional):</label>
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
                                            onChange={e => {
                                                x.value = e.target.value; 
                                                handleInputChange(e, i); 
                                            }}
                                            className="bg-dark text-light"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <label htmlFor="dateDeIntrare">Date de intrare:</label>
                            <input type="text" id="dateDeIntrare" value={dateDeIntrare}
                            onChange={(e) => setDateDeIntrare(e.target.value)} name="dateDeIntrare" 
                            className={emptyFields.includes('dateDeIntrare') ? 'bg-dark text-light error' : "bg-dark text-light"}/>
                        </div>
                        <div>
                            <label htmlFor="dateDeIesire">Date de iesire:</label>
                            <input type="text" id="dateDeIesire" value={dateDeIesire}
                            onChange={(e) => setDateDeIesire(e.target.value)} name="dateDeIesire"
                            className={emptyFields.includes('dateDeIesire') ? 'bg-dark text-light error' : "bg-dark text-light"}/>
                        </div>
                    </div>
                ) : <></>}
                {pas === 3 ? (
                    <div> 
                        <label htmlFor="dificultate">Dificultate:</label>
                        <Form.Select aria-label="Default select example" style={{marginBottom:'20px', borderRadius: '16px'}}
                        id="dificultate" name="dificultate" className={emptyFields.includes('dificultate') ? 'bg-dark text-light error' : "bg-dark text-light"} 
                        value={dificultate} onChange={(e) => setDificultate(e.target.value)}> 
                            <option value=""> </option>
                            <option value="Easy"> Easy </option>
                            <option value="Medium"> Medium </option>
                            <option value="Hard"> Hard </option>
                            <option value="Concurs"> Concurs </option>
                        </Form.Select>

                        <label htmlFor="operatii">Operatii intrare/iesire:</label>
                        <Form.Select aria-label="Default select example" style={{marginBottom:'20px', borderRadius: '16px'}}
                        id="operatii" name="operatii" className={emptyFields.includes('operatii') ? 'bg-dark text-light error' : "bg-dark text-light"} 
                        value={operatii} onChange={(e) => {
                            setOperatii(e.target.value);
                            handleFisierClick(e);
                        }}>
                            <option value=""> </option>
                            <option value="Tastatura/ecran"> Tastatura/ecran </option>
                            <option value="Fisier"> Fisier </option>
                        </Form.Select>
                        {fisierInput === true ? (
                            <div>
                                <div style={{display:'flex', justifyContent:'space-between', width: '80%'}}>
                                    <label htmlFor="numeFisierInput">Nume fisier input:</label>
                                    <label htmlFor="numeFisierOutput">Nume fisier output:</label>
                                </div>
                                <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    <input className={emptyFields.includes('numeFisierInput') ? 'bg-dark text-light error' : "bg-dark text-light"} 
                                    type="text" value={numeFisierInput}
                                    onChange={(e) => setNumeFisierInput(e.target.value)}
                                    id="numeFisierInput" name="numeFisierInput" style={{width:'45%'}} />
                                    <input className={emptyFields.includes('numeFisierOutput') ? 'bg-dark text-light error' : "bg-dark text-light"} 
                                    type="text" value={numeFisierOutput}
                                    onChange={(e) => setNumeFisierOutput(e.target.value)}
                                    id="numeFisierOutput" name="numeFisierOutput" style={{width:'45%'}}/>
                                </div>
                            </div>
                        ): <></>}
                        <div style={{marginBottom:marginBottom2}}>
                            <div style={{display:'flex', justifyContent:'space-between', width: '76.7%'}}>
                                <label htmlFor="exempleInput">Exemple input:</label>
                                <label htmlFor="exempleOutput">Exemple output:</label>
                            </div>
                            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <input className={emptyFields.includes('exempleInput') ? 'bg-dark text-light error' : "bg-dark text-light"}
                                type="text" value={exempleInput}
                                onChange={(e) => setExempleInput(e.target.value)}
                                id="exempleInput" name="exempleInput" style={{width:'45%'}} />
                                <input className={emptyFields.includes('exempleOutput') ? 'bg-dark text-light error' : "bg-dark text-light"}
                                type="text" value={exempleOutput}
                                onChange={(e) => setExempleOutput(e.target.value)}
                                id="exempleOutput" name="exempleOutput" style={{width:'45%'}}/>
                            </div>
                        </div>
                    </div>
                ) : <></>}
                </form>
            </div>
            <div className ="bottomItems">
                {pas === 2 || pas === 3 ? (
                    <button type="button" className="btn btn-dark" onClick={handleBackClick}>BACK</button>
                ) : <></>}
                {pas === 1 || pas === 2 ? (
                    <button type="button" className="btn btn-dark" style={{marginLeft: 'auto'}} onClick={handleNextClick}>NEXT</button>
                ) : <></>}
                {pas === 3 ? (
                    <button type="button" disable={clicked} className="btn btn-dark" style={{marginLeft: 'auto'}} onClick={handlePosteazaClick}>POSTEAZA</button>
                ) : <></>}
            </div>
            </SimpleBarReact>
        </div>
    );
}
 
export default PosteazaOProblema;