import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import { PlacesProvider } from './context/PlacesContext';
import PlaceDetails from './pages/PlaceDetails';
import ItineraryDetails from './pages/ItineraryDetail';
import CurrentItinerary from './pages/CurrentItinerary';
import NearbyPlaces from './pages/NearbyPlaces';
import RecommendedPlaces from './pages/RecommendedPlaces';
import RecommendedItineraries from './pages/RecommendedItineraries';
import Login from './pages/Login';
import Register from './pages/Register';
import Recovery from './pages/Recovery';
import Preferences from './pages/Preferences';
import Profile from './pages/Profile';

function App() {
  return (
    <UserProvider>
      <PlacesProvider>
        <MemoryRouter 
          // Le decimos qué "URL de mentira" debe simular.
          initialEntries={["/"]}
        >
          <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<RecommendedPlaces />} />
        <Route path="/itinerarios" element={<RecommendedItineraries />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/recuperar" element={<Recovery />} />
        <Route path="/preferencias" element={<Preferences />} />

        <Route path="/itinerario/:id" element={<ItineraryDetails />} />
        {/* Ruta para los detalles de un lugar específico */}
        <Route path="/lugar/:id" element={<PlaceDetails />} />
        
        {/* Ruta para el itinerario actual */}
        <Route path="/itinerario-actual" element={<CurrentItinerary />} />
        
          {/* Ruta para lugares cercanos */}
          <Route path="/lugares-cercanos" element={<NearbyPlaces />} />
          </Routes>
        </MemoryRouter>
      </PlacesProvider>
    </UserProvider>
  );
}

export default App;
