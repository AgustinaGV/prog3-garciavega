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

console.log(alumnos);

// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()

// Funcion declarada normalmente;
/*function mostrarNombreAlumnos(alumnos) {
    return alumnos.nombre;
}*/

// Arrow Function;
const mostrarNombreAlumnos = (alumnos) => {
    return alumnos.nombre;
}

// .map llama a la misma funcion para cada array del objeto alumnos, por lo que SIEMPRE necesita que se le pase un parametro;
const nombreAlumnos = alumnos.map(mostrarNombreAlumnos);
nombreAlumnos.toString();
// Imprimo en pantalla rta ejercicio 1;
console.log('1- Los nombres de los alumnos son: ', nombreAlumnos);

// 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()

// Funcion declarada normalmente;
/*function filtrarAlumnosEdad (alumnos) {

    return alumnos.edad > 25;
}*/

// Arrow Function;
const filtrarAlumnosEdad = (alumnos) => {
    return alumnos.edad > 25;
}

const alumnosMayores = alumnos.filter(filtrarAlumnosEdad);
// Imprimo en pantalla rta ejercicio 2;
console.log('2- Los alumnos mayores de 25 años son: ', alumnosMayores);

// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)

// Funcion declarada normalmente;
/*function sumaEdades (total, alumno) {
    return total + alumno.edad;
}
let sumaEdadAlumnos = alumnos.reduce(sumaEdades(total, alumno), 0);*/

const sumaEdadAlumnos = alumnos.reduce(function (total, alumno) {
    return total + alumno.edad;
}, 0);
// Imprimo en pantalla rta ejercicio 3;
// Resultado esperado 23 + 32 + 20 + 19 + 22 + 24 + 19 + 33 + 27 + 29 = 248;
console.log('3- La suma de las edades de todos los alumnos es igual a: ', sumaEdadAlumnos);

// 4. Obtener en una constante la edad de "Franco Picco" usando .find() ( Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find ) y destructuring del resultado. Investigar método includes

// Includes;
// da 'false' pero porque no estoy sabiendo como hacer para buscar en los objetos DENTRO del array 'alumnos';
//console.log(alumnos.includes(33));

// Funcion declarada normalmente;
/*function buscarEdadFranco (alumnos) {
    return alumnos.edad === 33;
};*/

// Arrow Function;
const buscarEdadFranco = (alumnos) => {
    return alumnos.edad === 33;
};

let [FrancoPicco] = [alumnos.find(buscarEdadFranco)];
let [edadFrancoPicco] = [FrancoPicco.edad];
console.log('4- Constante con datos de Franco Picco: ', FrancoPicco);
// Imprimo en pantalla rta del ejercicio 4;
console.log('4 bis- Bueno, solo con la edad: ', edadFrancoPicco);

// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también

const [primerAlumno] = [alumnos[0]];
// Imprimo en pantalla rta del ejercicio 5 (constante con todos los datos del primer alumno);
console.log('5- Constante con datos del primer alumno: ', primerAlumno); 
const [primerAlumnoNombre] = [primerAlumno.nombre];
// Imprimo en pantalla rta bis del ejercicio 5 (constante que contiene solamente el nombre del primer alumno);
console.log('5 bis- Constante con el nombre primer alumno: ', primerAlumnoNombre);

// 6. Obtener un array con aquellos alumnos que empiezan con la letra "M", usando .filter()

// Funcion declarada normalmente;
/*function alumnosConM (alumnos) {
    return alumnos.nombre.startsWith('M');
}*/

// Arrow Function;
const alumnosConM = alumnos.filter((alumnos) => {
    return alumnos.nombre.startsWith('M');

});
// Imprimo en pantalla rta del ejercicio 6;
console.log('6- Los alumnos cuyos nombres empiezan con la letra "M" son:', alumnosConM);


// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()
 
// Declaro array que tiene las nuevas comidas favoritas;
let comidas = ["Fideos con tuco", "Pizza", "Papas fritas", "Milanesa napolitana", "Pastel de papas", "Omelette", "Shawarma", "Sushi", "Empanadas", "Ensalada rusa"];

// Arrow Function;
// IMPORTANTISIMO PORQUE FIJA ME OLVIDO: paso como parametro 'alumnos' e 'i'. Como .map pasa por cada uno de los elementos del array, el parametro alumnos le da la data para ver QUE va a 'evaluar' o 'revisar'. Entonces uso 'i' como CONTADOR, que va a ir aumentando a medida que aumente el index del array alumnos;
const comidasFavoritas = alumnos.map((alumnos, i) => {
    alumnos.comida = comidas[i];

    return alumnos.comida;
})

//Imprimo en pantalla rta del ejercicio 7;
console.log('7- Ahora sabemos la comida favorita de los alumnos:', comidasFavoritas);

// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos

const promedioEdad = sumaEdadAlumnos/alumnos.length;
// Imprimo en pantalla rta del ejercicio 8;
console.log('8- Promedio de edad del curso: ', promedioEdad);
//Imprimo en pantalla rta bis del ejercicio 8 (promedio redondeado);
const promedioEdadEntero = Math.round(promedioEdad);
console.log('8 bis- Y también el promedio de edad pero redondeado: ', promedioEdadEntero);


//Async/Await

// 9. Buscar una API que más te guste en https://github.com/toddmotto/public-apis pero que debajo de la columna Auth especifique "No"

// API elegida: https://aws.random.cat/meow;
// Imprimo en pantalla rta del ejercicio 9 (elegir API);
console.log(`9- La API que elegí es: https://aws.random.cat/meow`);

// 10. Implementar una función getDataWithPromises que utilice la API de Promises usando .then() (investigar)

// Funcion ejercicio 10;
/* function getDataWithPromises () {
const url = 'https://aws.random.cat/meow'; 

fetch(url)
.then(response => response.json())
.then(data => { //data es el resultado del response.json, es decir, es el resultado de lo devuelto por la API convertido a JSON;

    // Empiezo a imprimir en pantalla rtas del ejercicio 10 (funcion con .then);
    console.log (`10- `);
    console.log(data);
    const elemento = document.getElementById('content');
    elemento.innerHTML = `<img alt="" src="${data.file}"/>`;
    console.log(`A continuación un gato`);
    console.log(`¿de dónde sale? de acá: ${data.file}`);
})
.catch(err => console.log(`Ah, shit, here we go again: ${err}`));

}

getDataWithPromises();*/

// 11. Implementar una función getDataWithAsync que utilice async / await junto con la API fetch para buscar los datos de la API elegida

// Funcion ejercicio 11;
async function getDataWithAsync()
{
    const url = 'https://aws.random.cat/meow';
    const response = await fetch(url);
    const imgs = await response.json();
    return imgs;
}

const getGatos = async () => //Se ejecuta de manera asincronica
{
    const gatos = await getDataWithAsync();
}

//getGatos();

const getGatoSrc = async () => {
    try{
        const gatos = await getDataWithAsync();
        const gatosSrc = gatos.file;
        // Imprimo en pantalla rta ejercicio 11 (funcion con async/await);
        console.log("11- El gato viene de acá: ", gatosSrc);
        const elemento = document.getElementById('content');
        elemento.innerHTML = `<img alt="" src="${gatosSrc}"/>`;
        
    }
    catch (error)
    {
        // Imprimo en pantalla errores posibles del ejercicio 11;
        console.error(error);
    }
}

//getGatoSrc();


// 12. Hiciste manejo de errores? En caso que no lo hayas hecho utiliza .catch() en la función getDataWithPromises o try / catch en la función getDataWithAsync

// Imprimo en pantalla rta ejercicio 12;
console.log("12- Manejo de errores hecho");

// 13. Si te animás un poco más mostra los datos que trajiste en el elemento div con id "content". En caso que sea un array podés iterar usando .forEach() o .map(). Para ello debes investigar y usar alguna de las siguientes APIs del DOM: querySelector(), innerHTML, textContent */

console.log('13- Click en el botón para ver un gato en pantalla');



// Funcion que se ejecuta en el onclick del boton 'buttonSorpresa'. Ejecuta las funciones getGatos() y gatGatoSrc(), que buscan la api, convierten a .json, obtienen la src de la imagen e imprimen en pantalla;

const botonSorpresa = document.getElementById("buttonSorpresa");
botonSorpresa.addEventListener("click", function(){
    console.log("Click. Tomá un gato");
    botonSorpresa.innerHTML = "A ver, otro más";
    getGatos();
    getGatoSrc();
});
