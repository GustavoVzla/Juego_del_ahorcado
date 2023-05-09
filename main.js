"use strict";

// Importar las funciones y variables necesarias desde los archivos externos
import { partidaGanada, partidaPerdida } from "./resolucionPartidas.js";
import { arrayPalabras, easy, normal, hard } from "./word.js";

// Declarar las variables utilizando "let" en bloque
let palabraSecreta,
  palabraOculta,
  puntaje = 0;
let error = 6,
  letrasError = [],
  var_sonido = true;

// DOM
// Obtener referencias a los elementos HTML que se utilizarán en el código
const letraSeleccionada = document.getElementById("letra");
const click_comprobar = document.getElementById("comprobar");
const modalBienvenida = document.getElementById("modal-bienvenida");
const btn_easy = document.querySelector(".easy");
const btn_normal = document.querySelector("#normal");
const btn_hard = document.querySelector("#hard");
const img_arbol = document.querySelector("#img_arbol");
const record_h2 = document.querySelector("#record");
const h2 = document.getElementById("palabraSecreta");
const arrayError = document.getElementById("arrayError");
const arbol = document.querySelector(".arbol");
const audio_fondo = document.querySelector("#audio_fondo");
const audio_win = document.querySelector("#audio_win");
const audio_lose = document.querySelector("#audio_lose");
const audio_victory = document.querySelector("#audio_victory");
const audio_loser = document.querySelector("#audio_loser");
const sonido = document.querySelector(".sonido");

// Comprobar si existe una clave de almacenamiento "record" en localStorage. Si no existe, crearla con valor 0. Si existe, mostrar su valor en "record_h2"
if (!localStorage.getItem("record")) {
  localStorage.setItem("record", puntaje);
} else {
  record_h2.textContent = `Record: ${localStorage.getItem("record")}`;
}

// Mostrar el mensaje de bienvenida al cargar la página
window.onload = () => {
  modalBienvenida.style.display = "block";
};

// Procesar la letra seleccionada y actualizar la interfaz de usuario
function comprobar() {
  const palabraSecretaArray = palabraSecreta.split("");
  const letra = letraSeleccionada.value.toLowerCase();

  if (letra === "") {
    alert("Debes seleccionar una letra!");
  } else if (palabraSecretaArray.includes(letra)) {
    const palabraOcultaArray = palabraOculta.split("");
    for (let i = 0; i < palabraSecretaArray.length; i++) {
      if (palabraSecretaArray[i] === letra) {
        palabraOcultaArray[i] = letra;
        palabraOculta = palabraOcultaArray.join("");
        h2.textContent = palabraOculta.toUpperCase();
        audio_win.play();
      }
    }
    if (palabraOculta === palabraSecreta) {
      puntaje++;
      partidaGanada(puntaje);
      if (puntaje > localStorage.getItem("record")) {
        localStorage.setItem("record", puntaje);
        record_h2.textContent = `Record: ${localStorage.getItem("record")}`;
      }
    }
  } else {
    if (!letrasError.includes(letra.toUpperCase())) {
      error--;
      audio_lose.play();
      letrasError.push(letra.toUpperCase());
      arrayError.textContent = letrasError.join("-");
      if (error === 0) {
        partidaPerdida(palabraSecreta, puntaje);
      } else if (error === 1) {
        arbol.style.backgroundImage = "url(img/img5.png)";
      } else if (error === 2) {
        arbol.style.backgroundImage = "url(img/img4.png)";
      } else if (error === 3) {
        arbol.style.backgroundImage = "url(img/img3.png)";
      } else if (error === 4) {
        arbol.style.backgroundImage = "url(img/img2.png)";
      } else if (error === 5) {
        arbol.style.backgroundImage = "url(img/img1.png)";
      }
    }
  }

  letraSeleccionada.value = "";
  letraSeleccionada.focus();
}

// Configurar el juego según la dificultad seleccionada y seleccionar una palabra aleatoria del archivo "word.js"
function comenzarJuego(dificultad) {
  const array = arrayPalabras(dificultad);
  palabraSecreta = array[0];
  palabraOculta = array[1];
  h2.textContent = palabraOculta.toUpperCase();
  modalBienvenida.style.display = "none";
  if (dificultad !== hard) {
    error = 6;
    arbol.style.backgroundImage = "url(img/arbol.png)";
  } else {
    error = 3;
    arbol.style.backgroundImage = "url(img/img3.png)";
  }
  letrasError = [];
  arrayError.textContent = "";
  letraSeleccionada.focus();
  audio_fondo.src = "audio/dramatic.mp3";
  if (var_sonido) {
    audio_fondo.play();
  }
}

// Asignar los eventos a los elementos HTML correspondientes
click_comprobar.addEventListener("click", comprobar);

btn_easy.addEventListener("click", () => {
  comenzarJuego(easy);
});

btn_normal.addEventListener("click", () => {
  comenzarJuego(normal);
});

btn_hard.addEventListener("click", () => {
  comenzarJuego(hard);
});

sonido.addEventListener("click", () => {
  if (var_sonido) {
    audio_fondo.src = "";
    var_sonido = false;
    audio_fondo.src = "audio/dramatic.mp3";
    sonido.style.backgroundImage = "url(img/mute.png)";
  } else {
    audio_fondo.play();
    var_sonido = true;
    sonido.style.backgroundImage = "url(img/Sound.png)";
  }
});

// Procesar la tecla Enter para verificar la letra seleccionada
function enter(event) {
  if (event.keyCode === 13) {
    comprobar();
  }
}

// Asignar la función "enter()" como controlador de eventos para la tecla Enter
window.onkeydown = enter;
