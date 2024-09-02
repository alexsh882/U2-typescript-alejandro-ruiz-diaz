/* Enum
    Declara un enum Color con los valores "Red", "Green", y "Blue". 
    Crea una función que tome un argumento de tipo Color y devuelva un mensaje con el color.*/

enum Color {
  RED = "Red",
  GREEN = "Green",
  BLUE = "Blue",
}

function getColor(color: Color): string {
  return `The color is ${color}`;
}

console.log(getColor(Color.RED)); // esto imprimirá por consola "The color is Red"
