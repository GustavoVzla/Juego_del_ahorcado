# Juego del ahorcado

Hangman game in the browser, written in vanilla JavaScript (ES modules), HTML and CSS, no frameworks (May 2023, early learning project). The interface is in Spanish.

## Features

- Three difficulty levels with different word lists: easy (vegetables), normal (countries) and hard (programming terms)
- Random word selection, letter input, score and record tracking
- Sound effects and a custom visual theme

## Files

- `index.html`, `style.css`: layout and styles
- `main.js`: game flow and DOM handling
- `resolucionPartidas.js`: round resolution logic
- `word.js`: word lists and random word generation

## Run

ES modules need a local server (opening the file directly will not work):

```bash
npx serve .
```

Then open the printed URL.
