
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import CompCountry from "./compCountry";


function CompList(props) {
    const countries = props.filteredList;

    const listItems = countries.map((country) =>
        <Container className="m-3 p-3" key={country.population}>
            <CompCountry country={country} />
            <Link to={`/detail/${parseInt(country.numericCode)}`}>Detail</Link>
        </Container>);

    return listItems;
}

export default CompList;