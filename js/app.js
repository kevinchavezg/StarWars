let datos = [];

async function obtenerDatos() {
    try {
        const datosAPI = await fetch("https://swapi.info/api/species");
        const datos = await datosAPI.json();
        console.log(datos);
        const contenedor = document.getElementById("catalogo");
                datos.forEach(especie =>{
                    contenedor.innerHTML += `
                        <article class="card" id="card">
                            <h2>${especie.name}</h2><br>
                            <p>Clasificación: ${especie.classification}</p>
                            <br><button class="detalle">Detalle</button>
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

