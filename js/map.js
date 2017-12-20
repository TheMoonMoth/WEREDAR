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

fetch(sightingsApi)
  .then(response => response.json())
  .then(response => sightings = response)

fetch(wolvesApi)
  .then(response => response.json())
  .then(response => wolves = response)


function pinWolf(sightingArray, wolvesArray){
  for (var j = 0; j < sightingArray.length; j++){
    let marker = L.marker(sightingArray[j].locations[0]).addTo(mymap)
    marker.bindPopup(`The ${wolvesArray[j].color} wolf named ${wolvesArray[j].name} was last seen here`).openPopup()
  }
}

setTimeout(function(){
  pinWolf(sightings, wolves)
}, 1000)
