import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import PlaceDetails from './pages/PlaceDetails';
import CurrentItinerary from './pages/CurrentItinerary';
import NearbyPlaces from './pages/NearbyPlaces';

function App() {
  return (
    <MemoryRouter 
      // Inicializa en la ruta del itinerario actual
      initialEntries={["/itinerario-actual"]}
    >
      <Routes>
        {/* Ruta para los detalles de un lugar específico */}
        <Route path="/lugar/:id" element={<PlaceDetails />} />
        
        {/* Ruta para el itinerario actual */}
        <Route path="/itinerario-actual" element={<CurrentItinerary />} />
        
        {/* Ruta para lugares cercanos */}
        <Route path="/lugares-cercanos" element={<NearbyPlaces />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;