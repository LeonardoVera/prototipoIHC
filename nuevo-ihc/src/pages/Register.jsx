import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration logic here
    navigate('/preferencias');
  };

  return (
    <div className="register-page">
      <main className="register-container">
        <h1 className="register-title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" placeholder="Tu usuario" required />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Tu contraseña" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Tu email" required />
          </div>
          <div className="field">
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input id="date_of_birth" name="date_of_birth" type="date" required />
          </div>
          <div className="field">
            <label htmlFor="country">Country</label>
            <input id="country" name="country" type="text" placeholder="Tu país" required />
          </div>
          <button type="submit" className="btn btn-primary">→</button>
        </form>
        <div className="options">
          <p>¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link></p>
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

export default Register;

