

async function initMap() {
  console.log("Maps JavaScript API loaded.");

  const infoWindow = new google.maps.InfoWindow();

  // Return an array of markers.
  const advancedMarkers = [...document.querySelectorAll('gmp-advanced-marker')];

  // Loop through the markers
  for (let i = 0; i < advancedMarkers.length; i++) {
    const marker = advancedMarkers[i];
    console.log('Processing marker:', marker);

    marker.addListener('click', () => {
      const googleMapsUrl = `https://www.google.com/maps/place/${marker.dataset.position}/@${marker.dataset.position},12z`;

      infoWindow.setContent(`
        <div>
          <h3>${marker.title}</h3>
          <p>${marker.dataset.address}</p>
          <a href="${googleMapsUrl}" target="_blank" style="color:#4D869C">Open in Google Maps</a>
        </div>
      `);
      infoWindow.open(marker.map, marker);

    });
  }
}

window.initMap = initMap;