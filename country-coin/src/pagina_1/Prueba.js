import { useParams } from "react-router-dom";

function Prueba(props) {
    let { id } = useParams();
    
    return <h2>esta es una prueba { id }</h2>;
}

export default Prueba;

