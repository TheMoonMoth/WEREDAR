const wolfApi = ""
const locationsApi = ""
const updates = ""

var mymap = L.map('mapid').setView([39.737818, -104.990117], 15)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGhlbW9vbm1vdGgiLCJhIjoiY2piMmZ6b2l4MmFkdDJ3cWt0b3EwNjA1eCJ9.oS0Sc7_t4VAP5dKrQp9njw'
}).addTo(mymap);

fetch()



var marker1 = L.marker([39.737818, -104.990017]).addTo(mymap)
marker1.bindPopup("<b>Don't get caught unaware!").openPopup()
