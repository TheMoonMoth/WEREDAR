const wolvesApi = "http://werewolf-tracker.herokuapp.com/wolves"
const sightingsApi = "http://werewolf-tracker.herokuapp.com/sightings"
const userSightingApi = "http://werewolf-tracker.herokuapp.com/userSighting"

var mymap = L.map('mapid').setView([39.737818, -104.990117], 9)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGhlbW9vbm1vdGgiLCJhIjoiY2piMmZ6b2l4MmFkdDJ3cWt0b3EwNjA1eCJ9.oS0Sc7_t4VAP5dKrQp9njw'
}).addTo(mymap);




let wolves = []
let sightings = []

const locations = {
  "Park Hill": [39.761111, -104.922014],
  "Capitol Hill": [39.734345, -104.979807],
  "Wash Park": [39.698662, -104.966350],
  "Five Points": [39.757980, -104.982403],
  "Chatfield": [39.542499, -105.062332],
  "Pearl Street": [40.019141, -105.274303],
  "RiNo": [39.763163, -104.983034],
  "LoHi": [39.765299, -105.008925],
  "Aurora": [39.712592, -104.784254],
  "Cherry Creek": [39.688598, -104.883729],
  "Baker": [39.716656, -104.995527],
  "Littleton": [39.581764, -105.044376]
}

fetch(sightingsApi)
  .then(response => response.json())
  .then(response => sightings = response)

fetch(wolvesApi)
  .then(response => response.json())
  .then(response => wolves = response)

setTimeout(function(){
  pinWolf(sightings, wolves)
}, 1000)


function pinWolf(sightingArray, wolvesArray){
  for (var j = 0; j < sightingArray.length; j++){
    let marker = L.marker(locations[sightingArray[j].locations[0]]).addTo(mymap)
    marker.bindPopup(`The ${wolvesArray[j].color} wolf named ${wolvesArray[j].name} was last seen in ${sightingArray[j].locations[0]}`).openPopup()
    var circle = L.circle(locations[sightingArray[j].locations[0]], {
      color: 'red',
      fillColor: '#823129',
      fillOpacity: 0.5,
      radius: 1000
      }).addTo(mymap)
  }
}
