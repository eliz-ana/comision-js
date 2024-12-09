console.log("holiiiissss");
//--------------------EJERCICIOS DEL 36 AL 45  ---------------------------------
//
//
//.............................................................................................................
//..36   --Crear un bucle for que imprima los números del 1 al 10 en orden inverso.
//.............................................................................................................
/* for (let i = 10; i > 0; i--) {
  csonole.log(i);
} */
//.............................................................................................................
//..37   --Usar un bucle while para imprimir los números del 10 al 1.
//.............................................................................................................
/* let i = 10;
while (i > 0) {
  console.log(i);
  i--;
} */
//.............................................................................................................
//..38   --Crear un bucle do...while que imprima los números del 5 al 15.
//.............................................................................................................
/* let i = 5;
do {
  console.log(i);
  i++;
} while (i <= 15); */
//.............................................................................................................
//..39   --Usar un bucle for para imprimir los elementos de un array en orden inverso.
//.............................................................................................................
/* let array = [1, 5, 54, 87, 7, 6];
console.log(array.reverse()); */
//.............................................................................................................
//..40   --Crear un bucle while que imprima los números del 1 al 100, pero termine si el número es divisible por 25.
//.............................................................................................................
/* let i = 1;
while (i <= 100) {
  console.log(i);
  if (i % 25 == 0) {
    break;
  }

  i++;
} */

//.............................................................................................................
//..41   --Crear un bucle for que pida al usuario un número del 1 al 5 y use switch para imprimir un mensaje.
//.............................................................................................................
/* let nro;
for (let i = 0; i < 5; i++) {
  nro = parseInt(prompt(" por favor ingrese un nro del 1 al 5 "));
  if (nro <= 5 && nro > 0) {
    switch (nro) {
      case 1:
        console.log("usted ingreso un uno");

        break;
      case 2:
        console.log("usted ingreso un dos");

        break;
      case 3:
        console.log("usted ingreso un tres");

        break;
      case 4:
        console.log("usted ingreso un cuatro");

        break;
      case 5:
        console.log("usted ingreso un cinco");

        break;
      default:
        console.error("debe ingresar 1 al 5");
        break;
    }
    break;
  } else {
    console.error("debe ingresar un nro del 1 al 5!");
  }
  if (i === 4) {
    console.error(" lo siento! se acabaron los intentos");
  }
} */
//.............................................................................................................
//..42   --Crear un bucle while que pida al usuario un número del 1 al 7 y use switch para imprimir el día de la semana.
//.............................................................................................................
/* let i = 0;
while (i == 0) {
  let nro = parseInt(prompt("ingrese un nro del 1 al 7"));
  if (nro >= 1 && nro <= 7) {
    switch (nro) {
      case 1:
        console.log("hoy es dia: Lunes");
        break;
      case 2:
        console.log("hoy es dia: Martes");
        break;
      case 3:
        console.log("hoy es dia: Miercoles");
        break;
      case 4:
        console.log("hoy es dia: Jueves");
        break;
      case 5:
        console.log("hoy es dia: Viernes");
        break;
      case 6:
        console.log("hoy es dia: Sabado");
        break;
      case 7:
        console.log("hoy es dia: Domingo");
        break;

      default:
        console.log("debe ingresar un nro del 1 al 7");
        break;
    }
    i++;
  } else {
    console.log("incorrecto! por favor ingrese un nro del 1 al 7");
  }
} */
//.............................................................................................................
//..43   --Usar un bucle do...while para pedir al usuario una letra y usar switch para determinar
//si es vocal o consonante.
//.............................................................................................................
/* let letra;
//creo un expresion regular que verifica que se ingrese lo solicitado
const regex = /^[a-zA-Z]$/;
do {
  letra = prompt("por favor ingrese una letra.").toLowerCase();

  console.log(letra);
} while (!regex.test(letra));
switch (letra) {
  case "a":
    console.log("ingreso una vocal!");

    break;
  case "e":
    console.log("ingreso una vocal!");

    break;
  case "i":
    console.log("ingreso una vocal!");

    break;
  case "o":
    console.log("ingreso una vocal!");

    break;
  case "u":
    console.log("ingreso una vocal!");

    break;

  default:
    console.log("ingreso una consonante!");
    break;
} */
//.............................................................................................................
//..44   --Crear un bucle for que imprima los números del 1 al 20 y use switch para imprimir un mensaje
// si el número es divisible por 4.
//.............................................................................................................
/* let control;
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    control = "verdad";
  } else {
    console.log(i);
    control = "falso";
  }
  switch (control) {
    case "verdad":
      console.log(i + " el numero es divisible por 4!");
      break;

    default:
      break;
  }
} */
//.............................................................................................................
//..45   --Crear un bucle while que pida al usuario una calificación (A, B, C, D, F) y use switch para
//imprimir un mensaje adecuado.
//.............................................................................................................
/* let nota = "";
while (!["a", "b", "c", "d", "e", "f"].includes(nota.toLowerCase())) {
  nota = prompt("por favor ingrese su calificacion (a-f)");
}
switch (nota.toLowerCase()) {
  case "a":
    console.log("su nota es: 10!");

    break;
  case "b":
    console.log("su nota es: 8");

    break;
  case "c":
    console.log("su nota es: 7");

    break;
  case "d":
    console.log("su nota es: 6");

    break;
  case "e":
    console.log("su nota es: 4");

    break;
  case "f":
    console.log("su nota es: 1!");

    break;
} */

//.............................................................................................................
//..46   --
//.............................................................................................................
