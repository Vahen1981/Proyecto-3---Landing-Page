//Manipular el input de suscripción
const botonSuscribete = document.getElementById('button-suscribete');
botonSuscribete.addEventListener('click', (event) => {
    event.preventDefault();
    validarSuscripcion();
});

function validarSuscripcion(){
    const suscripcion = document.getElementById('input-suscribete').value;
    const formatoMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formatoMail.test(suscripcion)){
        alert('El e-mail no es válido');
    }
    else{
        console.log('Nuevo suscriptor: ' + suscripcion);
        document.getElementById('input-suscribete').value = '';
    }
}

//Manipular botones de compra
const botonCompra = document.querySelectorAll('.boton-producto');

function comprar() {
    const contactoSection = document.getElementById('contacto');
    const body = document.body;

    contactoSection.scrollIntoView({ behavior: 'smooth' });

    const popUp = document.createElement('div');
    const desenfoqueFondo = document.createElement('div');
    desenfoqueFondo.id = 'desenfoque';
    popUp.id = 'pop-up'
    popUp.innerHTML = `<p>Escríbenos y te contactaremos a la brevedad para realizar tu compra</p>`
    
    contactoSection.appendChild(popUp);
    body.insertBefore(desenfoqueFondo, body.firstChild);

    setTimeout(() => {
        contactoSection.removeChild(popUp);
        body.removeChild(desenfoqueFondo);
    }, 3000);
}

botonCompra.forEach(boton => {
    boton.addEventListener('click', comprar);
});



//Manipular el formulario de contacto
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
