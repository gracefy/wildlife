
// 显示弹窗信息
function showInfo(name, address, city, province) {

  console.log("showInfo", name, address, city, province);
  const infoWindow = new google.maps.InfoWindow({
    content: `
    <div>
      <h3>${name}</h3>
      <p>${address}</p>
      <p>${city}, ${province}</p>
    </div>
  `
  });

  const gmpMap = document.getElementById("map");


  const zoom = parseInt(gmpMap.getAttribute("zoom"), 10);

  //convert string to JSON object
  const centerStr = gmpMap.getAttribute("center");
  const [lat, lng] = centerStr.split(",").map(parseFloat);
  const center = { lat: lat, lng: lng };


  const map = new google.maps.Map(gmpMap, {
    center: center,
    zoom: zoom,
  });


  infoWindow.setPosition(center);
  infoWindow.open(gmpMap);

}

function openGoogleMaps(query) {
  const encodedQuery = encodeURIComponent(query);
  window.open(`https://www.google.com/maps/search/?api=1&query=${encodedQuery}`, '_blank');
}

// initMap function
function initMap() {

  const gmpMap = document.getElementById("map");
  const zoom = parseInt(gmpMap.getAttribute("zoom"), 10);

  //convert string to JSON object
  const centerStr = gmpMap.getAttribute("center");
  const [lat, lng] = centerStr.split(",").map(parseFloat);
  const center = { lat: lat, lng: lng };


  const map = new google.maps.Map(gmpMap, {
    center: center,
    zoom: zoom,
  });

  return map;
};
