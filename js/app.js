async function obtenerDatos() {
    try {
        const datosAPI = await fetch("https://swapi.info/api/species");
        const response = await datosAPI.json();
        console.log(response);
        const contenedor = document.getElementById("catalogo");
                response.forEach(especie =>{
                    contenedor.innerHTML += `
                        <article>
                            <h2>${especie.name}</h2>
                            <p>${especie.classification}</p>
                        </article>
                    `;
                })
            }catch(error){
                console.log(error)
            }
}


especies = obtenerDatos()