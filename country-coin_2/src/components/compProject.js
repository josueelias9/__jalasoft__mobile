import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import CompFilter from './compFilter';

function Project() {

    return <Container className="m-3 p-3">
        <Row>
            <Col><Button variant="primary" size="lg" disabled>
                Sort by population
            </Button>{' '}</Col>
            <Col><Button variant="primary" size="lg" disabled>
                Sort by area
            </Button>{' '}</Col>
        </Row>
        <Row>
            <CompFilter />
        </Row>
    </Container>
        ;
}

export default Project;