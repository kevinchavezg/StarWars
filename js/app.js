async function obtenerDatos() {
    try {
        const datosAPI = await fetch("https://swapi.info/api/species");
        const response = await datosAPI.json();
        console.log(response);
        const contenedor = document.getElementById("catalogo");
                response.forEach(especie =>{
                    contenedor.innerHTML += `
                        <article class="card" id="card">
                            <h2>${especie.name}</h2><br>
                            <p>Clasificación: ${especie.classification}</p>
                            <p>Estimación de vida: ${especie.average_lifespan}</p>
                            <p>Color de piel: ${especie.skin_colors}</p>
                            <p>Color de cabello: ${especie.hair_colors}</p>
                            <p>Color de ojos: ${especie.eye_colors}</p>
                            <p>Lenguaje: ${especie.language}</p>
                        </article>
                    `;
                })
            } catch (error) {
                contenedor.innerHTML = `
                <h2>Error</h2>
                <p>${error.message}</p>
                `;
            }
}

const input = document.getElementById("textoBuscar");
const boton = document.getElementById("botonBuscar");
const articulos = document.querySelectorAll("article");
boton.addEventListener("click", buscarTarjetas);

function buscarTarjetas() {
    const texto = input.value.toLowerCase().trim();
    articulos.forEach(articulo => {
        const contenido = articulo.textContent.toLowerCase();
        if (contenido.includes(texto)) {
            articulo.style.display = "block";
        } else {
            articulo.style.display = "none";
        }
    });
}

especies = obtenerDatos()


input.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
        boton.click();
    }
});

