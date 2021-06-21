import { subirArchivo } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;


const crearFoto = () => {
    let codigo = ` <h1 class="titulo">Subir Archivos</h1>
                <hr>
                <label for="caja">Seleccione una fotografia:</label>
                <input type="file" name="caja" id="caja" accept="image/png, image/jpg">
                <br>
                <img src="" alt="imagen" id="foto">`;
    body.innerHTML = codigo;
    inputFile = document.querySelector("#caja");
    imgFoto = document.querySelector("#foto");

}



const eventos = () => {
    inputFile.addEventListener("change", (e) => {
        const file = e.target.files[0];
        subirArchivo(file).then(url => {
            imgFoto.src = url
        })
    })
}



export const initCloudinary = () => {
    crearFoto();
    eventos();
}