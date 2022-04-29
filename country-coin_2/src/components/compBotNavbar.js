import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function CompBotNavbar() {
    return <Container>
        <Navbar expand="lg" bg="dark" variant="dark" fixed="bottom">
            <Container>
                <Navbar.Brand href="#">Developer: Josue Huaman</Navbar.Brand>
            </Container>
        </Navbar>
    </Container>;
}

export default CompBotNavbar;