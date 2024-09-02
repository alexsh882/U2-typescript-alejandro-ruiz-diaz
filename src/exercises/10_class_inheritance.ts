/* Herencia de clases
Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional batteryLife (vida de la batería) de tipo número. 
Añade un método charge() que imprima un mensaje diciendo que el coche se está cargando. */

import Car from "./9_class_with_private_attributes";


class ElectricCar extends Car {
  batteryLife: number;

  constructor(make: string, batteryLife: number) {
    super(make);
    this.batteryLife = batteryLife;
  }

  charge() {
    console.log('El coche se está cargando...');
  }
}

const electricCar = new ElectricCar('Tesla', 80);

electricCar.drive();
electricCar.charge(); // esto daría como resultado la impresión en consola de "El coche se está cargando..."