// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
return array[0];
}



function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
return array [array.length - 1];
}




function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return array.length;
}



function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let entero = [];  // definimos un arreglo vacío
 for (let i = 0; i < array.length; i ++) {  // i comeinza en 0 y va hasta el largo del arreglo,se incrementa de 1 en 1
  entero[i] = array[i] + 1; //el arreglo vacío es igual al array + 1
 }
 
 return entero;  // devolvemos el arreglo 

}



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 array.push(elemento);
 return array;
}



function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift(elemento);
return array;
}



function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
return palabras.join(' '); //devolver una sola frase, separada por espacios en este caso.

}
/* el join une todas las palabras con lo que pongas entre comiilas ej ' ' -> es un espacio. 
o ' , ' -> es una coma.
*/



function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
for (var i = 0; i < array.length; i++) {  // i comienza en 0 y recorre toda la longitud del array, agregandose de uno en uno
  if(array[i] === elemento) // si el elemento existe dentro del array o si es igual a el, devuelve verdadero.
  return true;
}
return false; // si no falso.
}





function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
 var enteros = 0;
 for (var i = 0; i < numeros.length; i++) {   // i comienza en 0 y recorre toda la longitud del array, agregandose de uno en uno
  enteros = enteros + numeros[i]; // sumamos todos los enteros, sumando enteros + los numeros de i.
 
 } 
 return enteros;
}





function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
 return agregarNumeros(resultadosTest) / resultadosTest.length; 
}
/* Utilizaremos el nombre de la funcion del ejercicio anterior (agregarNumeros), ya que en el ejercicio anterior se pedia una 
suma de todos los valores. En este se pide el pormedio de todos los valores. EL PROMEDIO ES LA SUMA DE TODOS LOS ELEMENTOS
Y EL RESULTADO DE ESA SUMA DIVIDIRLO ENTRE LA CANTIDAD DE ELEMENTOS. por lo que ya tenemos el resultado de una suma anterior,
 y solo queda dividirlo ( / ) entre la cantidad de elementos que sería el largo del array (resultadosTest.length) */





function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
var max = numeros[0];
for (var i = 1; i < numeros.length; i++) {
  if(numeros[i] > max) {
    max = numeros[i];
  }
}
return max;
}
/* Vamos a tener una variable q se llame max, que va a ser mi numero , como no sabemos su valor,
 vamos a asumir que el primer elemento, osea el 0 . Entonces con el bucle for vamos a empezar a compararlo y recorrelo, para ver 
 si i es mas grande, si es mas grande i que el maximo  entonces con la condicion if vamos a preguntar que si numeros  i es mas
  grande que max, pase a valer lo mismo numeros y max, y retorne el maximo  */




function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0 ) return 0;
  var numeros = 1; // debemos poner 1, porque si ponemos 0 no podremos multiplicarlo ya que daria 0 siempre
  for (var i = 0; i < arguments.length; i++) {
    numeros = numeros * arguments[i];
  }
   return numeros;
}
/*Si el argumento es igual a 0, retorno 0*/




function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let elementos = [];
for (var i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > 19) {
  elementos ++
    } 
  }
return elementos;
}




function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana";
  }
  return "Es dia Laboral";
} 





function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num1 = n.toString() // convertimos la variable en string
  if(num1[0] === "9"){  // la variable es igual a todo aquel numero que tenga un string '9' en primer lugar.
    return true
  }
  return false

}
/*La lógica del problema es que todo aquel numero que comience con 9, por ejemplo 9, 90, 950, 95, 93, etc  deben devolver verdadero
de lo contrario devolver falso*/





function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
for( var  i = 0; i < arreglo.length -1; i++) { //no vamos a ir al 
 if(arreglo[i]  === arreglo[i + 1]) return true;
}
return false;
} 
/*En la condicion del arreglo, si un elemento es igual al siguiente elemento, osea: (i+1) retorna true, si no false. Por ejemplo:
si tengo un arreglo con: [1,2,3] y el 1 es igual que el 2, es true, pero como no lo es es false.*/




function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];
 for (var i = 0; i < array.length; i++) {
  if( array[i] === 'Enero' || array[i] === 'Marzo' ||array[i] === 'Noviembre' ) {
    meses.push(array[i]);
  }
 }
 if(meses.length < 3) {
  return 'No se encontraron los meses pedidos'
 }
 else {
  return meses;
 }
}
/*En este ejercicio preguntamos si donde estoy parado osea (array[i]), se encuentra con algunos de estos 3 meses, lo va a pushear
dentro del array, osea lo va a guardar dentro del arreglo meses.  Luego vamos a preguntar si la longitud de meses es menor a 3 
retornaremos no se econtraron los meses pedidos, ya que los 3 meses tienen q estar dentro del arreglo si o si.*/




function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var enteros = [];
for(var i = 0; i < array.length; i++) {
  if(array[i] > 100 )  {
    enteros.push(array[i])
  }
  
 }
  return enteros;
}

/*Creamos un array vacio, luego lo recorremos, y si donde estoy parado es mayor a 100, lo agregaremos el array enteros, y 
retornaremos el nuevo arreglo.*/




function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var array = [];
var suma = numero;
for (var i = 0; i < 10; i++) {
  suma = suma + 2
  if(suma === i) break
  else {
    array.push(suma);
    }
  }
  if( i < 10){
  return 'Se interrumpió la ejecución';
  } else {
  return array;
  }   
}

/* numero es un arreglo que tendrá numeros, entonces debemos recorrer el arreglo sumandole 2 al numero que recibamos, sólo 
hasta un limite de 10 veces. Cada vez que sumemos 2 a un numero tenemos que guardarlo en un nuevo array.
 Siempre iremos sumando hasta q sea menor a 10, si no se va a cortar. Entonces a la variable suma le vamos a ir
 sumandole de a 2. Si en algun momento suma llega a ser igual a i, ponemos break, osea cortamos la ejecución.
  */




function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for (var i = 0; i < 10 ; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2
      array.push(suma);
      }
    }
   
    return array;
      
    } 

/*Comenzamos agregando un arreglo vacio y una variable, recorremos el arreglo con la condicion de que cuando i sea igual
a 5 "continue" quiere decir que pega un salto e ignorariamos la iteracion 5. Luego  */

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};