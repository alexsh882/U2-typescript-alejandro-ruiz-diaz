/* Interface y clases
    Crea una interfaz Shape que tenga un método area() que devuelve un número.
    Luego, crea una clase Circle que implemente esta interfaz y calcule el área de un círculo.
    */

// Interfaz Shape con un método area que devuelve un número, será el contrato que usarán las clases que la implementen
interface Shape {
  area(): number;
}

// Clase Circle que implementa la interfaz Shape
class Circle implements Shape {
  // Propiedad radius de tipo number que recibe el radio del círculo
  constructor(private radius: number) {}

  // Método area que devuelve el área del círculo
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Instancia de la clase Circle con un radio de 5
const circle = new Circle(25);

// Llamada al método area de la clase Circle
console.log(circle.area()); // esto daría como resultado 1963.4954084936207 y se imprimiría en consola.