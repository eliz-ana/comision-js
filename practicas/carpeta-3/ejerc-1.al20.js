console.log("hola,como estas?");
//..

//..
//--------------------EJERCICIOS DEL 1 AL 20 ----------------------------------

//..
//.............................................................................................................
//..1   --Imprimir los números del 1 al 10 usando un bucle for.
//.............................................................................................................
/* for (let i = 0; i < 10; i++) {
  console.log(i + 1);
} */
//.............................................................................................................
// ..2   --Sumar los números del 1 al 100 y mostrar el resultado usando un bucle for.
//.............................................................................................................

/* let suma = 0; // Inicializamos una variable para acumular la suma
for (let i = 1; i <= 100; i++) {
  // Recorremos los números del 1 al 100
  suma += i; // Sumamos el valor de i a la variable suma
}
console.log("La suma de los números del 1 al 100 es:", suma); */

//.............................................................................................................
//..3   --Imprimir los números pares del 1 al 20 usando un bucle for.
//.............................................................................................................
/* for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */
//.............................................................................................................
//..4   --Crear un bucle for que pida al usuario 5 números y calcule su suma.
//.............................................................................................................
/* let numeros = [];
let nro,
  suma = 0;
for (let i = 0; i < 5; i++) { //bucle para crear un array con los prompt
  nro = parseInt(prompt("ingrese un numero"));
  numeros.push(nro);
}
console.log(numeros);
function sumarNumeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }
  return suma;
}

let callSumar = sumarNumeros(numeros);
console.log(callSumar); */

//.............................................................................................................
//..5   --Imprimir los elementos de un array usando un bucle for.
//.............................................................................................................
/* let array = [2, 4, 5, 7, 8];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
} */
//.............................................................................................................
//..6   --Imprimir los números del 1 al 10 usando un bucle while.
//.............................................................................................................
/* let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */
//.............................................................................................................
//..7   --Sumar los números del 1 al 50 y mostrar el resultado usando un bucle while.
//.............................................................................................................
/* let i = 1;
let suma = 0;
while (i <= 50) {
  suma = suma + i;
  i++;
}
console.log(suma); */
//.............................................................................................................
//..8   --Imprimir los números impares del 1 al 20 usando un bucle while.
//.............................................................................................................
/* let i = 1;
while (i <= 20) {
  if (!(i % 2 == 0)) {
    console.log(i);
  }
  i++;
} */
//.............................................................................................................
//..9   --Crear un bucle while que pida al usuario números hasta que introduzca un número negativo.
//.............................................................................................................
/* let numerosPositivos = parseInt(prompt("ingresa numero positivo"));
while (numerosPositivos >= 0) {
  numerosPositivos = parseInt(prompt("ingrese otro numero"));
}
console.log("ingreso un numero negativo"); */
//.............................................................................................................
//..10   --Contar el número de veces que el usuario introduce "hola" usando un bucle while.
//.............................................................................................................
/* let hola = prompt("ingrese : Hola");
let contador = 0;
while (hola.toLowerCase() === "hola") {
  contador += 1;
  hola = prompt("vuelva a ingresar hola");
}
console.log("se ingreso la palabra Hola : " + contador + " veces."); */
//.............................................................................................................
//..11   --Imprimir los números del 1 al 10 usando un bucle do...while.
//.............................................................................................................
/* let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10); */
//.............................................................................................................
//..12   --Sumar los números del 1 al 30 y mostrar el resultado usando un bucle do...while.
//.............................................................................................................
/* let suma = 0;
let i = 1;
do {
  suma += i;
  i++;
} while (i <= 30);
console.log("la suma de los nros del 1 al 30 es: " + suma); */
//.............................................................................................................
//..13   --Imprimir los múltiplos de 3 del 1 al 30 usando un bucle do...while.
//.............................................................................................................
/* let i = 1;
do {
  if (i % 3 == 0) {
    console.log(i);
  }
  i++;
} while (i <= 30); */
//.............................................................................................................
//..14   --Crear un bucle do...while que pida al usuario números hasta que introduzca el número 0.
//.............................................................................................................
/* let numeros = 1;
do {
  numeros = parseInt(
    prompt("ingrese un numero, si quiere finalizar ingrese 0")
  );
} while (numeros < 0 || numeros > 0); */
//.............................................................................................................
//..15   --Contar el número de intentos hasta que el usuario adivine un número secreto usando un bucle do...while.
//.............................................................................................................
/* let nroSecreto = 22;
let numero = 0;
let contador = 0;
do {
  numero = parseInt(prompt("ingrese un numero y adivine el correcto"));
  contador++;
} while (numero !== nroSecreto);
console.log("usted tuvo: " + contador + " intentos."); */
//.............................................................................................................
//..16   --Usar un bucle for para encontrar el primer número mayor a 50 en un array y salir del bucle.
//.............................................................................................................
/* let array = [34, 2, 5, 56, 8, 9];
let contador = 0; // lo agregue solo para ver que estuviera funcionando correctamente
for (let i = 0; i < array.length; i++) {
  if (array[i] < 50) {
    contador++;
  } else {
    break;
  }
}
console.log(contador); */
//.............................................................................................................
//..17   --Usar un bucle while para encontrar el primer número impar mayor a 10 y salir del bucle.
//.............................................................................................................

//.............................................................................................................
//..18   --Crear un bucle do...while que pida números al usuario y salga cuando el usuario introduzca
// un número negativo.
//.............................................................................................................
//.............................................................................................................
//..19   --Imprimir los números del 1 al 100, pero detenerse si el número es divisible por 37.
//.............................................................................................................
/* for (let i = 1; i <= 100; i++) {
  if (i % 37 == 0) {
    continue;
  }
  console.log(i);
} */
//.............................................................................................................
//..20   --Usar un bucle for para imprimir los números del 1 al 20, pero detenerse si se encuentra el número 13.
//.............................................................................................................
/* for (let i = 1; i <= 20; i++) {
  if (i == 13) {
    break;
  }
  console.log(i);
} */
//.............................................................................................................
//..20   --
//.............................................................................................................
