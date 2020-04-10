const CardItem = props => {

  const {id, image, name, species, origin} = props;
  const {name: planet, url} = origin;

  return `
    <div class="column is-one-quarter">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="${image}" alt="Imagen de ${name}">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="${image}" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${name}</p>
                  <p class="title is-4 smaller"> Especie: ${species}</p>
                  <p class="title is-4 smaller">Proveniente de: ${planet}</p>
                </div>
              </div>
              <div class="buttons">
                    <button class="button is-primary open_modal" id="${id}">Ver más</button>
              </div>
            </div>
          </div>
        </div> `
};


const getCharacters = async (baseURL, from, to) => {
  //Array.From investigar, parecida a .map;
  //Array.from ({length:5}, (v, i) => i);
  // array from genera un array a partir de la iteración. Busca 20 personajes basandose en el FROM y TO;
  const charactersRange = Array.from({length: to - from + 1}, (_,index)=>index + 1).join(',');
  const url = `${baseURL}character/${charactersRange}`;
  const response = await fetch(url);
  const characters =  await response.json();

  return characters;
}

const getCharactersByQuery = async (baseURL, query) => {
  const url = `${baseURL}/character/?name=${query}`;
  const response = await fetch(url);
  const characters = await response.json();

  return characters;

}

const appendElements = (characters, emptyGrid) => {
  const $grid = document.querySelector('.grid');
  if(emptyGrid) {$grid.innerHTML = null;};
    characters.forEach(character => {
    const cardItemHtml = CardItem(character);
    $grid.innerHTML += cardItemHtml;
  
  });

}

const main = async () => {

  const baseURL = 'https://rickandmortyapi.com/api/';

  //Parte 1: obtener elementos de la api y mostrarlos en el dom;
  const characters = await getCharacters(baseURL, 1, 20);
  console.log(characters);
  appendElements(characters);
   

  // Parte 2: crear un buscador de personajes;
  const $submit = document.querySelector('.handler_search');
  $submit.addEventListener('click', async (event)=> {
    // ¿.preventDefault? Investigar;
    event.preventDefault();
    const $input = document.querySelector('.input_search');
    console.log('click en search');
    const valor = $input.value;
    console.log(valor);
    
    const charactersByQuery = await getCharactersByQuery(baseURL, valor);
    console.log(charactersByQuery.results);
    appendElements(charactersByQuery.results, true);

  });

  // Agregar el modal, al hacer click en un botón debe desplegar un modal con los datos del planeta y episodios en los que aparece el personaje. Un workaround posible es agregar un atributo data al botón y capturarlo como parametro para la muestra de los datos restantes;

  //Modal
  // genero constantes para poder modificar mi modal, buscandolo por sus clases;
  const $modalOpenArr = document.querySelectorAll('.open_modal');
  const $modal = document.querySelector('.modal');
  const $modalClose = document.querySelector('.modal-close');

  $modalOpenArr.forEach((boton) => {
    //EventListener para visibilizar el modal;
    boton.addEventListener('click', (id) => {
      $modal.classList.add("is-active");
      // Voy a buscar mis elementos HTML por ID para modificar su contenido;
      const $personaje = document.getElementById("modalPersonaje");
      const $imagen = document.getElementById("modalImagen");
      const $planeta = document.getElementById("modalPlaneta");
      const $capitulos = document.getElementById("modalEpisodios");
      const $modalBoton = document.getElementById("modalButton");
      // Con el ID del boton, resto 1 porque en el ID de personajes no arrancan en 0 sino en 1, osea su ID está adelantado en 1 a su posición;
      const realCharacter = (id.target.id) - 1;
      // con .innerHTML modifico los contenidos de forma dinámica, según el ID del botón que se apretó;
      $personaje.innerHTML = characters[realCharacter].name;
      $imagen.setAttribute("src", characters[realCharacter].image);
      $planeta.innerHTML = `Proveniente de: ${characters[realCharacter].origin.name}`;
      $capitulos.innerHTML = `Cantidad de episodios en los que aparece: ${characters[realCharacter].episode.length}`;
      $modalBoton.innerHTML = `Ver episodios`


      //Llamo a la funcion extra elegida por mí;
      $modalBoton.addEventListener ('click', () => {
      console.log("click");
      funcionExtra (realCharacter);
      })
      
    })
  })

  //EventListener para invisibilizar el modal;
  $modalClose.addEventListener('click', () => {
    $modal.classList.remove("is-active");
  })


  // Agregar una funcionalidad extra a elección del alumno;

  const funcionExtra = (id) => {

    console.log("click 2");
    console.log(characters[id]);
    // vacío el modal para poner en pantalla los episodios;
    const $contenidoModal = document.getElementById("modalFormato");
    $contenidoModal.innerHTML = null;
    // declaro constante para traer los episodios del personaje del modal;
    const cantidadCapitulos = characters[id].episode.length;
    const todosLosCaps = characters[id].episode;
    // cantidad de capitulos;
    console.log(cantidadCapitulos);
    // url de cada uno de los capitulos;
    console.log (todosLosCaps);

    // forEach para que en cada uno de los episodios imprima en pantalla;
    todosLosCaps.forEach(function(capitulo){

      console.log(capitulo);
      $contenidoModal.innerHTML += `<div>${capitulo}</div>`;

    })
    
  }



}

main ();

