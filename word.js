"use strict";

// Este código exporta tres variables y una función. Se genera la palabra random y se convierte en guiones "_". Se retorna un array con ambas.

// Esta es una variable exportada que contiene una matriz de palabras para el nivel de dificultad fácil. Estas palabras son todas verduras
export const easy = [
  "zanahoria",
  "patata",
  "brocoli",
  "boniato",
  "acelgas",
  "pimiento",
  "coliflor",
  "berenjena",
  "alcachofa",
  "cebolla",
];

// Esta es una variable exportada que contiene una matriz de palabras para el nivel de dificultad normal. Estas palabras son todos países
export const normal = [
  "thailandia",
  "peru",
  "venezuela",
  "argentina",
  "españa",
  "francia",
  "alemania",
  "colombia",
  "marruecos",
  "portugal",
];

// Esta es una variable exportada que contiene una matriz de palabras para el nivel de dificultad difícil. Estas palabras son todos términos de programación
export const hard = [
  "javascript",
  "array",
  "backend",
  "frontend",
  "fullstack",
  "funcion",
  "constante",
  "objeto",
  "asincronia",
  "fetch",
];

// Estas son dos variables exportadas que se utilizan para almacenar la palabra secreta seleccionada al azar y la versión oculta de la palabra secreta
export let palabraOculta;
export let palabraSecreta;

// Esta es una variable local que se utiliza para almacenar la palabra secreta y la palabra oculta en un arreglo
let array = [];

// Esta es una función exportada llamada "arrayPalabras" que se utiliza para seleccionar una palabra al azar de una matriz de palabras según la dificultad seleccionada. La función toma un parámetro "arrayRandom", que es la matriz de palabras correspondiente al nivel de dificultad seleccionado. La función utiliza la función "Math.random()" para seleccionar un índice aleatorio de la matriz de palabras y establecer esa palabra como la palabra secreta. Luego, la función utiliza la función "replace()" para convertir la palabra secreta en una versión oculta de la palabra (es decir, todos los caracteres se reemplazan por guiones bajos). Finalmente, la función almacena la palabra secreta y la versión oculta de la palabra en un arreglo y devuelve ese arreglo
export let arrayPalabras = function start(arrayRandom) {
  let i = Math.floor(Math.random() * arrayRandom.length);
  palabraSecreta = arrayRandom[i];
  palabraOculta = palabraSecreta.replace(/./g, "_");

  array[0] = palabraSecreta;
  array[1] = palabraOculta;
  return array;
};
