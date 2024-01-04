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
                                <NavDropdown.Item> 
                                    <Link to = "/probleme/cls_IX" style={{textDecoration:'none', color:'white'}}>
                                        <div style={{width: '125%',marginLeft:'-15px'}}> 
                                        <p style={{padding: '0', marginBottom:'0',marginLeft:'15px'}}>Clasa a IX a </p> </div>
                                    </Link>
                                </NavDropdown.Item> 
                                <NavDropdown.Item>
                                    <Link to = "/probleme/cls_X" style={{textDecoration:'none', color:'white'}}>
                                        <div style={{width: '125%', marginLeft:'-15px'}}> 
                                        <p style={{padding: '0', marginBottom:'0',marginLeft:'15px'}}>Clasa a X a </p> </div>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to = "/probleme/cls_XI" style={{textDecoration:'none', color:'white'}}>
                                        <div style={{width: '125%', marginLeft:'-15px'}}> 
                                        <p style={{padding: '0', marginBottom:'0',marginLeft:'15px'}}>Clasa a XI a </p> </div>
                                    </Link>
                                </NavDropdown.Item>
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