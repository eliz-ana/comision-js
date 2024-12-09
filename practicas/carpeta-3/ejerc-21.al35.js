console.log("hola , mundoo cruel!!");
//
//
//--------------------EJERCICIOS DEL 21 AL 35 ----------------------------------
//.............................................................................................................
//..21   --Usar un bucle for para imprimir los números del 1 al 20, omitiendo los múltiplos de 5.
//.............................................................................................................
/* for (let i = 1; i <= 20; i++) {
  if (i % 5 == 0) {
    continue;
  }
  console.log(i);
} */
//.............................................................................................................
//..22   --Usar un bucle while para imprimir los números del 1 al 15, omitiendo los múltiplos de 3.
//.............................................................................................................
/* let i = 1;
while (i <= 15) {
  if (i % 3 !== 0) {
    console.log(i);
  }

  i++;
} */
//.............................................................................................................
//..23   --Crear un bucle do...while que pida al usuario números y omita los números pares.
//.............................................................................................................
/* let i = 1;
do {
  i = parseInt(
    prompt(
      "ingrese numeros, los numeros pares no seran mostrados en la consola, para cortar ingrese: 0. "
    )
  );
  if (i % 2 !== 0) {
    console.log(i);
  }
} while (i !== 0); */
//.............................................................................................................
//..24   --Usar un bucle for para imprimir los números del 1 al 10, omitiendo el número 7.
//.............................................................................................................
/* for (let i = 1; i <= 10; i++) {
  if (i !== 7) {
    console.log(i);
  }
} */
//.............................................................................................................
//..25   --Crear un bucle while que imprima los números del 1 al 20, omitiendo los números impares.
//.............................................................................................................
/* let i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
} */
//.............................................................................................................
//..26   --Pedir al usuario un número del 1 al 7 e imprimir el día de la semana correspondiente.
//.............................................................................................................
/* let dia = parseInt(prompt("ingrese un numero del 1 al 7"));
if (isNaN(dia)) {
  dia = parseInt(prompt("Debe ingresar un numero del 1 al 7"));
}
switch (dia) {
  case 1:
    console.log("lunes");

    break;

  case 2:
    console.log("Martes");

    break;

  case 3:
    console.log("Miercoles");

    break;

  case 4:
    console.log("Jueves");

    break;

  case 5:
    console.log("Viernes");

    break;

  case 6:
    console.log("Sabado");

    break;
  case 7:
    console.log("Domingo");

    break;

  default:
    console.log("estoy en default ");
    break;
} */
//.............................................................................................................
//..27   --Pedir al usuario una calificación (A, B, C, D, F) e imprimir un mensaje adecuado.
//.............................................................................................................
/* let calificación = 0;
// el do while solo verifica que se ingrese lo solicitado por prompt
do {
  calificación = prompt("ingrese una calificacion (a,b,c,d,e,f)");
  if (!isNaN(calificación)) {
    // si es un numero,avisar por clg que esta mal
    console.log("no puede ingresar un nuemero");
  } else if (
    !["a", "b", "c", "d", "e", "f"].includes(calificación.toLowerCase())
    // en esta verificacion estoy haciendo un array (literal) y con el .includes estoy afirmando que tienen
    // que estar las letras del array...al negar la afirmacion estoy diciendo( si estas letras no estan, volver a
    //ingresar una letra de la A a la F)
  ) {
    console.log("solo se permiten las letras de la A a la F");
  }
} while (
  !isNaN(calificación) ||
  !["a", "b", "c", "d", "e", "f"].includes(calificación.toLowerCase())
);
//ahora hago el switch  para dar una respuesta de la nota
console.log(calificación);
switch (calificación.toLowerCase()) {
  case "a":
    console.log("su nota es excelente !");

    break;
  case "b":
    console.log("su nota es increible !");

    break;
  case "c":
    console.log("su nota es genial !");

    break;
  case "d":
    console.log("su nota es buena !");

    break;
  case "e":
    console.log("su nota es regular !");

    break;
  case "f":
    console.log("su nota es mala, debe esforzarse mas !");

    break;

  default:
    break;
} */
//.............................................................................................................
//..28   --Crear un menú simple usando switch que permita al usuario elegir una opción entre 1 y 3
// e imprimir un mensaje adecuado.
//.............................................................................................................
/* let menu = 0;

do {
  menu = parseInt(prompt("seleccione un plato del 1 al 3: "));
  if (isNaN(menu) || ![1, 2, 3].includes(menu)) {
    console.log("debe ingresar un numero del 1 al 3");
  }
} while (isNaN(menu) || ![1, 2, 3].includes(menu));
switch (menu) {
  case 1:
    console.log("usted selecciono: milanesa con pure");

    break;
  case 2:
    console.log(
      "usted selecciono: raviones de jamon y queso con salsa parisiene"
    );

    break;
  case 3:
    console.log("usted selecciono: picada para compartir ");

    break;

  default:
    break;
}
 */

//.............................................................................................................
//..29   --Pedir al usuario un mes (1-12) e imprimir la estación correspondiente.
//.............................................................................................................
/* let mes;
// primero controlo que se ingrese un nro del 1 al 12
do {
  mes = parseInt(prompt("ingrese un mes en formato numerico (1 al 12)"));
  if (isNaN(mes) || mes < 1 || mes > 12) {
    console.log("debe ingresar un numero del 1 al 12");
  }
} while (isNaN(mes) || mes < 0 || mes > 12);
// aca hago la funcion:
let estacion = (m) => {
  if (m >= 1 && m <= 3) {
    return " selecciono la estacion de verano";
  } else if (m >= 4 && m <= 6) {
    return " selecciono la estacion de otoño";
  } else if (m >= 7 && m <= 9) {
    return " selecciono la estacion de invierno";
  } else if (m >= 10 && m <= 12) {
    return " selecciono la estacion de verano";
  }
};
console.log(estacion(mes)); */
//.............................................................................................................
//..30   --Pedir al usuario que introduzca un carácter y determinar si es una vocal o una consonante.
//.............................................................................................................
/* let letra;
// esta verificacion se deberia hacer con expresiones regulares ya que es incompleta 
//if (!/^[a-z]$/.test(letra)) { ESTA ES LA EXPRESION CORRECTA
 // console.log("Error, debe ingresar una sola letra (a-z)");
do {
  letra = prompt("ingrese una letra por favor").toLowerCase();
  if (!isNaN(letra)) {
    console.log("error, debe ingresar una letra (a-z)");
  }
} while (!isNaN(letra));
// hago la verificacion de vocal o consonante
let verificar = (l) => {
  if (!["a", "e", "i", "o", "u"].includes(l.toLowerCase())) {
    return "a ingresado una consonante : " + l;
  } else {
    return "a ingresado una vocal : " + l;
  }
};
console.log(verificar(letra)); */
//.............................................................................................................
//..31   --Pedir al usuario 5 números y calcular su suma usando un bucle for y prompt.
//.............................................................................................................

/* let suma = 0;
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("ingrese un nro: "));
  suma = suma + numero;
}

console.log("la suma de los numeros ingresados es : " + suma); */
//.............................................................................................................
//..32   --Crear un bucle while que pida al usuario una palabra y termine cuando el usuario introduzca "salir".
//.............................................................................................................
/* let palabra;
do {
  palabra = prompt("ingrese una palabra, si desea terminar ingrese (salir)");
  if (!isNaN(palabra)) {
    console.log(
      "error no se aceptan numeros, si desea finalizar ingrese (salir)"
    );
  }
  console.log("usted ingreso : " + palabra);
} while (!isNaN(palabra) || !["salir"].includes(palabra.toLowerCase())); */
//.............................................................................................................
//..33   --Crear un bucle for que imprima los números del 1 al 50, pero salte los múltiplos de 4 usando continue.
//.............................................................................................................
/* for (let i = 1; i <= 50; i++) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
} */
//.............................................................................................................
//..34   --Crear un bucle while que pida al usuario números y termine si el número introducido es mayor a 100.
//.............................................................................................................
/* let numero = 0;

while (numero <= 100) {
  numero = parseInt(prompt("ingrese un numero inferior a 100"));
  if (numero > 100) {
    console.log("fin del programa");
    continue;
  }
  console.log(numero);
} */
//.............................................................................................................
//..35   --Pedir al usuario un número del 1 al 12 y usar switch para imprimir el nombre del mes correspondiente.
//.............................................................................................................
/* let mes;
do {
  mes = parseInt(prompt("ingrese un mes, en formato numero (1 al 12)"));
} while (isNaN(mes) || mes > 12 || mes < 1);
switch (mes) {
  case 1:
    console.log("ingreso el mes correspondiente a: enero");

    break;
  case 2:
    console.log("ingreso el mes correspondiente a: febrero ");

    break;
  case 3:
    console.log("ingreso el mes correspondiente a: marzo");

    break;
  case 4:
    console.log("ingreso el mes correspondiente a: abril");

    break;
  case 5:
    console.log("ingreso el mes correspondiente a: mayo");

    break;
  case 6:
    console.log("ingreso el mes correspondiente a: junio");

    break;
  case 7:
    console.log("ingreso el mes correspondiente a: julio");

    break;
  case 8:
    console.log("ingreso el mes correspondiente a: agosto");

    break;
  case 9:
    console.log("ingreso el mes correspondiente a: septiembre");

    break;
  case 10:
    console.log("ingreso el mes correspondiente a: octubre");

    break;
  case 11:
    console.log("ingreso el mes correspondiente a: noviembre");

    break;
  case 12:
    console.log("ingreso el mes correspondiente a: diciembre");

    break;

  default:
    console.error("hubo un error ");
    break;
}
console.log(mes); */
//.............................................................................................................
//..30   --
//.............................................................................................................
