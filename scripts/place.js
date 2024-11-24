// Funcion para calcular la sensación termica en grados centigrados

function ST(T, V) {
    if (Number(T) <= 10 && Number(V) > 4.8) {
        indice = 13.12 + 0.6215 * T - 11.37 * V ** 0.16 + 0.3965 * T * V ** 0.16;
        return indice.toFixed(2) + " °C";
    } else {
        return "N/A";
    }
}

// We get numerical values from html
var regex = /(\d+)/g;

// Temperature
const T = document.querySelector('#Temperatura').textContent;

// wind
const V = document.querySelector('#Viento').textContent;

// We compute the wind chill with ST function.
WCH = ST(T.match(regex), V.match(regex));

// We put the resulting wind chill in the html.
document.querySelector('#WCh').textContent = WCH
