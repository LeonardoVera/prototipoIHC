import React, { useState } from 'react';
import { getAllPlaces } from '../data/MockDataBase';
import { IoTimeOutline, IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import BottomSheet from '../components/BottomSheet';
import PlaceDetails from './PlaceDetails';
import TopBar from '../components/TopBar';
import MenuOverlay from '../components/MenuOverlay';

export default function RecommendedPlaces() {
  const places = getAllPlaces();

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  
  // Estados para los modales de filtros
  const [showTipoModal, setShowTipoModal] = useState(false);
  const [showActividadModal, setShowActividadModal] = useState(false);
  const [showEstiloModal, setShowEstiloModal] = useState(false);
  const [showClimaModal, setShowClimaModal] = useState(false);
  const [showExtrasModal, setShowExtrasModal] = useState(false);

  // Estados para las selecciones de filtros
  const [tipoSeleccionado, setTipoSeleccionado] = useState([]);
  const [actividadSeleccionada, setActividadSeleccionada] = useState([]);
  const [estiloSeleccionado, setEstiloSeleccionado] = useState([]);
  const [climaSeleccionado, setClimaSeleccionado] = useState([]);
  
  // Filtros extras
  const [cercaniaSeleccionada, setCercaniaSeleccionada] = useState([]);
  const [precioSeleccionado, setPrecioSeleccionado] = useState([]);
  const [puntuacionSeleccionada, setPuntuacionSeleccionada] = useState([]);

  // Opciones
  const opcionesTipo = ['Playa', 'Montaña', 'Ciudad', 'Pueblos', 'Selva'];
  const opcionesActividad = ['Senderismo', 'Compras', 'Gastronomía', 'Museos', 'Deportes'];
  const opcionesEstilo = ['Aventura', 'Familiar', 'Ecológico', 'Romántico', 'Lujo'];
  const opcionesClima = ['Cálido', 'Frío', 'Templado'];
  const opcionesCercania = ['2 km', '5 km', '10 km'];
  const opcionesPrecio = ['$', '$$', '$$$'];
  const opcionesPuntuacion = ['★★★', '★★★★', '★★★★★'];

  // Función toggle
  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Componente de botón de opción para modales
  const OptionButton = ({ label, isSelected, onClick }) => (
    <button
      onClick={onClick}
      className={`
        px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-200
        ${isSelected 
          ? 'bg-amber-500 text-gray-900 shadow-md ring-2 ring-amber-600' 
          : 'bg-amber-400 text-gray-800 hover:bg-amber-500'
        }
      `}
    >
      {label}
    </button>
  );

  // Componente Modal de Filtro
  const FilterModal = ({ isOpen, onClose, title, options, selectedItems, setSelectedItems }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        
        {/* Modal */}
        <div className="relative bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-fadeIn">
          {/* Botón cerrar */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoClose size={24} />
          </button>
          
          {/* Título */}
          <h3 className="text-xl font-bold text-center mb-6">{title}</h3>
          
          {/* Opciones */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {options.map((option) => (
              <OptionButton
                key={option}
                label={option}
                isSelected={selectedItems.includes(option)}
                onClick={() => toggleSelection(option, selectedItems, setSelectedItems)}
              />
            ))}
          </div>
          
          {/* Botón guardar */}
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full font-semibold bg-amber-400 text-gray-900 hover:bg-amber-500 transition-colors border-2 border-amber-600"
          >
            Guardar selección
          </button>
        </div>
      </div>
    );
  };

  // Modal de Filtros Extras (Cercanía, Precio, Puntuación)
  const ExtrasFilterModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        
        {/* Modal */}
        <div className="relative bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-fadeIn max-h-[80vh] overflow-y-auto">
          {/* Botón cerrar */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoClose size={24} />
          </button>
          
          {/* Sección Cercanía */}
          <h3 className="text-xl font-bold text-center mb-4">Cercanía</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {opcionesCercania.map((option) => (
              <OptionButton
                key={option}
                label={option}
                isSelected={cercaniaSeleccionada.includes(option)}
                onClick={() => toggleSelection(option, cercaniaSeleccionada, setCercaniaSeleccionada)}
              />
            ))}
          </div>
          
          {/* Separador */}
          <hr className="border-gray-200 mb-4" />
          
          {/* Sección Precio */}
          <h3 className="text-xl font-bold text-center mb-4">Precio</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {opcionesPrecio.map((option) => (
              <OptionButton
                key={option}
                label={option}
                isSelected={precioSeleccionado.includes(option)}
                onClick={() => toggleSelection(option, precioSeleccionado, setPrecioSeleccionado)}
              />
            ))}
          </div>
          
          {/* Separador */}
          <hr className="border-gray-200 mb-4" />
          
          {/* Sección Puntuación */}
          <h3 className="text-xl font-bold text-center mb-4">Puntuación</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {opcionesPuntuacion.map((option) => (
              <OptionButton
                key={option}
                label={option}
                isSelected={puntuacionSeleccionada.includes(option)}
                onClick={() => toggleSelection(option, puntuacionSeleccionada, setPuntuacionSeleccionada)}
              />
            ))}
          </div>
          
          {/* Botón guardar */}
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full font-semibold bg-amber-400 text-gray-900 hover:bg-amber-500 transition-colors border-2 border-amber-600"
          >
            Guardar selección
          </button>
        </div>
      </div>
    );
  };

  // Botón de filtro pequeño
  const FilterChip = ({ label, onClick, hasSelection }) => (
    <button
      onClick={onClick}
      className={`
        px-3 py-1.5 rounded-full text-xs font-semibold transition-all
        ${hasSelection 
          ? 'bg-amber-500 text-gray-900' 
          : 'bg-amber-400 text-gray-800 hover:bg-amber-500'
        }
      `}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
        
        <div className="max-w-md w-full bg-white shadow-xl rounded-xl overflow-hidden h-[90vh] flex flex-col relative">
            
            <TopBar
              onMenuToggle={() => setMenuOpen(!menuOpen)}
              title="Lugares recomendados"
            />

            {/* Menu Overlay */}
            <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            
            {/* Filtros de preferencias */}
            <div className="px-4 py-3 bg-white border-b border-gray-100">
              <div className="flex items-center justify-center gap-2">
                {/* Botón de filtros extras */}
                <button
                  onClick={() => setShowExtrasModal(true)}
                  className={`
                    p-2 rounded-full transition-all flex-shrink-0
                    ${(cercaniaSeleccionada.length > 0 || precioSeleccionado.length > 0 || puntuacionSeleccionada.length > 0)
                      ? 'bg-amber-500 text-gray-900'
                      : 'bg-amber-400 text-gray-800 hover:bg-amber-500'
                    }
                  `}
                >
                  <BsThreeDots size={16} />
                </button>
                
                {/* Chips de filtros */}
                <FilterChip 
                  label="Tipo" 
                  onClick={() => setShowTipoModal(true)}
                  hasSelection={tipoSeleccionado.length > 0}
                />
                <FilterChip 
                  label="Actividad" 
                  onClick={() => setShowActividadModal(true)}
                  hasSelection={actividadSeleccionada.length > 0}
                />
                <FilterChip 
                  label="Estilo" 
                  onClick={() => setShowEstiloModal(true)}
                  hasSelection={estiloSeleccionado.length > 0}
                />
                <FilterChip 
                  label="Clima" 
                  onClick={() => setShowClimaModal(true)}
                  hasSelection={climaSeleccionado.length > 0}
                />
              </div>
            </div>
            
            <div className="p-4 overflow-y-auto flex-grow bg-gray-50">
                
                {/* --- SECCIÓN: LUGARES --- */}
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                    Lugares para ti
                </h2>
                
                <div className="space-y-4 mb-8">
                    {places.map(place => (
                        <div 
                            key={place.id} 
                            onClick={() => setSelectedPlaceId(place.id)}
                            className="cursor-pointer block group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                        >
                            {/* IMAGEN */}
                            <div className="w-full h-40 relative">
                                <img 
                                    src={place.images[0]?.url} 
                                    alt={place.name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* CONTENIDO */}
                            <div className="p-3">
                                <h3 className="font-bold text-base text-gray-900 mb-1">
                                    {place.name}
                                </h3>
                                
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <IoTimeOutline size={14} />
                                        <span className="text-xs">15 min</span>
                                        <span className="mx-1">•</span>
                                        <span className="text-xs">2.5 km</span>
                                    </div>

                                    <div className="flex items-center gap-1 font-semibold text-gray-800">
                                        <FaStar className="text-black" size={12} />
                                        <span className="text-sm">{place.ratingsSummary?.averageRating || 4.5}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

        {/* Modal para Lugares */}
        <BottomSheet 
            isOpen={!!selectedPlaceId} 
            onClose={() => setSelectedPlaceId(null)}
        >
            {selectedPlaceId && (
                <PlaceDetails 
                    placeIdProp={selectedPlaceId} 
                    onCloseModal={() => setSelectedPlaceId(null)} 
                />
            )}
        </BottomSheet>

        {/* Modales de Filtros */}
        <FilterModal
          isOpen={showTipoModal}
          onClose={() => setShowTipoModal(false)}
          title="Tipo de destino"
          options={opcionesTipo}
          selectedItems={tipoSeleccionado}
          setSelectedItems={setTipoSeleccionado}
        />
        
        <FilterModal
          isOpen={showActividadModal}
          onClose={() => setShowActividadModal(false)}
          title="Actividad"
          options={opcionesActividad}
          selectedItems={actividadSeleccionada}
          setSelectedItems={setActividadSeleccionada}
        />
        
        <FilterModal
          isOpen={showEstiloModal}
          onClose={() => setShowEstiloModal(false)}
          title="Estilo de viaje"
          options={opcionesEstilo}
          selectedItems={estiloSeleccionado}
          setSelectedItems={setEstiloSeleccionado}
        />
        
        <FilterModal
          isOpen={showClimaModal}
          onClose={() => setShowClimaModal(false)}
          title="Clima preferido"
          options={opcionesClima}
          selectedItems={climaSeleccionado}
          setSelectedItems={setClimaSeleccionado}
        />
        
        {/* Modal de Filtros Extras */}
        <ExtrasFilterModal
          isOpen={showExtrasModal}
          onClose={() => setShowExtrasModal(false)}
        />

    </div>
  );
}
