// FUNCIONALIDAD PARA ACTIVAR EL MODO CLARO y OSCURO
// Seleccionar los dos inputs que están dentro de los elementos con la clase switch
const inputs = document.querySelectorAll(".switch input[type=checkbox]");

const fondoPrimario = document.querySelectorAll(".fondo-primario");
const fondoSecundario = document.querySelectorAll(".fondo-secundario");
const textoPrimario = document.querySelectorAll(".texto-primario");
const textoSecundario = document.querySelectorAll(".texto-secundario");
// const elementosNavBar = document.querySelectorAll("nav ul a, nav ul li label")

// sacamos a parte los foreach en una función independiente
function reemplazarClase(elementos, clase1, clase2) {
    elementos.forEach(function (elemento) {
        elemento.classList.replace(clase1, clase2);
    });
}

for (let i = 0; i < inputs.length; i++) {
    // Capturar el evento de tipo change de los dos inputs
    inputs[i].addEventListener("change", function () {
        // Obtener el valor de la propiedad checked que puede ser true or false
        const estado = inputs[i].checked;
        console.log(inputs[i]);
        console.log(estado);

        if (!estado) {
            // Recorrer cada elemento y Reemplazar la clase
            reemplazarClase(fondoPrimario, "fondo-primario-claro", "fondo-primario");
            reemplazarClase(fondoSecundario, "fondo-secundario-claro", "fondo-secundario");
            reemplazarClase(textoPrimario, "texto-primario-claro", "texto-primario");
            reemplazarClase(textoSecundario, "texto-secundario-claro", "texto-secundario");
        }
        if (estado) {
            // Recorrer cada elemento y Reemplazar la clase
            reemplazarClase(fondoPrimario, "fondo-primario", "fondo-primario-claro");
            reemplazarClase(fondoSecundario, "fondo-secundario", "fondo-secundario-claro");
            reemplazarClase(textoPrimario, "texto-primario", "texto-primario-claro");
            reemplazarClase(textoSecundario, "texto-secundario", "texto-secundario-claro");
        }
    });
}

// Inicialización del plugin para ocultar nav en pantallas medianas y pequeñas
document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem);
});