/* Clase con constructor
    Añade un constructor a la clase Car que inicialice la propiedad make. 
    Crea una instancia de Car con una marca y llama al método drive(). */

/* Defino la clase Car con el constructor que inicializa la propiedad make 
    y un método drive que imprime un mensaje en la consola.*/
class Car {
  make: string;
  
  constructor(make: string) {
    this.make = make;
  }

  drive() {
    console.log(`Driving a ${this.make}`);
  }
}

// Creo una instancia de la clase Car con el valor 'Toyota', el cual asignará el valor a la propiedad "make" de la clase.
const car = new Car("Toyota");

car.drive(); // la ejecución de este método de la clase Car daría como resultado la impresión en controla de "Driving a Toyota"
