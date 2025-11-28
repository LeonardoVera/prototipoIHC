import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const result = login(username, password);
    
    if (result.success) {
      navigate('/home');
    } else {
      // Si no hay usuarios registrados, permitir login de demostración
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      if (registeredUsers.length === 0) {
        // Usuario de demostración para primera vez
        setError('No hay usuarios registrados. Por favor, crea una cuenta primero.');
      } else {
        setError(result.error);
      }
    }
  };

  return (
    <div className="login-page">
      <main className="login-container">
        <h1 className="login-title">Login</h1>
        {error && <div className="error-message" style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input 
              id="username" 
              name="username" 
              type="text" 
              placeholder="Tu usuario" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              placeholder="Tu contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary">→</button>
        </form>
        <div className="options">
          <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
          <p><Link to="/registro">Crear una cuenta</Link></p>
          <div className="social-buttons">
            <button className="social-btn facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
            <button className="social-btn google">
              <i className="fab fa-google"></i> Google
            </button>
            <button className="social-btn github">
              <i className="fab fa-github"></i> GitHub
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;

