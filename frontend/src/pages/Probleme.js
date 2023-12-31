import ProblemeContainer from '../components/ProblemeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Probleme = () => {
    const {category} = useParams();
    console.log(category);
    const categorii = [
        {
            titlu: 'Elemente de baza ale limbajului',
            links: ['Operatori si expresii', 'Structura de decizie', 'Structuri repetitive']
        },
        {
            titlu: 'Algoritmi elementari',
            links: ['Sume, produse, numarari', 'Maxime si minime', 'Cifrele unui numar', 'Divizibilitate', 'Generarea unor siruri', 'Baze de numeratie', 'Probleme diverse']
        },
        {
            titlu: 'Tablouri unidimensionale (vectori)',
            links: ['Parcurgerea vectorilor', 'Stergerea/Inserarea elementelor in vector', 'Sortarea vectorilor']
        },
    ]

    return ( 
        <div className="container problemeContainer">
            <ProblemeContainer/>
            {/* <SimpleBarReact style={{ maxHeight: 750}}> */}
                <div className="container divCategorie">
                <Alert variant="dark">
                    This is a dark alert—check it out!
                </Alert>
                </div>

            {/* </SimpleBarReact> */}
        </div> 
    );
}
 
export default Probleme;