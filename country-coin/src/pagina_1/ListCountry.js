function ListCountry(props) {

    const paises = props.paises;
    const numeros_html = paises.map((pais) =>
        <ul key={pais.id}>
            <li>el identificador es <a href={`/detail/${pais.id}`}>{pais.id}</a></li>
            <li>el pais es {pais.pais}</li>
            <li>la capital es {pais.capital}</li>
        </ul>);

    return numeros_html;
}

export default ListCountry;

