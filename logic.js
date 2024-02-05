// A function to determine the marker size based on the violent crime rate
function markerSize(violentCrimeRate) {
  return Math.sqrt(violentCrimeRate) * 500;
}

// Define arrays to hold the created city markers for 2009 and 2019.
let crime2009Markers = [];
let crime2019Markers = [];

// Loop through cities, and create the markers for 2009 and 2019.
for (let i = 0; i < cities.length; i++) {
  // Setting the marker radius for 2009 by passing the violent crime rate into the markerSize function
  let crime2009Marker = L.circle([cities[i].lat, cities[i].lng], {
    stroke: false,
    fillOpacity: 0.55,
    color: "red",  // Adjust color as needed
    fillColor: "red",  // Adjust color as needed
    radius: markerSize(cities[i]["2009_Violent_crime"])
  });

  // Setting the marker radius for 2019 by passing the violent crime rate into the markerSize function
  let crime2019Marker = L.circle([cities[i].lat, cities[i].lng], {
    stroke: false,
    fillOpacity: 0.25,
    color: "blue",  // Adjust color as needed
    fillColor: "blue",  // Adjust color as needed
    radius: markerSize(cities[i]["2019_Violent_crime"])
  });

  // Create a popup content for the marker
  let popupContent = `
    <strong>City:</strong> ${cities[i].city}<br>
    <strong>Violent Crime (2009):</strong> ${cities[i]["2009_Violent_crime"]}<br>
    <strong>Violent Crime (2019):</strong> ${cities[i]["2019_Violent_crime"]}`;

  // Bind the popup to the marker
  crime2009Marker.bindPopup(popupContent);
  crime2019Marker.bindPopup(popupContent);

  // Add markers to the corresponding layer groups
  crime2009Markers.push(crime2009Marker);
  crime2019Markers.push(crime2019Marker);
}

// Create two separate layer groups: one for the 2009 crime markers and another for the 2019 crime markers.
let crime2009 = L.layerGroup(crime2009Markers);
let crime2019 = L.layerGroup(crime2019Markers);

// Create a base layer.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create an overlay object.
let overlayMaps = {
  "Violent Crime (2009)": crime2009,
  "Violent Crime (2019)": crime2019
};

// Define a map object.
let myMap = L.map("map", {
  center: [43.9554, -89.8169],  // Set the initial center to the first city's coordinates
  zoom: 7,
  maxBounds: [
    [41.5, -95.5], // Southwest corner of Wisconsin
    [49.5, -82.0]  // Northeast corner of Wisconsin
  ],
  layers: [street, crime2009, crime2019]  // Include the tile layer in the layers array
});

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(null, overlayMaps, {
  collapsed: false
}).addTo(myMap);
