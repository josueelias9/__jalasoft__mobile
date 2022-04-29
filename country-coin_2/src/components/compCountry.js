import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';


function CompCountry(props) {
    const country = props.country;

    return <Card style={{ width: '18rem', margin:'auto'}}>
        <Card.Img variant="top" src={country.flag} />
        <Card.Body>
            <Card.Title>{country.name}</Card.Title>
            <Card.Text>
                {country.otherNames}
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Capital: {country.capital}</ListGroupItem>
<<<<<<< Updated upstream
            <ListGroupItem>Population: {country.population}</ListGroupItem>
            <ListGroupItem>Area: {country.area}</ListGroupItem>
            <ListGroupItem>Region: {country.region}</ListGroupItem>
=======
>>>>>>> Stashed changes
            <ListGroupItem>Numeric code: {parseInt(country.numericCode)}</ListGroupItem>
        </ListGroup>

    </Card>;
}


export default CompCountry;