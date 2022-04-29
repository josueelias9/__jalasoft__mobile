import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function CompTopNavbar(props) {
    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/filter">List of countries</Nav.Link>
                    <Nav.Link href="https://github.com/josueelias9/reto-jalasoft">Repository</Nav.Link>
                    <Nav.Link href="https://jalasoft.com/">Jalasoft</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>;
}

export default CompTopNavbar;