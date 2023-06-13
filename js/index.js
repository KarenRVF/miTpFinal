
const formulario = document.querySelector("#formulario");


formulario.addEventListener("submit", validarFormulario);



function validarFormulario(foro) {
    foro.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const jugador = document.querySelector("#jugador").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola ${nombre}, elegiste a ${jugador}`
    let resp = respuesta.textContent
    console.log(resp)
}


