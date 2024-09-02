/* Genéricos (básico)
Escribe una función genérica identity que tome un argumento de tipo T y devuelva el mismo valor. 
Usa esta función con diferentes tipos de datos.*/

// Esta función genérica toma un argumento de tipo T y devuelve el mismo valor.
function identity<T>(arg: T): T {
    return arg;
}

// Usamos la función con diferentes tipos de datos para demostrar que funciona correctamente.

console.log(identity<boolean>(true));

console.log(identity<string>("Hola"));

console.log(identity<number>(5));
