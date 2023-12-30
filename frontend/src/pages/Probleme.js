import ProblemeContainer from '../components/ProblemeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const Probleme = () => {
    return ( 
        <div className="container problemeContainer">
            <ProblemeContainer/>
            <SimpleBarReact style={{ maxHeight: 750 }}>
                
            </SimpleBarReact>
        </div> 
    );
}
 
export default Probleme;