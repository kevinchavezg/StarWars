function obtenerDatos(){
    const datosAPI = fetch("https://swapi.info/api/species");
    //datosAPI.then((res) => res.json());
    //datosAPI.then((json) => console.log(json));
    //datosAPI.catch((error) => console.error(error));
    datosAPI.then((json) => console.log(json));
}

especies = obtenerDatos()