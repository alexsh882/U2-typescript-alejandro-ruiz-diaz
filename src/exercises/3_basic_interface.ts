/* Interfaz básica
Crea una interfaz Person con las propiedades firstName (string) y lastName (string). 
Declara una variable person de tipo Person y asígnale un objeto con tu nombre y apellido.*/

// Declaro una interfaz Person con las propiedades que usaré como contrato para los objetos o clases que la implementen.
interface IPerson {
  firstName: string;
  lastName: string;
}

/* Declaro una variable person de tipo Person y le asigno un objeto con mi nombre y apellido.
    Mi objeto respetará la interface IPerson, es decir los atributos declarados, 
    en caso de asignarle un atributo diferente, por ejemplo "LastNames" arrojará el siguiente error
    'El literal de objeto solo puede especificar propiedades conocidas,
    pero "lastNames" no existe en el tipo "IPerson"' */
let person: IPerson = {
  firstName: "Alejandro",
  lastName: "Ruiz Diaz",
};

console.log(person);
