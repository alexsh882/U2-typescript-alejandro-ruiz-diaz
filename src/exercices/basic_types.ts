/* Declara una variable age de tipo número y asígnale un valor.
Luego, declara una variable name de tipo string y asígnale un valor. */

// Existen varias formas de declarar variables en TypeScript, a continuación muestro dos ejemplos:

// 1. declaro las variables como const, le asigno un tipo y un valor que no va a poder cambiar.
const age: number = 35;

const names: string = "Alejandro";

//names = "Juan"; esto me dará el error "No se puede asignar a "names" porque es una constante." (le comento para que no me llore el compilador)


// 2. declaro las variables como let, le asigno un tipo y luego les asigno su valor un valor (que puede cambiar).

let age1: number;

let names1: string;

age1 = 35;

names1 = "Alejandro";