import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Preferences() {
  const navigate = useNavigate();

  // Estados para cada categoría de preferencias
  const [destinos, setDestinos] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [estilos, setEstilos] = useState([]);
  const [climas, setClimas] = useState([]);

  // Opciones disponibles
  const opcionesDestino = ['Playa', 'Montañas', 'Selvas', 'Ciudad', 'Pueblos'];
  const opcionesActividades = ['Senderismo', 'Compras', 'Gastronomía', 'Museos', 'Deportes'];
  const opcionesEstilo = ['Aventura', 'Familiar', 'Ecológico', 'Romántico', 'Lujo'];
  const opcionesClima = ['Cálido', 'Frío', 'Templado'];

  // Función para toggle de selección
  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Verificar si hay al menos una selección
  const hasSelections = destinos.length > 0 || actividades.length > 0 || estilos.length > 0 || climas.length > 0;

  const handleContinue = () => {
    if (hasSelections) {
      // Aquí podrías guardar las preferencias en un contexto o localStorage
      console.log('Preferencias guardadas:', { destinos, actividades, estilos, climas });
      navigate('/home');
    }
  };

  const handleSkip = () => {
    navigate('/home');
  };

  // Componente de botón de opción
  const OptionButton = ({ label, isSelected, onClick }) => (
    <button
      onClick={onClick}
      className={`
        px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-200
        ${isSelected 
          ? 'bg-amber-500 text-gray-900 shadow-md scale-105 ring-2 ring-amber-600' 
          : 'bg-amber-400/70 text-gray-800 hover:bg-amber-400'
        }
      `}
    >
      {label}
    </button>
  );

  // Componente de sección de preferencias
  const PreferenceSection = ({ title, options, selectedItems, setSelectedItems }) => (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
      <h2 className="font-bold text-gray-800 mb-3">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <OptionButton
            key={option}
            label={option}
            isSelected={selectedItems.includes(option)}
            onClick={() => toggleSelection(option, selectedItems, setSelectedItems)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl overflow-hidden h-[90vh] flex flex-col">
        
        {/* Header */}
        <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-4 shadow-lg flex-shrink-0">
          <h1 className="text-center font-bold text-lg tracking-wide">
            SELECCIONE SUS PREFERENCIAS
          </h1>
        </header>

        {/* Contenido scrolleable */}
        <main className="flex-grow overflow-y-auto p-4 bg-gray-50">
          
          <PreferenceSection
            title="Tipo de destino"
            options={opcionesDestino}
            selectedItems={destinos}
            setSelectedItems={setDestinos}
          />

          <PreferenceSection
            title="Actividades favoritas"
            options={opcionesActividades}
            selectedItems={actividades}
            setSelectedItems={setActividades}
          />

          <PreferenceSection
            title="Estilo de viaje"
            options={opcionesEstilo}
            selectedItems={estilos}
            setSelectedItems={setEstilos}
          />

          <PreferenceSection
            title="Clima preferido"
            options={opcionesClima}
            selectedItems={climas}
            setSelectedItems={setClimas}
          />

        </main>

        {/* Botones de acción fijos en la parte inferior */}
        <div className="p-4 bg-white border-t border-gray-200 flex gap-4 flex-shrink-0">
          <button
            onClick={handleSkip}
            className="flex-1 py-3 rounded-full font-semibold text-white transition-colors shadow-md hover:opacity-90"
            style={{ backgroundColor: '#6c5ce7' }}
          >
            Omitir
          </button>
          <button
            onClick={handleContinue}
            disabled={!hasSelections}
            className={`
              flex-1 py-3 rounded-full font-semibold transition-all duration-200 text-white shadow-md
              ${hasSelections 
                ? 'hover:opacity-90' 
                : 'opacity-50 cursor-not-allowed'
              }
            `}
            style={{ backgroundColor: '#6c5ce7' }}
          >
            Continuar
          </button>
        </div>

      </div>
    </div>
  );
}

export default Preferences;
