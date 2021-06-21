const url = 'https://api.chucknorris.io/jokes/random';
const urlusuarios = 'https://reqres.in/api/users?page=1';
const clavecloudinary = "shsjufsd";
const urlcloudinary = "https://api.cloudinary.com/v1_1/defok5em4/upload";

export const consumirAPI = async() => {
    try {
        const respuesta = await fetch(url);
        const chiste = await respuesta.json();
        const { icon_url, id, value } = chiste;
        return { icon_url, id, value };
    } catch (error) {
        console.log("Error al conectarse con la API");
        console.log(error)

    }
}
export const obtenerUsuarios = async() => {
    try {
        const respuesta = await fetch(urlusuarios);
        const usuarios = await respuesta.json();
        return usuarios.data;
    } catch (error) {
        console.log("Error al conectarse con la API");
        console.log(error)
    }
}


export const subirArchivo = async(archivo) => {
    const formData = new FormData();
    formData.append('upload_preset', clavecloudinary);
    formData.append('file', archivo);

    try {
        const respuesta = await fetch(urlcloudinary, {
            method: "POST",
            body: formData
        });
        if (respuesta.ok) {
            const cloudresp = await respuesta.json();
            return cloudresp.secure_url;
        } else {
            throw await respuesta.json();
        }
    } catch (error) {
        console.log(error);

    }
}