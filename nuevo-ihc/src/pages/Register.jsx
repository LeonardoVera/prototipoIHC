import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const { register } = useUser();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    birthDate: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatear la fecha de nacimiento para mostrarla de forma amigable
    const dateObj = new Date(formData.birthDate);
    const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')} / ${(dateObj.getMonth() + 1).toString().padStart(2, '0')} / ${dateObj.getFullYear()}`;
    
    // Registrar usuario con los datos del formulario
    register({
      username: formData.username,
      password: formData.password,
      email: formData.email,
      fullName: formData.username, // Usamos el username como nombre por defecto
      birthDate: formattedDate,
      country: formData.country
    });
    
    navigate('/preferencias');
  };

  return (
    <div className="register-page">
      <main className="register-container">
        <h1 className="register-title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input 
              id="username" 
              name="username" 
              type="text" 
              placeholder="Tu usuario" 
              value={formData.username}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Tu email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="field">
            <label htmlFor="birthDate">Date of Birth</label>
            <input 
              id="birthDate" 
              name="birthDate" 
              type="date" 
              value={formData.birthDate}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="field">
            <label htmlFor="country">Country</label>
            <input 
              id="country" 
              name="country" 
              type="text" 
              placeholder="Tu país" 
              value={formData.country}
              onChange={handleChange}
              required 
            />
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

