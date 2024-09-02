/* Clase con propiedades privadas
    Modifica la clase Car para que la propiedad make sea privada.
    Añade un método getMake() que devuelva el valor de make. */

/* Defino la clase Car con el constructor que inicializa la propiedad make 
    y un método drive que imprime un mensaje en la consola.*/
class Car {
  private make: string;

  constructor(make: string) {
    this.make = make;
  }

  public getMake() {
    return this.make;
  }

  drive() {
    console.log(`Driving a ${this.make}`);
  }
}

// Creo una instancia de la clase Car con el valor 'Toyota', el cual asignará el valor a la propiedad "make" de la clase.
const car = new Car("Toyota");

console.log(`La marca es ${car.getMake()}`); // esto daría como resultado la impresión en consola de "La marca es Toyota"

car.drive(); // la ejecución de este método de la clase Car daría como resultado la impresión en consola de "Driving a Toyota"
