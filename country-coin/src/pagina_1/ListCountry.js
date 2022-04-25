

function CompTemp(props) {
    const country = props.country;
    return <div>
        <li>id <a href={`/detail/${country.id}`}>{country.id}</a></li>
        <li>pais {country.pais}</li>
        <li>capital {country.capital}</li>
    </div>;
}


function ListCountry(props) {

    const paises = props.paises;
    const numeros_html = paises.map((pais) =>
        <ul key={pais.id}>
            <CompTemp country={pais} />
        </ul>);

    return numeros_html;
}

export default ListCountry;

