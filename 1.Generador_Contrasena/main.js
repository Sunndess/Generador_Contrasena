let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let boton2 = document.getElementById('limpiar');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
    let numeroDigitado = parseInt (cantidad.value);

    if(numeroDigitado < 8){
        mensaje.textContent = 'La cantidad de caracteres tiene que ser mayor que 8.';
        mensaje.style.color = 'orange';
    }

    let password = '';
    for(let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

    contrasena.value = password;

    validarContrasena(password);
}

function limpiar(){
    contrasena.value = '';
    cantidad.value = '';
    mensaje.textContent = ''; 

}
function validarContrasena(password) {
    let esFuerte = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/.test(password);

    if (!esFuerte) {
        mensaje.textContent = 'La contraseña es débil. Debe contener al menos un número, una letra mayúscula y una letra minúscula.';
        mensaje.style.color = 'orange';
    } else {
        mensaje.textContent = 'La contraseña es fuerte.';
        mensaje.style.color = 'skyblue';
    }
}