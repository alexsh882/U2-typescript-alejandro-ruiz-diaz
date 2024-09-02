# EJERCICIOS PRÁCTICOS DE FUNDAMENTOS DE TYPESCRIPT

## Crear un directorio con el nombre U2-typescript-nombre_apellido (no usar mayúsculas salvo “U2”) y resolver cada ejercicio en un archivo diferente

1. **Tipos básicos:**
Declara una variable age de tipo número y asígnale un valor. Luego, declara una variable name de tipo string y asígnale un valor.

2. **Union types**
Declara una variable status que pueda ser de tipo string o número. Asígnale diferentes valores para probar ambos tipos.

3. **Interfaz básica**
Crea una interfaz Person con las propiedades firstName (string) y lastName (string). Declara una variable person de tipo Person y asígnale un objeto con tu nombre y apellido.

4. **Interfaz opcional**
Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName sea opcional. Declara un objeto que solo incluya firstName.

5. **Función con tipado**
Escribe una función add que acepte dos números como argumentos y devuelva su suma. Asegúrate de tipar adecuadamente los parámetros y el valor de retorno.

6. **Tipado en funciones**
Crea una función greet que tome un argumento name de tipo string y devuelva una frase de saludo usando ese nombre.

7. **Clase básica**
Define una clase Car que tenga una propiedad make (marca del coche) de tipo string y un método drive() que imprima un mensaje en la consola diciendo "Driving a [make]".

8. **Clase con constructor**
Añade un constructor a la clase Car que inicialice la propiedad make. Crea una instancia de Car con una marca y llama al método drive().

9. **Clase con propiedades privadas**
Modifica la clase Car para que la propiedad make sea privada. Añade un método getMake() que devuelva el valor de make.

10. **Herencia de clases**
Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional batteryLife (vida de la batería) de tipo número. Añade un método charge() que imprima un mensaje diciendo que el coche se está cargando.

11. **Interface y clases**
Crea una interfaz Shape que tenga un método area() que devuelve un número. Luego, crea una clase Circle que implemente esta interfaz y calcule el área de un círculo.

12. **Tipos literales**
Crea una variable direction que solo pueda tener uno de los siguientes valores: "up", "down", "left", "right".

13. **Enum**
Declara un enum Color con los valores "Red", "Green", y "Blue". Crea una función que tome un argumento de tipo Color y devuelva un mensaje con el color.

14. **Type assertions**
Declara una variable de tipo any con un valor numérico y usa una aserción de tipo para tratarla como un string. Usa la propiedad “.length” en esta variable.

15. **Genéricos (básico)**
Escribe una función genérica identity que tome un argumento de tipo T y devuelva el mismo valor. Usa esta función con diferentes tipos de datos.
