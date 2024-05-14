// Obtener referencias a los elementos del DOM
const btnSignIn = document.getElementById('sign-in');
const btnSignUp = document.getElementById('sign-up');
const formRegister = document.querySelector('.register');
const formLogin = document.querySelector('.login');

// Agregar event listeners a los botones de inicio de sesión y registro
btnSignIn.addEventListener("click", e => {
    formRegister.classList.add('hide');
    formLogin.classList.remove('hide');
});

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add('hide');
    formRegister.classList.remove('hide');
});

// Obtener referencia al formulario de registro
const registerForm = document.querySelector('.form-information-childs form');
const loginForm = document.querySelector('.form-information-childs1 form');

//incio de desion

// Agregar event listener al formulario de registro
loginForm.addEventListener('submit', async e => {
    e.preventDefault(); // Prevenir envío del formulario

    // Obtener valores de los campos del formulario
    // const nombreUsuario = registerForm.querySelector('input[type="text"]').value;

    alert("iniciando session");
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Objeto con la información del nuevo usuario
    const nuevoUsuario = {
        email: email,
        password: password
    };

    try {
        // Enviar solicitud POST al servidor

        //  var parametros = $("#formulario").serialize();
        $.ajax({
            type: "POST",
            url: "http://localhost/formulario/Examen%201%20web/frontEnd/validarusuario.php?correo=" + email + "&contraseña=" + password,
            beforeSend: function (objeto) {
                $("#resultado").html("Mensaje: Cargando...");
            },
            success: function (datos) {
                $("#resultado").html(datos);
                if (datos == "Exitoso") {
                    alert("Bienvenido");
                    window.location.href = 'Escenario3.html';
                }
                else {
                    alert("Usuario o contraseña incorrectos");
                }
                //CargaVisita();
                // $('#actualizar_datos3').attr("disabled", false);
                //  load(1);
            }
        });
    } catch (error) {
        console.error('Error al registrar el usuario', error.message);
    }
});



// Agregar event listener al formulario de registro
registerForm.addEventListener('submit', async e => {
    e.preventDefault(); // Prevenir envío del formulario

    // Obtener valores de los campos del formulario
    const nombreUsuario = registerForm.querySelector('input[type="text"]').value;


    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    // Objeto con la información del nuevo usuario
    const nuevoUsuario = {
        nombre: nombreUsuario,
        email: email,
        password: password
    };

    try {
        // Enviar solicitud POST al servidor
        const respuesta = await fetch('http://localhost/formulario/Examen%201%20web/frontEnd/registrarusuario.php?usuario=' + nombreUsuario + '&correo=' + email + '&contraseña=' + password, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoUsuario)
        });
        console.log(nuevoUsuario);
        // Verificar si la respuesta es exitosa
        if (respuesta.ok) {
            // Mostrar mensaje de registro exitoso
            // mostrarMensaje("¡Registro exitoso!");
            alert("El Usuario " + nombreUsuario + " a sido Registrado");
            // Redireccionar a la página de Escenario 2
            //window.location.href = 'Escenario2.html';
        } else {
            console.error('Error al registrar el usuario', respuesta.statusText);
        }
    } catch (error) {
        console.error('Error al registrar el usuario', error.message);
    }
});

// Función para mostrar un mensaje temporal
function mostrarMensaje(mensaje) {
    // Crear un elemento para el mensaje
    const mensajeElemento = document.createElement('div');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.add('mensaje');
    // Insertar el mensaje dentro del contenedor del formulario
    const containerForm = document.querySelector('.container-form.register');
    containerForm.appendChild(mensajeElemento);
    // Después de un tiempo, eliminar el mensaje
    setTimeout(() => {
        mensajeElemento.remove();
    }, 3000); // 3000 milisegundos = 3 segundos
}

