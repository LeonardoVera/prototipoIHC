import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import PlaceDetails from './pages/PlaceDetails';
import ItineraryDetails from './pages/ItineraryDetail';

function App() {
  return (
    <MemoryRouter 
      // Le decimos qué "URL de mentira" debe simular.
      initialEntries={["/lugar/huaca-pucllana"]}
    >
      <Routes>
        <Route path="/lugar/:id" element={<PlaceDetails />} />
        <Route path="/itinerario/:id" element={<ItineraryDetails />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;