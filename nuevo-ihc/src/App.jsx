import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import PlaceDetails from './pages/PlaceDetails';

function App() {
  return (
    <MemoryRouter 
      // Le decimos qué "URL de mentira" debe simular.
      initialEntries={["/lugar/parque-aguas"]}
    >
      <Routes>
        {/* 4. Definimos la misma ruta que usará tu componente
            para que useParams() pueda capturar el ':id' */}
        <Route path="/lugar/:id" element={<PlaceDetails />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;