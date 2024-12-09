console.log("hola mundo, hola mundo ,hola");

//..
//..
//..
//..------------    ----EJERCICIOS DEL 14 AL 20 -------    ------------
//
//....................................................................................................................
//..14    --Crea una variable llamada hora y asígnale un valor numérico que represente una hora del día.
// Luego, utilizando un if else, imprime un mensaje que indique si es mañana, tarde o noche.

//....................................................................................................................
/* let hora = 23;

function momentoDelDia(hora) {
  if (hora > 5 && hora < 12) {
    console.log("es de mañana");
  } else if (hora > 12 && hora < 19) {
    console.log("es la tarde");
  } else if (hora > 19 && hora < 24) {
    console.log("es noche ");
  }
}
let llamado = momentoDelDia(hora); */
//
//....................................................................................................................
//..16    --Crea una variable llamada nombreUsuario y asígnale un nombre. Luego, verifica si el nombre tiene más
// de 6 caracteres e imprime un mensaje correspondiente.
//....................................................................................................................
/* let nombreUsuario = "cerrutti";

let texto;

for (let i = 0; i < nombreUsuario.length; i++) {
  texto = i + 1;
}
if (texto > 6) {
  console.log("el nombre tiene mas de 6 caracteres ");
} else {
  console.log("el texto tiene 6 o menos caracteres");
} */
//....................................................................................................................
//..18   --Pide al usuario que ingrese su nombre utilizando prompt, luego verifica si comienza con la
// letra "A" o "a" e imprime un mensaje correspondiente.
//....................................................................................................................
/* let nombre = prompt("ingrese su nombre");
function chequeoDeA(nombre) {
  if (nombre[0] === "a" || nombre[0] == "A") {
    return "su nombre comienza con a";
  } else {
    return "su nombre no comienza con a";
  }
}
let result = chequeoDeA(nombre);
console.log(result); */
//....................................................................................................................
//..19   --Declara una variable llamada temperatura y asígnale un valor numérico que represente la
//temperatura actual. Luego, utilizando un if, imprime un mensaje que indique si hace frío, templado o caliente.
//....................................................................................................................
/* let temp = 23;
function tempeture(temp) {
  if (temp >= 27) {
    console.log("hace calor");
  } else if (temp < 27 && temp > 10) {
    console.log("esta templado ");
  } else if (temp < 10) {
    console.log("esta frio");
  }
}
let mostrarTemp = tempeture(temp); */
//....................................................................................................................
//..20   --Pide al usuario que ingrese tres números utilizando prompt, luego verifica si la suma de los
//dos primeros números es igual al tercer número e imprime un mensaje correspondiente.
//....................................................................................................................
/* let nro1 = parseInt(prompt("ingrese un número"));
let nro2 = parseInt(prompt("ingrese un número"));
let nro3 = parseInt(prompt("ingrese un número"));
function suma(a, b, c) {
  if (a + b === c) {
    console.log("entre al if");
  } else {
    console.log("estoy en el else");
  }
}
let resultSuma = suma(nro1, nro2, nro3); */
//....................................................................................................................
