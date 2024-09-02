/* Interfaz opcional
Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName sea opcional. 
Declara un objeto que solo incluya firstName. */

// Declaro una interfaz Person con las propiedades que usaré como contrato para los objetos o clases que la implementen.
interface IPerson {
  firstName: string;
  lastName?: string;
}

/* Declaro una variable person de tipo Person y le asigno un objeto con mi nombre y apellido.
      Mi objeto respetará la interface IPerson, es decir los atributos declarados, 
      pero no es necesario que incluya todos los atributos de la interfaz.
      En este caso, solo incluyo el atributo firstName, ya que lastName es opcional.
      */
let person: IPerson = {
  firstName: "Alejandro",
};

console.log(person);
