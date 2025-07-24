import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";






import "../styles/nav.style.css";

export default function Nav() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container-menu">
      <div className="cont-menu">
        <nav>
          <p><MdOutlinePersonOutline />{user?.name}</p>
          <a href="/"><MdOutlineDashboard />Dashboard</a>
          <a href="/add-pet"><MdOutlinePets />Añadir mascota</a>
          <a href="/calendar"><MdOutlineCalendarMonth />Calendario</a>
          <a href="#" onClick={logout}><MdOutlineLogout />Cerrar sesión</a>
        </nav>
      </div>
    </div>
  );
}
