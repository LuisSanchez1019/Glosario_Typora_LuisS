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