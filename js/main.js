// FUNCIONALIDAD PARA ACTIVAR EL MODO CLARO y OSCURO
// Seleccionar el input que está dentro del elemento con la clase switch
const inputs = document.querySelectorAll(".switch input[type=checkbox]");

const fondoPrimario = document.querySelectorAll(".fondo-primario");
const fondoSecundario = document.querySelectorAll(".fondo-secundario");
const textoPrimario = document.querySelectorAll(".texto-primario");
const textoSecundario = document.querySelectorAll(".texto-secundario");
const elementosNavBar = document.querySelectorAll("nav ul a, nav ul li label")

for (let i = 0; i < inputs.length; i++) {
    // Añadir un evento de tipo change al input
    inputs[i].addEventListener("change", function () {
        // Obtener el valor de la propiedad checked que puede ser true or false
        const estado = inputs[i].checked;
        console.log(inputs[i]);
        console.log(estado);

        if (!estado) {
            // Recorrer cada elemento y Reemplazar la clase
            fondoPrimario.forEach(function (elemento) {
                elemento.classList.replace("fondo-primario-claro", "fondo-primario");
            });
            fondoSecundario.forEach(function (elemento) {
                elemento.classList.replace("fondo-secundario-claro", "fondo-secundario");
            });
            textoPrimario.forEach(function (elemento) {
                elemento.classList.replace("texto-primario-claro", "texto-primario");
            });
            textoSecundario.forEach(function (elemento) {
                elemento.classList.replace("texto-secundario-claro", "texto-secundario");
            });

        }
        if (estado) {
            // Recorrer cada elemento y Reemplazar la clase
            fondoPrimario.forEach(function (elemento) {
                elemento.classList.replace("fondo-primario", "fondo-primario-claro");
            });
            fondoSecundario.forEach(function (elemento) {
                elemento.classList.replace("fondo-secundario", "fondo-secundario-claro");
            });
            textoPrimario.forEach(function (elemento) {
                elemento.classList.replace("texto-primario", "texto-primario-claro");
            });
            textoSecundario.forEach(function (elemento) {
                elemento.classList.replace("texto-secundario", "texto-secundario-claro");
            });
        }
    });
}

// Inicialización del plugin para ocultar nav en pantallas medianas y pequeñas
document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem);
});