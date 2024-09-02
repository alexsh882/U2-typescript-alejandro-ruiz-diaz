/* Clase básica
    Define una clase Car que tenga una propiedad make (marca del coche) de tipo string y un método drive() 
    que imprima un mensaje en la consola diciendo "Driving a [make]". */

    
class Car {
    make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive() {
        console.log(`Driving a ${this.make}`);
    }
}

const car = new Car('Toyota');

car.drive(); // la ejecución de este método de la clase Car daría como resultado la impresión en controla de "Driving a Toyota"