import { useParams } from "react-router-dom";

function DetailCountry(props) {
    let { id } = useParams();
    
    return <h2>esta es una prueba { id }</h2>;
}

export default DetailCountry;

