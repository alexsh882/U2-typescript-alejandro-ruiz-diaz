
/* Clase básica
    Define una clase Car que tenga una propiedad make (marca del coche) de tipo string y un método drive() 
    que imprima un mensaje en la consola diciendo "Driving a [make]". */
 
// Defino la clase Car con una pública propiedad make de tipo string y un método drive que imprime un mensaje en la consola.
class Car {
    public make: string = 'Unknown make';    
    drive() {
        console.log(`Driving a ${this.make}`);
    }
}

// Creo una instancia de la clase Car.
const car = new Car();

// asigno un valor a la propiedad pública make de la instancia car.
car.make = 'Toyota';

car.drive(); // la ejecución de este método de la instancia "car" daría como resultado la impresión en controla de "Driving a Toyota"