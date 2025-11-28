import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

// Usuarios pre-registrados por defecto
const defaultUsers = [
  {
    username: 'Angel',
    password: 'angel',
    email: 'angel@ejemplo.com',
    fullName: 'Angel',
    birthDate: '14 / 11 / 2003',
    country: 'Perú',
    avatarUrl: 'https://placehold.co/160x160/10b981/ffffff?text=A'
  },
  {
    username: 'Gerardo',
    password: 'gerardo',
    email: 'gerardo@ejemplo.com',
    fullName: 'Gerardo',
    birthDate: '22 / 05 / 2002',
    country: 'Perú',
    avatarUrl: 'https://placehold.co/160x160/10b981/ffffff?text=G'
  },
  {
    username: 'Vera',
    password: 'vera',
    email: 'vera@ejemplo.com',
    fullName: 'Vera',
    birthDate: '08 / 03 / 2004',
    country: 'Perú',
    avatarUrl: 'https://placehold.co/160x160/10b981/ffffff?text=V'
  }
];

// Inicializar usuarios por defecto si no existen
const initializeDefaultUsers = () => {
  const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  
  // Si no hay usuarios registrados, agregar los usuarios por defecto
  if (existingUsers.length === 0) {
    localStorage.setItem('registeredUsers', JSON.stringify(defaultUsers));
    return defaultUsers;
  }
  
  // Si ya hay usuarios, verificar que los usuarios por defecto estén incluidos
  const usernames = existingUsers.map(u => u.username);
  const missingUsers = defaultUsers.filter(u => !usernames.includes(u.username));
  
  if (missingUsers.length > 0) {
    const updatedUsers = [...existingUsers, ...missingUsers];
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    return updatedUsers;
  }
  
  return existingUsers;
};

export function UserProvider({ children }) {
  // Inicializar usuarios por defecto al cargar
  useEffect(() => {
    initializeDefaultUsers();
  }, []);

  const [user, setUser] = useState(() => {
    // Intentar cargar usuario desde localStorage al iniciar
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Guardar en localStorage cada vez que cambie el usuario
  useEffect(() => {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [user]);

  // Función para registrar un nuevo usuario
  const register = (userData) => {
    const newUser = {
      username: userData.username,
      email: userData.email,
      fullName: userData.fullName || userData.username,
      birthDate: userData.birthDate,
      country: userData.country,
      avatarUrl: `https://placehold.co/160x160/10b981/ffffff?text=${userData.username.charAt(0).toUpperCase()}`
    };
    
    // Guardar en la lista de usuarios registrados
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    registeredUsers.push({ ...newUser, password: userData.password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    setUser(newUser);
    return newUser;
  };

  // Función para iniciar sesión
  const login = (username, password) => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const foundUser = registeredUsers.find(
      u => u.username === username && u.password === password
    );
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return { success: true, user: userWithoutPassword };
    }
    
    return { success: false, error: 'Usuario o contraseña incorrectos' };
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  // Función para actualizar datos del perfil
  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    
    // También actualizar en la lista de usuarios registrados
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userIndex = registeredUsers.findIndex(u => u.username === user.username);
    if (userIndex !== -1) {
      registeredUsers[userIndex] = { ...registeredUsers[userIndex], ...updatedData };
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    }
    
    return updatedUser;
  };

  const value = {
    user,
    isAuthenticated: !!user,
    register,
    login,
    logout,
    updateProfile
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe ser usado dentro de un UserProvider');
  }
  return context;
}

export default UserContext;

