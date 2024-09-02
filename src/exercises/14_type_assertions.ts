/* Type assertions
Declara una variable de tipo any con un valor numérico y usa una aserción de tipo para tratarla como un string. 
Usa la propiedad “.length” en esta variable. */

const valueNumber: any = 10;

const numberAsString: string = valueNumber as string;

const numberAsString2: string = <string>valueNumber;

const lengthOfString: number = numberAsString.length;

const lengthOfString2: number = numberAsString2.length;