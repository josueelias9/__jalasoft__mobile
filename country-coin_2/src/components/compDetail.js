import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';


function CompDetail(props) {
    const pais = props.pais;

    return <Card>
        <Card.Header>{pais.nombre}</Card.Header>
        <Card.Body>
            <Card.Title>Population</Card.Title>
            <Card.Text>
                {pais.habitantes}
            </Card.Text>
            <Card.Title>Capital</Card.Title>
            <Card.Text>
                {pais.capital}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>;
}


export default CompDetail;