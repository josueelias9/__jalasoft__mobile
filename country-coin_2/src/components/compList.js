import CompDetail from "./compDetail";
import api_get from "./api";

function CompList(props) {
    

    const paises = props.paises;

    const listItems = paises.map((pais) => <div key={pais.id}> <CompDetail pais={pais} /></div>);

    return listItems;

}

export default CompList;