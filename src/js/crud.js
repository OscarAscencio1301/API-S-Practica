const urlcrud = "https://reqres.in/api/users";

const leerUsuario = async(id) => {
    const respuesta = await fetch(`${urlcrud}/${id}`);
    const { data } = await respuesta.json();
    return data;
}

const insertarUsuario = async(usuario) => {
    const respuesta = await fetch(urlcrud, {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await respuesta.json();
}

const editarUsuario = async(id, usuario) => {
    const respuesta = await fetch(`${urlcrud}/${id}`, {
        method: "PUT",
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await respuesta.json();
}
const eliminarUsuario = async(id) => {
    const respuesta = await fetch(`${urlcrud}/${id}`, {
        method: "DELETE"
    })
    return (respuesta.ok) ? "Borrado" : "No se encontro";
}



export const initCrud = () => {
    leerUsuario(1).then(console.log)
    insertarUsuario({
        nombre: "Oscar",
        empleo: "dev",
    }).then(console.log)
    editarUsuario(1, {
        nombre: "Oscar Ethian",
        empleo: "development",
    }).then(console.log)
    eliminarUsuario(1).then(console.log)

}