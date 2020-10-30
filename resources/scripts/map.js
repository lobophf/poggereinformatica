const map = L.map('mapid').setView([-27.3393582,-51.6081747], 16.1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const popup = L.popup({
	closeButton: false,
	className: 'map-popup',
	minHeight: 240
}).setContent("Poggere Informática")

L.marker([-27.3383209,-51.6110534])
	.addTo(map)
	.bindPopup(popup)
	.openPopup();
