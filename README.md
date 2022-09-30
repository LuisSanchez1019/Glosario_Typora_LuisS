# ForeEach

El bucle **foreach** es un tipo especial de bucle que permite recorrer estructuras que contienen varios elementos (como matrices, recursos u objetos) sin necesidad de preocuparse por el número de elementos.

``

```javascript
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```

# Map

Map llama a la función callback provista **una vez por elemento** de un array, en orden, y construye un nuevo array con los resultados. `callback` se invoca sólo para los índices del array que tienen valores asignados; no se invoca en los índices que han sido borrados o a los que no se ha asignado valor.

```javascript
var numeros= [1, 4, 9];
var raices = numeros.map(Math.sqrt);
// raices tiene [1, 2, 3]
// numeros aún mantiene [1, 4, 9]
```

# Filter

`filter llama a la función `callback` sobre cada elemento del array, y construye un nuevo array con todos los valores para los cuales `callback` devuelve un valor verdadero. `callback` es invocada sólo para índices del array que tengan un valor asignado. No se invoca sobre índices que hayan sido borrados o a los que no se les haya asignado algún valor. Los elementos del array que no cumplan la condición `callback` simplemente los salta, y no son incluidos en el nuevo array.



```javascript
function esSuficientementeGrande(elemento) {
  return elemento >= 10;
}
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
// filtrados es [12, 130, 44]
```

# Sherh

Cuando se desee saber en qué casos un patrón se encuentra en una cadena de texto utiliza `search()` (si sólo deseas saber si existe, utiliza el método [`test()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) del prototipo de `RegExp`); para más información (pero de ejecución más lenta) utiliza [`match()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/match) (similar al método [`exec()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) de las expresiones regulares).



```javascript
function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
  console.log(str + midstring + re);
}
```

# Iteracion

En JavaScript los bucles (loops) **son utilizados para realizar tareas repetitivas con base en una condición**. Las condiciones típicamente devuelven true (verdadero) o false (falso) al ser evaluados. El bucle continuará ejecutándose hasta que la condición devuelva false



```javascript
for (let step = 0; step < 5; step++) {
  // Se ejecuta 5 veces, con valores del paso 0 al 4.
  console.log('Camina un paso hacia el este');
}
```

# Closures

Una clausura o *closure* es una función que guarda referencias del estado adyacente (**ámbito léxico**). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.



```javascript
function iniciar() {
  var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
    alert(nombre);  // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();
```

# Funciones

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento  un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.



```javascript
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

[parcial]var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x obtiene el valor "Honda"

myFunc(mycar);
y = mycar.make; // y obtiene el valor "Toyota"
                // (la propiedad make fue cambiada por la función)
```

# Que son los Separadores de emascrip

¿Cómo agregar separador de miles en JavaScript?

Puedes usar la biblioteca de **javascript** autoNumeric que hace justo lo que requieres con múltiples opciones de configuración. Por defecto usa como **separador de miles** la , , como **separador** decimal el punto . y usa 2 decimales. En tu caso solo necesitarías establecer la opción de 3 decimales con decimalPlaces



```js
let myNumericInput = new AutoNumeric('.myInput',{decimalPlaces: 3});

document.querySelector('.myInput').addEventListener('keyup',() =>{
  console.log(myNumericInput.getNumber())
})
<script src="https://cdn.jsdelivr.net/npm/autonumeric@4.5.4"></script>
 <input type="text" class="myInput">
```

# Funciones flecha

¿Cómo llamar una función flecha JavaScript?

Se llama “**funciones** de **flecha**”, porque se ve así: let func = (arg1, arg2, ..., argN) => expression; Esto crea una **función** func que acepta los parámetros arg1.. argN , luego evalúa la expression del lado derecho mediante su uso y devuelve su resultado



```javascript
// Función tradicional
function (a, b){
  return a + b + 100;
}

// Función flecha
(a, b) => a + b + 100;

// Función tradicional (sin argumentos)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Función flecha (sin argumentos)
let a = 4;
let b = 2;
() => a + b + 100;
```

# Funcion expresiva

 La función expresiva **es una variable que contiene adentro una función**. Luego, siendo variable, la función podría alterarse, sustituirse, cambiar dentro de la memoria.



```javascript
function respuesta(){
}

console.log(respuesta());    // => undefined

function respuesta2(){
     return 'Hola';
}

console.log(respuesta2());   // => Hola
```



# Funciones delcaradas

En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar







