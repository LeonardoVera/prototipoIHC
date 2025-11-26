import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic here
    navigate('/home');
  };

  return (
    <div className="login-page">
      <main className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" placeholder="Tu usuario" required />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Tu contraseña" required />
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

