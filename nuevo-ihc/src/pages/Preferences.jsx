import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Preferences.css';

function Preferences() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/home');
  };

  return (
    <div className="preferences-page">
      {/* Header superior */}
      <header className="header">
        <h1 className="title">SELECCIONE SUS PREFERENCIAS</h1>
      </header>

      {/* Contenedor centrado */}
      <main className="main-preferences">
        <div className="fields-container">
          <div className="column">
            <div className="field-pref">
              <h2 className="field-title">Tipo de destino</h2>
              <div className="options-group">
                <button className="option-btn">Playa</button>
                <button className="option-btn">Montañas</button>
                <button className="option-btn">Selvas</button>
                <button className="option-btn">Ciudad</button>
                <button className="option-btn">Pueblos</button>
              </div>
            </div>

            <div className="field-pref">
              <h2 className="field-title">Actividades favoritas</h2>
              <div className="options-group">
                <button className="option-btn">Senderismo</button>
                <button className="option-btn">Compras</button>
                <button className="option-btn">Gastronomía</button>
                <button className="option-btn">Museos</button>
                <button className="option-btn">Deportes</button>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field-pref">
              <h2 className="field-title">Estilo de viaje</h2>
              <div className="options-group">
                <button className="option-btn">Aventura</button>
                <button className="option-btn">Familiar</button>
                <button className="option-btn">Ecológico</button>
                <button className="option-btn">Romántico</button>
                <button className="option-btn">Lujo</button>
              </div>
            </div>

            <div className="field-pref">
              <h2 className="field-title">Clima preferido</h2>
              <div className="options-group">
                <button className="option-btn">Cálido</button>
                <button className="option-btn">Frío</button>
                <button className="option-btn">Templado</button>
              </div>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="btn-pref btn-primary" onClick={handleContinue}>Omitir</button>
          <button className="btn-pref btn-primary" onClick={handleContinue}>Continuar</button>
        </div>
      </main>
    </div>
  );
}

export default Preferences;

