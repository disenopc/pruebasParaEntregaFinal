const dialog = document.querySelector("dialog");
const cancel = document.querySelector("#cancel");
const show = document.querySelector("#show");

show.addEventListener("click", () => dialog.showModal());
cancel.addEventListener("click", () => dialog.close());

//PASOS
//ESCRIBIR EL INPUT Y ENVIARLO

//RECIBO LA INFO DEL INPUT

let codigoPostal = document.querySelector("#cP");
codigoPostal.addEventListener("click", () => retiro.showModal());

let retiro = document.querySelector("#retiroModal");
const cerrarM = document.querySelector("#cerrar");
cerrarM.addEventListener("click", () => retiro.close());

let sucursalCerca = "";



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
        });
};

obtenerDomicilio();
let sucursales = [];
let coincideCp = document.querySelector("#inputCp").value;
coincideCp.addEventListener("input", updateValue);

function updateValue(codigoPostal) {
    console.log(codigoPostal.target.value);

}
// while (coincideCp != "") {
//     const codePost = sucursales.filter(sucursales => sucursales.codigoPostal == coincideCp);
//     console.log(codePost);
// }














// buscarElCpEnData();

//BUSCAR EN EL ARRAY EL CODIGO POSTAL


// function buscarElCpEnData() {
//     
//     console.log(codePost);
// }






//LUEGO DEVOLVER EL DOMICILIO  DE ESE CODIGO POSTAL
// const modalDelDom = document.querySelector(".modalDePrueba");
// const modalEnElDom = (sucursales) => {
//     const modal = document.createElement("div");
//     modal.classList.add("modal-content");
//     modal.innerHTML = `
//                 <div class="modal" tabindex="-1">
//                 <div id="modalDePrueba" class="modal-dialog">
//                 <div class="modal-header">
//                     <h5 class="modal-title">Modal title</h5>
//                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
//                     <p>Modal body text goes here.</p>
//                 </div>
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                     <button type="button" class="btn btn-primary">Save changes</button>
//                 </div>
//                 </div>
//                 </div>

//     `
//     modalDelDom.appendChild(modal)
// }