let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let dni = document.querySelector('#dni');
let mensaje = document.querySelector('#mensajeError');
let direccion = document.querySelector('#direccion');
let poblacion = document.querySelector('#poblacion');
let pais = document.querySelector('#pais');
let email = document.querySelector('#email');
let emailconfirm = document.querySelector('#emailconfirm');
let intereses = document.querySelector('#intereses');
let contrasena = document.querySelector('#contrasena');
let boton = document.querySelector('#send');

nombre.addEventListener('change', () => {
  let entrada = nombre.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      nombre.value = cambio;
    } else {
      nombre.value = '';
      nombre.innerHTML = 'Error en el nombre';
    }
  }
});

nombre.addEventListener('keypress', () => {
  let entrada = nombre.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      nombre.value = cambio;
    } else {
      nombre.value = '';
      mensaje.innerHTML = 'Error en el nombre';
    }
  }
});

apellido.addEventListener('change', () => {
  let entrada = apellido.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      apellido.value = cambio;
    } else {
      apellido.value = '';
      mensaje.innerHTML = 'Error en el apellido';
    }
  }
});

apellido.addEventListener('keypress', () => {
  let entrada = apellido.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      apellido.value = cambio;
    } else {
      apellido.value = '';
      mensaje.innerHTML = 'Error en el apellido';
    }
  }
});

dni.addEventListener('change', () => {
  let entrada = dni.value;
  let numero = '';
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

  for (let i = 0; i < entrada.length - 1; i++) {
    numero += entrada[i];
  }

  if (letras[Number(numero) % 23] == entrada[entrada.length - 1]) {
    console.log('La letra es correcta');
  } else {
    dni.value = '';
    mensaje.innerHTML = 'Error en el DNI';
  }
});

direccion.addEventListener('change', () => {
  let formato = ['Tipo vía/ Nombre vía', 'Número', 'Resto de Datos', ' CP'];
  let entrada = direccion.value;
  let arreglo = entrada.split(',');
  let primero = arreglo[0];
  let barra = false;

  for (let i = 0; i < primero.length; i++) {
    if (primero[i] == '/') {
      barra = true;
    }
  }

  if (arreglo.length == formato.length && barra) {
    console.log('Todo Ok con la direccion');
  } else {
    direccion.value = '';
    mensaje.innerHTML = 'Error en la dirección';
  }
});

poblacion.addEventListener('change', () => {
  let entrada = poblacion.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      poblacion.value = cambio;
    } else {
      poblacion.value = '';
      mensaje.innerHTML = 'Error en la poblacion';
    }
  }
});
poblacion.addEventListener('keypress', () => {});
pais.addEventListener('change', () => {});
pais.addEventListener('keypress', () => {});
email.addEventListener('change', () => {});
email.addEventListener('keypress', () => {});
emailconfirm.addEventListener('change', () => {});
emailconfirm.addEventListener('keypress', () => {});
intereses.addEventListener('change', () => {
  const listaIntereses = ['mercado inmobiliario', 'bolsa', 'bienes estatales'];
  let entrada = intereses.value;
  entrada = entrada.split(',');
  let verificar = false;
  for (let i = 0; i < listaIntereses.length; i++) {
    for (let j = 0; j < entrada.length; j++) {
      if (entrada[j] == listaIntereses[i]) {
        verificar = true;
      } else {
      }
    }
  }
  if (verificar) {
    console.log('coincide');
  } else {
    intereses.value = '';
    mensaje.innerHTML =
      'Al menos una afición tiene que estar relacionada con el banco';
  }
});
intereses.addEventListener('keypress', () => {});
contrasena.addEventListener('change', () => {});
contrasena.addEventListener('keypress', () => {});
boton.addEventListener('click', () => {});
