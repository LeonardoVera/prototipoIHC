var map = L.map('map').setView([-12.0464, -77.0428], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

var lugares = [
  {
    nombre: "Plaza Mayor",
    coords: [-12.0464, -77.0428],
    desc: "La Plaza Mayor de Lima es el corazón histórico de la ciudad.",
    img: "../images/catedral.jpg"
  },
  {
    nombre: "Parque Kennedy",
    coords: [-12.1191, -77.0295],
    desc: "Famoso por sus gatos y vida nocturna en Miraflores.",
    img: "../images/parque-kennedy.jpg"
  },
  {
    nombre: "Barranco",
    coords: [-12.1529, -77.0219],
    desc: "Barrio bohemio con murales, bares y el famoso Puente de los Suspiros.",
    img: "../images/barranco-lima.jpg"
  }
];

lugares.forEach(lugar => {
  var marker = L.marker(lugar.coords).addTo(map);
  marker.on('click', function() {
    // Mostrar la imagen y cargar el contenido
    const imgElement = document.getElementById("panelImg");
    imgElement.src = lugar.img;
    imgElement.style.display = "block"; // Mostrar la imagen
    
    document.getElementById("panelDesc").innerText = lugar.desc;
    document.querySelector(".panel-info h3").innerText = lugar.nombre;
    document.getElementById("btnVerLugar").disabled = false;

    document.getElementById("btnVerLugar").onclick = function() {
      alert("Más información sobre " + lugar.nombre);
    };
  });
});
