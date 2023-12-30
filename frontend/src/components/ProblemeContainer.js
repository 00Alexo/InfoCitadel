import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import {Link} from 'react-router-dom'

const ProblemeContainer = () => {
    return ( 
        <Navbar variant="dark" bg="dark" expand="lg" className='problemeNavbar'>
                <Container fluid>
                    <Navbar.Brand style={{marginLeft: '20px'}}>Selecteaza tipul:</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                            <NavDropdown style={{marginLeft: '20px'}}
                                id="nav-dropdown-dark-example"
                                title="Liceu"
                                menuVariant="dark"
                                >
                                <NavDropdown.Item href="/probleme/clsIX">Clasa a IX a</NavDropdown.Item>
                                <NavDropdown.Item >
                                    Clasa a X a
                                </NavDropdown.Item>
                                <NavDropdown.Item >Clasa a XI a</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >
                                    All
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown style={{marginLeft: '20px'}}
                                id="nav-dropdown-dark-example"
                                title="Concursuri"
                                menuVariant="dark"
                                >
                                <NavDropdown.Item>Olimpiada locala de informatica</NavDropdown.Item>
                                <NavDropdown.Item >
                                    Olimpiada judeteana de informatica
                                </NavDropdown.Item>
                                <NavDropdown.Item >Olimpiada nationala de informatica</NavDropdown.Item>
                                <NavDropdown.Item >
                                    Lotul national
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown style={{marginLeft: '20px'}}
                                id="nav-dropdown-dark-example"
                                title="Admitere"
                                menuVariant="dark"
                                >
                                <NavDropdown.Item >UBB</NavDropdown.Item>
                                <NavDropdown.Item >
                                    UniBuc
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown style={{marginLeft: '20px'}}
                                id="nav-dropdown-dark-example"
                                title="Postate de comunitate"
                                menuVariant="dark"
                                >
                                <NavDropdown.Item >All</NavDropdown.Item>
                                <NavDropdown.Item >
                                    Verified users
                                </NavDropdown.Item>
                                <NavDropdown.Item >Friends</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >
                                    Posteaza o problema
                                </NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
 
export default ProblemeContainer;