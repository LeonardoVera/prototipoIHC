import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import PlaceDetails from './pages/PlaceDetails';
import ItineraryDetails from './pages/ItineraryDetail';
import CurrentItinerary from './pages/CurrentItinerary';
import NearbyPlaces from './pages/NearbyPlaces';
import RecommendedPlaces from './pages/RecommendedPlaces';

function App() {
  return (
    <MemoryRouter 
      // Le decimos qué "URL de mentira" debe simular.
      initialEntries={["/"]}
    >
      <Routes>
        <Route path="/itinerario/:id" element={<ItineraryDetails />} />
        {/* Ruta para los detalles de un lugar específico */}
        <Route path="/lugar/:id" element={<PlaceDetails />} />
        
        {/* Ruta para el itinerario actual */}
        <Route path="/itinerario-actual" element={<CurrentItinerary />} />
        
        {/* Ruta para lugares cercanos */}
        <Route path="/lugares-cercanos" element={<NearbyPlaces />} />

        <Route path="/" element={<RecommendedPlaces />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;