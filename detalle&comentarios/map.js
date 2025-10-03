// Inicializar mapa
var map = L.map('map').setView([-12.0464, -77.0428], 12); // Lima

// Cargar tiles (vista del mapa)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Lista de lugares con coordenadas
var lugares = [
  {
    nombre: "Museo Nacional de Arqueología",
    coords: [-12.073056, -77.083056],
    img: "../images/catedral.jpg",
    url: "#"
  },
  {
    nombre: "Barranco",
    coords: [-12.1506, -77.0219],
    img: "../images/amanecer.jpg",
    url: "#"
  },
  {
    nombre: "Centro Histórico",
    coords: [-12.0464, -77.0428],
    img: "../images/la-punta.jpg",
    url: "#"
  }
];

// Función para mostrar información en el panel lateral
function mostrarInfoLugar(lugar) {
  const infoPanel = document.getElementById('infoPanel');
  infoPanel.innerHTML = `
    <div class="panel-info">
      <h3>${lugar.nombre}</h3>
      <img src="${lugar.img}" alt="${lugar.nombre}">
    </div>
    <div class="panel-button">
      <button class="ver-lugar-btn" onclick="window.location='${lugar.url}'">Ver lugar</button>
    </div>
  `;
}

// Añadir marcadores con evento click
lugares.forEach(lugar => {
  var marker = L.marker(lugar.coords).addTo(map);
  
  // Al hacer clic en el marcador, mostrar info en el panel lateral
  marker.on('click', function() {
    mostrarInfoLugar(lugar);
  });
});

// Dibujar ruta entre los lugares
var coordsRuta = lugares.map(l => l.coords);
L.polyline(coordsRuta, {color: 'blue'}).addTo(map);
