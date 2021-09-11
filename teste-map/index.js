//local onde o cão está
var latitude = -16.8482275;
var longitude = -42.0372641;

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = {
    lat: latitude,
    lng: longitude
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15, //controla o zoom do mapa
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

