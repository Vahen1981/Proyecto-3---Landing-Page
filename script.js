let nombre;
let apellido;
let email;
let mensaje;

const boton = document.getElementById('boton');
boton.addEventListener('click', (event) => {
    event.preventDefault();
    validarGuardarDatos();
});

function validarGuardarDatos() {
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    email = document.getElementById('email').value;
    mensaje = document.getElementById('mensaje').value;
    const formatoMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(nombre === '' || apellido === '' || email === '' || mensaje === ''){
        alert('Debe rellenar todos los campos');
    }
    else if(!formatoMail.test(email)){
        alert('El e-mail no es válido');
    }

    else{
        console.log('Nombre: ' + nombre);
        console.log('Apellido: ' + apellido);
        console.log('Email: ' + email);
        console.log('Mensaje: ' + mensaje);

        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    }
}
