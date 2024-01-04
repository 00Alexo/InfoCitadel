import {useParams} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import ProblemeContainer from '../components/ProblemeContainer';
import {useState} from 'react'

const ProblemeSelector = () => {
    const {category, subcategory} = useParams();
    // const [categorie, setCategorie] = useState(2);

    // const handleClick = (value) =>{
    //     setCategorie(value)
    //     console.log(categorie);
    // }
    return ( 
        <div className="container problemeContainer">
            <ProblemeContainer></ProblemeContainer>
            <div className="filterDiv">
                <div className="filtrareText">
                    <h2>FILTRARE</h2>
                </div>
                {category === 'cls_IX' ?(
                <div className="inputDivFilter">
                    <Form className="bg-dark text-light p-3">
                            <h5 style={{marginBottom:'3px'}}> Clasa</h5>
                            <Form.Select aria-label="Default select example" className="bg-dark text-light">
                                <option value="2"></option>
                                <option value="2">Clasa a IX a</option>
                                <option value="3">Clasa a X a</option>
                                <option value="4">Clasa a XI a</option>
                            </Form.Select>
                    </Form>
                    <Form className="bg-dark text-light p-3">
                            <h5 style={{marginBottom:'3px'}}> Categorie</h5>
                            <Form.Select aria-label="Default select example" className="bg-dark text-light">
                                <option value="1"> </option>
                            </Form.Select>
                    </Form>
                    <Form className="bg-dark text-light p-3">
                            <h5 style={{marginBottom:'3px'}}> Subcategorie</h5>
                            <Form.Select aria-label="Default select example" className="bg-dark text-light">
                                <option value="1"> </option>
                            </Form.Select>
                    </Form>
                    <Form className="bg-dark text-light p-3">
                            <h5 style={{marginBottom:'3px'}}> Dificultate</h5>
                            <Form.Select aria-label="Default select example" className="bg-dark text-light">
                                <option value="1"> </option>
                                <option value="2"> Easy </option>
                                <option value="3"> Medium </option>
                                <option value="4"> Hard </option>
                                <option value="5"> Concurs </option>
                            </Form.Select>
                    </Form>

                    <Form className="bg-dark text-light p-3">
                            <h5 style={{marginBottom:'3px'}}> Operații intrare/ieșire</h5>
                            <Form.Select aria-label="Default select example" className="bg-dark text-light">
                                <option value="1"> </option>
                                <option value="2"> Consola </option>
                                <option value="3"> Fisere </option>
                            </Form.Select>
                    </Form>
                </div>
                ): <></>}
            </div>
        </div>
    );
}
 
export default ProblemeSelector;