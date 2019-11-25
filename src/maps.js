const locations = [
  "ChIJi7yq32XkrIkRfirdE2aqYFY", // honeygirl
  "ChIJUTeQPhDkrIkRQlRqhOL2P54", // ponysaurus
  "ChIJOS52vW7krIkRth8rNe_GHVQ", // the wine feed
  "ChIJr-tRwVblrIkRG2-tifsOzZo", // hi-wire
  "ChIJ6ez2s27krIkRrlrL086Uwh8", // bull city ciderworks
  "ChIJfW3RIGbkrIkRN6i4XH6Mvxg" // bros v
];

function initMap() {
  const mapOptions = {
    zoom: 16,
    center: { lat: 35.990299, lng: -78.892897 }
  };
  const markers = [];

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const service = new google.maps.places.PlacesService(map);

  const placeLookupCallback = (results, status) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK) return;

    const marker = new google.maps.Marker({
      map,
      position: results.geometry.location,
      title: results.name
    });
  };

  locations.forEach(placeId => {
    service.getDetails(
      {
        placeId,
        fields: ["name", "geometry"]
      },
      placeLookupCallback
    );
  });
}

export default initMap;
