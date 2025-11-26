import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Reusing Login styles as in the original HTML

function Recovery() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enlace enviado correctamente");
    navigate('/');
  };

  return (
    <div className="login-page">
      <main className="login-container">
        <h1 className="login-title">Recuperar Contraseña</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" placeholder="Ingresa tu correo" required />
          </div>
          <button type="submit" className="btn btn-primary">Enviar enlace</button>
        </form>

        <div className="options">
          <p><Link to="/">← Volver al login</Link></p>
        </div>
      </main>
    </div>
  );
}

export default Recovery;

