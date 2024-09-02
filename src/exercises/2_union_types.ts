/* Union types
Declara una variable status que pueda ser de tipo string o número. 
Asígnale diferentes valores para probar ambos tipos. */


// 1. declaro la variable como let para poder probar diferentes valores.
// le coloque el nombre status1 por que me daba error "No se puede volver a declarar la variable con ámbito de bloque 'status'."
let status1: string | number; 

// asigno un valor de tipo string a la variable status1
status1 = "success";


// reasigno un valor de tipo number a la variable status1

status1 = 200;

/* como la variable status1 permite la asignación de los tipos string y number
no me dará error al asignarle un valor de tipo number. */

