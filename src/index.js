const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1Ijoia2ttYXJ0aW5lejk1IiwiYSI6ImNrMTZtZWR5eDAwcHczbW85OGlka2ZwazAifQ.X6IhFHzQn7H3DQ-lyg45lQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
