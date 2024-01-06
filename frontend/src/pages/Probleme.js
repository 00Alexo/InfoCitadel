import ProblemeContainer from '../components/ProblemeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import {Link} from 'react-router-dom'
import PosteazaOProblema from '../components/PosteazaOProblema';
import { useParams } from 'react-router-dom';
import {useState} from 'react'

const Probleme = () => {
    const {category} = useParams();;
    const categorii = [
        {
            titlu: 'Elemente de baza ale limbajului',
            links: [
              { title: 'Operatori si expresii', nrpb: 0 },
              { title: 'Structura de decizie', nrpb: 0 },
              { title: 'Structuri repetitive', nrpb: 0 },
              { title: 'Fisiere', nrpb: 0 }
            ]
          },
          {
            titlu: 'Algoritmi elementari',
            links: [
              { title: 'Sume, produse, numarari', nrpb: 0 },
              { title: 'Maxime si minime', nrpb: 0 },
              { title: 'Cifrele unui numar', nrpb: 0 },
              { title: 'Divizibilitate', nrpb: 0 },
              { title: 'Generarea unor siruri', nrpb: 0 },
              { title: 'Probleme diverse', nrpb: 0 }
            ]
          },
          {
            titlu: 'Tablouri unidimensionale (vectori)',
            links: [
              { title: 'Parcurgerea vectorilor', nrpb: 0 },
              { title: 'Stergerea/Inserarea elementelor', nrpb: 0 },
              { title: 'Sortarea vectorilor', nrpb: 0 },
              { title: 'Probleme cu secvențe', nrpb: 0 }
            ]
          },
          {
            titlu: 'Tablouri bidimensionale(matrici)',
            links: [
              { title: 'Parcurgerea matricelor oarecare', nrpb: 0 },
              { title: 'Parcurgerea matricelor patratice', nrpb: 0 },
              { title: 'Generari de matrice', nrpb: 0 },
              { title: 'Probleme diverse', nrpb: 0 }
            ]
          }
    ]


    const eventBus = require('../hooks/EventBus');
    const [error, setError] = useState(null);

    eventBus.on('error', (errorMessage) => {
      console.log(errorMessage);
      setError(errorMessage);
    });
    return ( 
        <div className="container problemeContainer">
            <ProblemeContainer/>
            {category === 'cls_IX' ? (
            <SimpleBarReact style={{ maxHeight: 750}}>
                
                {categorii.map((categorie) => ( 
                    <div className="container divCategorie" key={categorie.titlu}>
                        <div className='titluDiv'> <h4 style={{padding: 7}}>{categorie.titlu}</h4></div>
                        <div className='corp'>
                            <div className="contineProbleme">
                                {categorie.links.slice(0, Math.ceil(categorie.links.length / 2)).map((link) => (
                                <Link to = {`/probleme/cls_IX/${link.title}`} key={link}style={{textDecoration: 'none', color:'white'}}>
                                    <div key={link.title} className="problemeSubcategorii">
                                        <h5 style={{padding: 10}}>{link.title}</h5>
                                        <p style={{paddingTop: 25, fontSize: '0.9rem', paddingRight: 10}}>numar probleme: {link.nrpb} {categorii.nrpb}</p>
                                    </div>
                                </Link>
                                ))}
                            </div>
                            <div className="contineProbleme">
                                {categorie.links.slice(Math.ceil(categorie.links.length / 2)).map((link) => (
                                <Link to = {`/probleme/cls_IX/${link.title}`} key={link} style={{textDecoration: 'none', color:'white'}}>
                                    <div key={link.title} className="problemeSubcategorii">
                                        <h5 style={{padding: 10}}>{link.title}</h5>
                                        <p style={{paddingTop: 25, fontSize: '0.9rem', paddingRight: 10}}>numar probleme: {link.nrpb} {categorii.nrpb}</p>
                                    </div>
                                </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </SimpleBarReact> 
            ) : <></>}
            <div style={{display: 'flex', justifyContent:'row'}}>
            {category==="Posteaza o problema" ? (
              <PosteazaOProblema/>
            ): <></>}
            {error && <div className="error">{error}</div>}
            </div>
        </div> 
    );
}
 
export default Probleme;