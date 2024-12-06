console.log("hola");

/*  tengo que hacer 3 funciones separadas: entrada, proceso y salida
Ejercicio: Calculadora de promedio de notas
Consignas:
Crear una función que solicite los datos de entrada:
La función debe pedir al usuario ingresar una lista de notas separadas por comas (por ejemplo: "7, 8, 9, 10").

Crear una función que procese la información obtenida:
Esta función debe:

Convertir las notas de texto a números.
Calcular el promedio de las notas.
Crear una función para mostrar el resultado final:
Esta función debe mostrar un mensaje indicando el promedio calculado, con un formato amigable.
Por ejemplo: "El promedio de las notas ingresadas es: 8.5".

Requisitos adicionales:
Validar que las notas ingresadas sean números válidos (entre 0 y 10).
Manejar errores si el usuario no ingresa datos o ingresa datos no válidos.
 */
let notas = [];

// pido las notas con los controles necesarios
let getPromedio = () => {
  let continuar;
  let n;
  do {
    n = prompt(" por favor ingrese la nota.");
    // controlo que no este vacio:
    if (n === "") {
      console.log("ingrese un dato valido");
      continue; //con esto hago que no corra nada mas
    }
    // paso el ingreso a number
    n = parseInt(n);
    //si n es un nro y es 0 al 10 hago el push
    if (!isNaN(n) && n >= 0 && n <= 10) {
      notas.push(n);
      continuar = confirm("quiere agregar otra nota?");
    } else {
      console.log("debe ingresar un numero entre el 0 y 10");
      continuar = true;
    }
  } while (continuar);
  console.log("las notas agregadas son: " + notas);
};

//hago el calculo de sumar las notas y devolver un total
let setPromedio = (nota) => {
  let suma = 0;
  let total;
  for (let i = 0; i < nota.length; i++) {
    suma = suma + nota[i];
  }
  total = suma / nota.length;
  parseFloat(total);
  return total;
};

//paso el resultado final con dos digitos al final y lo muestro
let showPromedio = (total) => {
  let promedio = total.toFixed(2);
  console.log("el promedio de sus notas es: " + promedio);
};
// ahora hay que hacer los llamados y hay que validar que el array tenga notas
// para no correr las otras funciones sin datos
getPromedio();
if (notas.length > 0) {
  // si el array tiene notas :
  let total = setPromedio(notas); //  llamo y asigno el resultado de setpromedio a TOTAL
  showPromedio(total); // aca llamo la funcion y le paso TOTAL de param
} else {
  console.error("no se puede realizar el calculo sin notas ");
}
