/* Tipos literales
Crea una variable direction que solo pueda tener uno de los siguientes valores: "up", "down", "left", "right". */


/* creo la variable direction que solo puede tener uno de los siguientes valores: "up", "down", "left", "right"
y lo seteo con el valor "up" */

const direction: "up" | "down" | "left" | "right" = "up";


/* También puedo crear un type con esos valores e implementar en una variable */

type Direction = "up" | "down" | "left" | "right";

let direction2: Direction;

direction2 = "down";

// direction2 = 'abajo'; 
// Esto daría un error porque 'abajo' no es un valor válido (declarado en el tipo) para la variable direction2.

