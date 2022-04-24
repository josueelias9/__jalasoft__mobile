API_country = "https://restcountries.com/v2/lang/es";


async function getAPI() {

    const response = await fetch(API_country);
    const data = await response.json();

    let a = "";
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        a = a + data[i].name + "<br>";
        a = a + data[i].capital + "<br>";
        a = a + "<a href='detail.html?id=" + data[i].numericCode + "'>detalle</a><br>";
        a = a + "<img src='" + data[i].flag + "' width='100' height='50'>" + "<br><br>";
    }
    document.getElementById("prueba").innerHTML = a;

}


async function population_sorting() {
    const response = await fetch(API_country);
    const data = await response.json();

    let a = "";
    console.log(data);
    data.sort((a, b) => parseFloat(b.population) - parseFloat(a.population));

    for (let i = 0; i < data.length; i++) {
        a = a + data[i].name + "<br>";
        a = a + data[i].capital + "<br>";
        a = a + "<a href='detail.html?id=" + data[i].numericCode + "'>detalle</a><br>";
        a = a + "<img src='" + data[i].flag + "' width='100' height='50'>" + "<br><br>";
    }
    document.getElementById("prueba").innerHTML = a;
}


async function area_sorting() {
    const response = await fetch(API_country);
    const data = await response.json();

    let a = "";
    console.log(data);
    data.sort((a, b) => parseFloat(b.area) - parseFloat(a.area));

    for (let i = 0; i < data.length; i++) {
        a = a + data[i].name + "<br>";
        a = a + data[i].capital + "<br>";
        a = a + "<a href='detail.html?id=" + data[i].numericCode + "'>detalle</a><br>";
        a = a + "<img src='" + data[i].flag + "' width='100' height='50'>" + "<br><br>";
    }
    document.getElementById("prueba").innerHTML = a;

}

async function detailView() {
    var results = [];
    var searchField = "numericCode";
    var searchVal = parseInt(getParameterByName("id"));

    const response = await fetch(API_country);
    const data = await response.json();

    let a = "";

    for (var i = 0; i < await data.length; i++) {
        if (await data[i][searchField] == searchVal) {
            results.push(await data[i]);
        }
    }
    console.log(results);
    a = a + "<li>name: " + results[0].name + "</li>";
    a = a + "<li>capital: " + results[0].capital + "</li>";
    a = a + "<li>population: " + results[0].population + "</li>";
    a = a + "<li>area:" + results[0].area + "</li>";
    a = a + "<li>currency: " + results[0].currencies[0].code + "</li>";
    a = a + "<li>currency convertion: " + await convertCoin(results[0].currencies[0].code) + "</li>";
    a = a + "<img src='" + results[0].flag + "' width='100' height='50'>" + "<br><br>";

    document.getElementById("prueba").innerHTML = a;
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


async function convertCoin(pais) {
    let url = "https://api.exchangerate.host/convert?from=PEN&to=" + pais + "&amount=1";
    const response = await fetch(url);
    const a = await response.json();
    return a.result;
}


