import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

import "../styles/nav.style.css";

export default function Nav() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container-menu">
        
      <div className="cont-menu">
        <nav>
          <a href="#">{user?.name}</a>
          <a href="/">Dashboard</a>
          <a href="/add-pet">Añadir mascota</a>
          <a href="/calendar">Calendario</a>
          <a href="#" onClick={logout}>Cerrar sesión</a>
        </nav>
      </div>
    </div>
  );
}
