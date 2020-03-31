/*Javascript ES6, today is the day....*/

// ECMAScript o ES, es un conjunto de especificaciones que salen año tras año.
// ECMAScript6 o ES2015, fue el conjunto de features más grande hasta el momento.


/*
1) Const y Let (Block Scope)
2) Arrow Functions
3) Modules (Imports and Exports)
4) Template Literals
5) Classes (Constructor, Super, Setters and Getters)
6) Default Parameters
7) The Spread Operator
8) Destructuring
9) Prototype
10) map(), filter(), reduce() 
11) Promesas, Async/Await
*/

// 1) Const y Let (Block Scope)

/* ------------------------------------------------------------------------------------------------------------------------*/

// EJERCITACION;

/*Crear un archivo main.js con los siguientes puntos y completar debajo de cada enunciado.
Los valores de cada punto se deben mostrar con un console.log() especificando el dato que se muestra con un enunciado ej:
console.log('1 - El promedio es:', miPromedio);
Completar esta tarea con el link a github */

const alumnos = [
    { nombre: 'Rodrigo Andrade', edad: 23 },
    { nombre: 'Nayla Arroyo Lizzio', edad: 32 },
    { nombre: 'Marianela De Martino', edad: 20 },
    { nombre: 'Axel Julian Dumas Cutuli', edad: 19 },
    { nombre: 'Martina Franco', edad: 22 },
    { nombre: 'Agustina Garcia Vega', edad: 24 },
    { nombre: 'María Agustina Mattioli Pacheco', edad: 19 },
    { nombre: 'Franco Picco', edad: 33 },
    { nombre: 'Alva Ramírez', edad: 27 },
    { nombre: 'Diego Salischiker', edad: 29 },
]


// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()
// 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()
// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
// 4. Obtener en una constante la edad de "Franco Picco" usando .find() ( Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find ) y destructuring del resultado. Investigar método includes
// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
// 6. Obtener un array con aquellos alumnos que empiezan con la letra "M", usando .filter()
// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()
// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos


//Async/Await

// 9. Buscar una API que más te guste en https://github.com/toddmotto/public-apis pero que debajo de la columna Auth especifique "No"
// 10. Implementar una función getDataWithPromises que utilice la API de Promises usando .then() (investigar)
// 11. Implementar una función getDataWithAsync que utilice async / await junto con la API fetch para buscar los datos de la API elegida
// 12. Hiciste manejo de errores? En caso que no lo hayas hecho utiliza .catch() en la función getDataWithPromises o try / catch en la función getDataWithAsync
// 13. Si te animás un poco más mostra los datos que trajiste en el elemento div con id "content". En caso que sea un array podés iterar usando .forEach() o .map(). Para ello debes investigar y usar alguna de las siguientes APIs del DOM: querySelector(), innerHTML, textContent */