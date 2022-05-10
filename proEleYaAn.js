let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let dni = document.querySelector('#dni');

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
    }
  }
});
