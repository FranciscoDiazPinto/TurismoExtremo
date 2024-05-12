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
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let regexNumber = /^\d+$/;
    error.innerHTML = ""

    // Validaciones para el nombre
    nombre.value = nombre.value.trim();
    if (nombre.value == '' || nombre.value == undefined) {
        errores += 'El nombre no debe estar vacio <br>';
    }
    if (nombre.value.length < 3 || nombre.value.length > 20){
        errores += 'El nombre debe tener de 3-20 Caracteres <br>';
    }
    if (!regexNombreApellido.test(nombre.value)){
        errores += 'El nombre solo debe contener letras o espacios <br>'
    }

    // Validaciones para el apellido
    apellido.value = apellido.value.trim();
    if (apellido.value == '' || apellido.value == undefined) {
        errores += 'El apellido no debe estar vacio <br>';
    }
    if (apellido.value.length < 3 || apellido.value.length > 20){
        errores += 'El apellido debe tener de 3-20 Caracteres <br>';
    }
    if (!regexNombreApellido.test(apellido.value)){
        errores += 'El apellido solo debe contener letras o espacios <br>'
    }

    // Validaciones para el email
    email.value = email.value.trim();
    if (email.value == '' || email.value == undefined){
        errores += 'El email no debe estar vacio <br>'
    }
    if (!regexEmail.test(email.value)){
        errores += 'El email debe seguir el patron nombre@dominio.com <br>'
    }

    // Validaciones para telefono
    numero.value = numero.value.trim()
    if (numero.value == '' || numero.value == undefined){
        errores += 'El numero no debe estar vacio <br>'
    }
    if (numero.value.length != 9){
        errores += 'El numero debe contener 9 caracteres <br>';
    }
    if (!regexNumber.test(numero.value)){
        errores += 'El numero debe seguir el patron 955552222 <br>'
    }
    // Validaciones para el mensaje
    if (mensaje.value == '' || mensaje.value == undefined){
        errores += 'El mensaje no debe estar vacio <br>'
    }
    if (mensaje.value.length > 1000){
        errores += 'El mensaje no debe superar los 1000 caracteres <br>'
    }
    // Finalizacion
    error.innerHTML = errores
    if (errores === "") {
        form.submit();
    } else {
        error.innerHTML = errores;
    }
})