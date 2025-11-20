/**
 * ARCHIVO OBSOLETO - NO USAR
 * 
 * Este archivo ha sido refactorizado y dividido en componentes modulares.
 * 
 * Los componentes ahora se encuentran en:
 * - src/components/TopBar.jsx
 * - src/components/MenuOverlay.jsx
 * - src/components/itinerary/TimelineItem.jsx
 * - src/components/nearbyPlaces/InteractiveMap.jsx
 * - src/components/nearbyPlaces/LocationsList.jsx
 * 
 * Las páginas ahora están en:
 * - src/pages/CurrentItinerary.jsx
 * - src/pages/NearbyPlaces.jsx
 * 
 * Las rutas se configuran en src/App.jsx
 * 
 * Este archivo se mantiene solo como referencia histórica.
 * Por favor, elimina este archivo si no es necesario.
 */

import React from 'react';

export default function DeprecatedItineraryComponent() {
  return (
    <div className="p-8 bg-yellow-100 border-2 border-yellow-500 rounded-lg">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ Componente Obsoleto</h2>
      <p className="text-yellow-700">
        Este componente ha sido refactorizado. Por favor, utiliza las nuevas rutas:
      </p>
      <ul className="list-disc list-inside mt-2 text-yellow-700">
        <li>/itinerario-actual - Para ver el itinerario actual</li>
        <li>/lugares-cercanos - Para ver lugares cercanos</li>
      </ul>
    </div>
  );
}