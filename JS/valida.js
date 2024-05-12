// Declaramos la variable del formulario
const form = document.getElementById("contactForm")
// Declaramos variables de los elementos
const nombre = document.getElementById("name");
const apellido = document.getElementById("lastname");
const email = document.getElementById("email");
const numero = document.getElementById("phone");
const mensaje = document.getElementById("message");
const error = document.getElementById("warning-error");

form.addEventListener("submit", e=>{
    e.preventDefault(); // Evita que el formulario se envie de forma automatica
    let errores = "";
    let regexNombreApellido = /^[A-Za-z\s]+$/;
    // Validaciones para el nombre
    nombre.value = nombre.value.trim();
    if (nombre.value == '' || nombre.value == undefined) {
        alert("Please enter your name.");
        errores += 'El nombre no debe estar vacio <br>';
    }
    if (nombre.value.length < 3 || nombre.value.length > 20){
        alert("El nombre debe tener de 3-20 caracteres");
        errores += 'El nombre debe tener de 3-20 Caracteres <br>';
    }
    if (!regexNombreApellido.test(nombre.value)){
        alert("El nombre solo debe contener letras o espacios")
        errores += 'El nombre solo debe contener letras o espacios <br>'
    }
    // Validaciones para el apellido
    apellido.value = apellido.value.trim();
    if (apellido.value == '' || apellido.value == undefined) {
        alert("Please enter your lastname.");
        errores += 'El apellido no debe estar vacio <br>';
    }
    if (apellido.value.length < 3 || apellido.value.length > 20){
        alert("El apellido debe tener de 3-20 caracteres");
        errores += 'El apellido debe tener de 3-20 Caracteres <br>';
    }
    if (!regexNombreApellido.test(apellido.value)){
        alert("El apellido solo debe contener letras o espacios")
        errores += 'El apellido solo debe contener letras o espacios <br>'
    }
    // Validaciones para el email
    // Validaciones para telefono
    // Validaciones para el mensaje
    error.innerHTML = errores
})