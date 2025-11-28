import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAllPlaces as getInitialPlaces, getAllItineraries as getInitialItineraries, calculateRatingsFromComments } from '../data/MockDataBase';

const PlacesContext = createContext(null);

export function PlacesProvider({ children }) {
  // Cargar lugares desde localStorage o usar los datos iniciales
  const [places, setPlaces] = useState(() => {
    const savedPlaces = localStorage.getItem('placesData');
    if (savedPlaces) {
      return JSON.parse(savedPlaces);
    }
    // Cargar datos iniciales y convertir a objeto indexado por id
    const initialPlaces = getInitialPlaces();
    const placesObj = {};
    initialPlaces.forEach(place => {
      placesObj[place.id] = place;
    });
    return placesObj;
  });

  // Cargar itinerarios desde localStorage o usar los datos iniciales
  const [itineraries, setItineraries] = useState(() => {
    const savedItineraries = localStorage.getItem('itinerariesData');
    if (savedItineraries) {
      return JSON.parse(savedItineraries);
    }
    // Cargar datos iniciales y convertir a objeto indexado por id
    const initialItineraries = getInitialItineraries();
    const itinerariesObj = {};
    initialItineraries.forEach(itinerary => {
      itinerariesObj[itinerary.id] = itinerary;
    });
    return itinerariesObj;
  });

  // Guardar en localStorage cada vez que cambien los lugares
  useEffect(() => {
    localStorage.setItem('placesData', JSON.stringify(places));
  }, [places]);

  // Guardar en localStorage cada vez que cambien los itinerarios
  useEffect(() => {
    localStorage.setItem('itinerariesData', JSON.stringify(itineraries));
  }, [itineraries]);

  // Obtener todos los lugares como array con ratings calculados
  const getAllPlaces = () => {
    return Object.values(places).map(place => ({
      ...place,
      ratingsSummary: calculateRatingsFromComments(place.comments)
    }));
  };

  // Obtener un lugar por ID con ratings calculados
  const getPlaceById = (id) => {
    const place = places[id];
    if (!place) return null;
    return {
      ...place,
      ratingsSummary: calculateRatingsFromComments(place.comments)
    };
  };

  // Agregar un comentario a un lugar
  const addCommentToPlace = (placeId, comment) => {
    setPlaces(prevPlaces => {
      const place = prevPlaces[placeId];
      if (!place) return prevPlaces;

      const updatedComments = [comment, ...place.comments];
      
      return {
        ...prevPlaces,
        [placeId]: {
          ...place,
          comments: updatedComments
        }
      };
    });
  };

  // Actualizar votos de un comentario en un lugar
  const updatePlaceCommentVote = (placeId, commentId, updatedComment) => {
    setPlaces(prevPlaces => {
      const place = prevPlaces[placeId];
      if (!place) return prevPlaces;

      const updatedComments = place.comments.map(c => 
        c.id === commentId ? updatedComment : c
      );

      return {
        ...prevPlaces,
        [placeId]: {
          ...place,
          comments: updatedComments
        }
      };
    });
  };

  // Obtener todos los itinerarios como array con ratings calculados
  const getAllItineraries = () => {
    return Object.values(itineraries).map(itinerary => ({
      ...itinerary,
      ratingsSummary: calculateRatingsFromComments(itinerary.comments)
    }));
  };

  // Obtener un itinerario por ID con ratings calculados
  const getItineraryById = (id) => {
    const itinerary = itineraries[id];
    if (!itinerary) return null;
    return {
      ...itinerary,
      ratingsSummary: calculateRatingsFromComments(itinerary.comments)
    };
  };

  // Agregar un comentario a un itinerario
  const addCommentToItinerary = (itineraryId, comment) => {
    setItineraries(prevItineraries => {
      const itinerary = prevItineraries[itineraryId];
      if (!itinerary) return prevItineraries;

      const updatedComments = [comment, ...itinerary.comments];

      return {
        ...prevItineraries,
        [itineraryId]: {
          ...itinerary,
          comments: updatedComments
        }
      };
    });
  };

  // Actualizar votos de un comentario en un itinerario
  const updateItineraryCommentVote = (itineraryId, commentId, updatedComment) => {
    setItineraries(prevItineraries => {
      const itinerary = prevItineraries[itineraryId];
      if (!itinerary) return prevItineraries;

      const updatedComments = itinerary.comments.map(c => 
        c.id === commentId ? updatedComment : c
      );

      return {
        ...prevItineraries,
        [itineraryId]: {
          ...itinerary,
          comments: updatedComments
        }
      };
    });
  };

  const value = {
    // Lugares
    getAllPlaces,
    getPlaceById,
    addCommentToPlace,
    updatePlaceCommentVote,
    // Itinerarios
    getAllItineraries,
    getItineraryById,
    addCommentToItinerary,
    updateItineraryCommentVote,
  };

  return (
    <PlacesContext.Provider value={value}>
      {children}
    </PlacesContext.Provider>
  );
}

export function usePlaces() {
  const context = useContext(PlacesContext);
  if (!context) {
    throw new Error('usePlaces debe ser usado dentro de un PlacesProvider');
  }
  return context;
}

export default PlacesContext;


