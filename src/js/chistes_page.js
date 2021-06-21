import { consumirAPI } from "./http-provider";

const body = document.body;
let botonChiste;


const crearChiste = () => {
    const codigo = `<h1 class="titulo">Chistes</h1>
                   
                    <button class="boton">Nuevo Chiste</button>
                    `;
    const divchsite = document.createElement("DIV");
    divchsite.innerHTML = codigo;
    body.appendChild(divchsite);
}

const eventos = () => {
    const botonChiste = document.querySelector(".boton");
    botonChiste.addEventListener("click", async() => {
        dibujarChiste(await consumirAPI());
    })
}

const dibujarChiste = (chiste) => {
    const item = document.createElement("p");
    item.innerHTML = `<strong>${chiste.id}</strong>: ${chiste.value}`;
    body.appendChild(item)

}

export const initchiste = () => {
    crearChiste();
    eventos();
}