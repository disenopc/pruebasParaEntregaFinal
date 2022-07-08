// const dialog = document.querySelector("dialog");
// const cancel = document.querySelector("#cancel");
// const show = document.querySelector("#show");

// show.addEventListener("click", () => dialog.showModal());
// cancel.addEventListener("click", () => dialog.close());





// let codigoPostal = document.querySelector("#cP");
// codigoPostal.addEventListener("click", () => retiro.showModal());

// let retiro = document.querySelector("#retiroModal");
// const cerrarM = document.querySelector("#cerrar");
// cerrarM.addEventListener("click", () => retiro.close());

let sucursalCerca = "";
let sucursales = [];



function obtenerDomicilio() {
    const URLGET = "https://apisqa.andreani.com/v2/sucursales";
    fetch(URLGET)
        .then(resultado => resultado.json())
        .then(data => {
            console.log(data);
            sucursalCerca = data;
            for (const sucursales of sucursalCerca) {
                const { id, direccion: { localidad, provincia, codigoPostal } } = sucursales;
                console.log(id, codigoPostal, localidad, provincia);

            };
            encontrarCodig();
        });
};

obtenerDomicilio();

//PASOS



//ESCRIBIR EL INPUT Y ENVIARLO
//RECIBO LA INFO DEL INPUT
const input = document.querySelector('#inputCp');
input.addEventListener('input', updateValue);

function updateValue(e) {
    console.log(e.target.value);
}

//ESA INFO LA COMPARO CON EL ARRAY DE SUCURSALES

function encontrarCodig() {
    const resultado = sucursales.find(input => sucursales.codigoPostal === input);
    console.log(resultado);
}