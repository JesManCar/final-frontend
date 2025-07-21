
import Nav from '../components/Nav';
import { useLocation, Link } from 'react-router-dom';
import {API} from '../api/axiosConfig';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';


export default function DeletePet() {
    const { user } = useContext(AuthContext);
    const data = useLocation();
    const pet = data.state.data;

    const handleDelete = async () => {
        console.log("Deleting pet:", user);
        try {
            const response = await API.delete(`/delete/${pet.id}&userId=${user.id}`);
            console.log("Pet deleted successfully:", response.data);
            feedback(); // Call feedback function to show success message
            // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
        } catch (error) {
            console.error("Error deleting pet:", error);
            // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
        }
    }
    const feedback = () => {
        alert("Mascota eliminada correctamente");
        window.location.href = '/dashboard'; // Redirigir al dashboard después de eliminar
    }

  return (
    <div>
        <Nav />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '80%', position: 'relative', left: '200px' }}>
          <div className="">
            <h2>¿Estás seguro de que deseas eliminar esta mascota?</h2>
            <p>Nombre: {pet.name}</p>
          </div>
          <div className="pet-actions">
            <button className="delete-card" onClick={handleDelete}>Eliminar</button>
            <Link to="/" className="cancel-card"><button>Cancelar</button></Link>
        </div>
    </div>
        </div>
  );
}
