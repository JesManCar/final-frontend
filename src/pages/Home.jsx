import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { Navigate } from 'react-router-dom';

import '../styles/styles.css'; // Import global styles

export default function Home() {
  const [view, setView] = useState('login');
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <>
    <header>
      <h1>Pet Manager</h1>
        </header>
      <div className="button-container">
        <button onClick={() => setView('login')}>Iniciar Sesión</button>
        <button onClick={() => setView('register')}>Registrarse</button>
      </div>
        <div>
      {view === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
    </>
  );
}
