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