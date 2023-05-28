//1 inicializar todo lo que voy a necesitar

let player = "X";

//2 selecciono elementos

const tablero = document.querySelectorAll(".squares");
//squares = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

tablero.forEach((tablero, i) => {
  tablero.addEventListener("click", () => play(tablero, i));
});
//3 trabajo con la logica

const play = (tablero, i) => {
  tablero.innerHTML = player;
};
//4 ver si algo debo limpiar o reiniciar
