"use strict";

// Estos son elementos HTML que se utilizan para crear una ventana modal cuando el jugador gana o pierde el juego. "modalBienvenida" es el elemento principal que contiene el mensaje de la ventana modal, "modal_h2", "modal_h3" y "modal_p" son elementos para mostrar diferentes mensajes de texto, "puntaje_h2" es un elemento para mostrar la puntuación actual del jugador y "arbol" es el elemento que muestra la imagen del árbol que se actualiza según el número de errores del jugador
const modalBienvenida = document.getElementById("modal-bienvenida");
const modal_h2 = document.querySelector("#modal_h2");
const modal_h3 = document.querySelector("#modal_h3");
const modal_p = document.querySelector("#modal_p");
const puntaje_h2 = document.querySelector("#puntaje");
let arbol = document.querySelector(".arbol");

// Esta es una función exportada llamada "partidaPerdida" que se llama cuando el jugador pierde el juego. Esta función actualiza la interfaz de usuario para mostrar la ventana modal con un mensaje de que el jugador perdió, muestra la palabra secreta que no se pudo adivinar, establece la puntuación del jugador en 0, actualiza la imagen del árbol para mostrar un cuello ahorcado y reproduce un sonido de derrota. La función tiene dos parámetros: "palabraSecreta" para mostrar la palabra secreta que no se pudo adivinar y "puntaje" para actualizar la puntuación del jugador
export function partidaPerdida(palabraSecreta, puntaje) {
  arbol.style.backgroundImage = "url(img/img6.png)";
  setTimeout(() => {
    // Ventana modal ¡¡¡HAS PERDIDO!!!

    modalBienvenida.style.display = "block";
    modal_h2.textContent = "¡Perdiste el cuello amigo!";
    modal_h3.textContent = `La palabra secreta era ${palabraSecreta}`;
    modal_p.textContent = "¿Quieres volver a jugar?";
    puntaje = 0;
    puntaje_h2.textContent = `Puntaje: 0`;
    modal_img.src = "img/lose.png";
    audio_fondo.src = "";
    audio_loser.play();
  }, 1000);
}

// Esta es una función exportada llamada "partidaGanada" que se llama cuando el jugador gana el juego. Esta función actualiza la interfaz de usuario para mostrar la ventana modal con un mensaje de que el jugador ganó, establece la puntuación del jugador y muestra la imagen del árbol sin daños. La función también reproduce un sonido de victoria. El parámetro "puntaje" se utiliza para actualizar la puntuación del jugador
export function partidaGanada(puntaje) {
  // Estas son funciones de temporización que retrasan la ejecución de la ventana modal durante un segundo (1000 milisegundos). Esto se hace para que el jugador pueda ver la imagen actualizada del árbol antes de mostrar la ventana modal
  setTimeout(() => {
    // Ventana modal ¡¡¡HAS GANADO!!!
    modalBienvenida.style.display = "block";
    modal_h2.textContent = "¡Bien 🎉, salvaste el cuello! ";
    modal_h3.textContent = "";
    modal_p.textContent = "¿Quieres volver a jugar?";
    modal_img.src = "img/win.png";
    puntaje_h2.textContent = `Puntaje:${puntaje}`;
    audio_fondo.src = "";
    audio_victory.play();
  }, 1000);
}
