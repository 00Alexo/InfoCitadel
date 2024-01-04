import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const PosteazaOProblema = () => {
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

    return ( 
        <div class="PosteazaOProblemaDivPrincipal">
            <SimpleBarReact style={{ maxHeight: 750}}>
            <div class = "topItems">
                <div style={{width: '345px', margin: '0 auto', marginBottom:'40px'}}>
                    <p class="pPosteaza">POSTEAZA O PROBLEMA</p>
                </div>
                <div class="progress" style={{marginBottom:'10px'}}>
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" 
                    style={{width: variabile.width}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="pStep" style={{marginBottom:'40px'}}>
                    <p style={{width:'250px', height: '20px'}}>{variabile.paragraph}</p>
                    <p style={{width:'80px', height: '20px'}}>Pasul {pas}/3</p>
                </div>
                <form>
                {pas === 1 ? (
                    <div>
                        <div>
                            <label for="numeProblema">Numele problemei:</label>
                            <input type="text" id="numeProblema" name="numeProblema"/>
                        </div>
                        <div>
                            <label for="cerinta">Cerinta:</label>
                            <textarea id="cerinta" name="cerinta"/>
                        </div>
                        <div>
                            <label for="explicatie">Explicatie (optional):</label>
                            <textarea id="explicatie" name="explicatie"/>
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
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <label for="dateDeIntrare">Date de intrare:</label>
                            <input type="text" id="dateDeIntrare" name="dateDeIntrare" />
                        </div>
                        <div>
                            <label for="dateDeIesire">Date de iesire:</label>
                            <input type="text" id="dateDeIesire" name="dateDeIesire"/>
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
                    <button type="button" class="btn btn-dark" style={{marginLeft: 'auto'}}>POSTEAZA</button>
                ) : <></>}
            </div>
            </SimpleBarReact>
        </div>
    );
}
 
export default PosteazaOProblema;