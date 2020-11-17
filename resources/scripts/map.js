const options = {
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
}

const map = L.map('mapid', options).setView([-27.3393582,-51.6081747], 16.1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const popup = L.popup({
	closeButton: false,
	className: 'map-popup',
	minHeight: 240
}).setContent("Poggere Informática<br>R. Felipe Schmidt, 2045, Ouro - SC")

L.marker([-27.3383209,-51.6110534])
	.addTo(map)
	.bindPopup(popup)
	.openPopup();

var mapControlsContainer = document.getElementsByClassName("leaflet-control")[0];
var logoContainer = document.getElementById("logoContainer");
mapControlsContainer.appendChild(logoContainer);

