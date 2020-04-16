let markersAll = [];
let map = '';
// Funcion inicializadora pasada como parametro en el llamado a la API de Google Maps;
window.initMap = () => {
    // The location of miLocation;
    const miLocation = { lat: -34.610490, lng: -58.440860 };
    // The map, centered at Uluru;
    map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 13,
            center: miLocation,
            styles: styles,
            treetViewControl: false,
            fullscreenControl: false,
            mapTypeControlOptions: {
            mapTypeIds: []
            },
            zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
            }
            
            });
    // The marker, positioned at miLocation;
    //const marker = new google.maps.Marker({position: miLocation, map: map});
    fetchMarkers(map);

};

const fetchMarkers = async (map) => {
    try {
        const response = await fetch('assets/js/markers.json');
        const json = await response.json();
        json.forEach(marker => {
            addMarker(map, marker);
        });
    } catch (error) {
        console.log(error);
    }
}

const icons = {
    'Birreria' : `assets/images/beer.png`,
    'Restaurant' : `assets/images/bar.png`,
    'Barcito Cheto' : `assets/images/food.png`,
}

const addMarker = (map, marker) => {
    console.log(marker);
    const {lat,lng,name, description, type} = marker;
    const contentString = `
    <div>
    <h2>${name}</h2>
    <h3>${description}</h3>
    <h4>${type}</h4>
    </div>`
    const infowindow = new google.maps.InfoWindow({
        content: contentString
      });
    // genera un nuevo marker;
    const markerItem = new google.maps.Marker(
        { 
            position: { lat: lat, lng: lng }, 
            icon : icons[type],
            map: map,
            customInfo: type
        });
    // se lo agrega a markerItem;
    markerItem.setMap(map);
    markerItem.addListener('click', function() {
        infowindow.open(map, markerItem);
      });
    }

const handleFilterBeer = document.querySelector('.beer');
const handleFilterBar = document.querySelector('.bar');
const handleFilterFood = document.querySelector('.food');

handleFilterBeer.addEventListener('click', (e) => {
    e.preventDetault();
    addMarkerFiltered('Birreria')
})

handleFilterBeer.addEventListener('click', (e) => {
    e.preventDetault();
    addMarkerFiltered('Restaurant')
})

handleFilterBeer.addEventListener('click', (e) => {
    e.preventDetault();
    addMarkerFiltered('Barcito Cheto')
})

 

const addMarkerFiltered = () => {

    console.log('clicked beer');
    console.log(markersAll);
    markersAll.forEach((marker)=> {
        //console.log(marker);
        marker.setMap(null); //Quita todos los markers del mapa;
    })

    const markerFiltered = markersAll.filter ((markerItem) => markerItem.customInfo === 'Birreria');
   markerFiltered.forEach((marker) => {
       marker.setMap(map)
   })
}


fetchMarkers()