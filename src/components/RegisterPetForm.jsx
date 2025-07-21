import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import {API} from '../api/axiosConfig';
import  "../styles/form.style.css"

export default function RegisterPetForm() {
  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [birthday, setBirthday] = useState('');
  const { user } = useContext( AuthContext );

  const handleRegister = async e => {
    e.preventDefault();
    console.log("Registrando mascota:", { petName, species, breed, birthday, userId: user.id });
    try {
      const response = await API.post('/creation/pet', {
        name: petName,
        species,
        breed,
        birthday,
        ownerId: user.id
      });
      console.log("Mascota registrada:", response.data);
      setPetName('');
      setSpecies('');
      setBreed('');
      setBirthday('');
      feedback(); // Call feedback function to show success message
    } catch (error) {
      console.error("Error al registrar mascota:", error);
    }  };

    const feedback = () => {
        alert("Mascota registrada correctamente");
        window.location.href = '/dashboard'; // Redirigir al dashboard después de eliminar
    }
  

  return (
    <form onSubmit={handleRegister}>
      <h2>Registro</h2>
        <input type="text" value={petName} onChange={e => setPetName(e.target.value)} placeholder="Nombre de la mascota" />
        <input type="text" value={species} onChange={e => setSpecies(e.target.value)} placeholder="Especie" />
        <input type="text" value={breed} onChange={e => setBreed(e.target.value)} placeholder="Raza" />
        <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} placeholder="Fecha de nacimiento" />
      <button type="submit">Añadir Mascota</button>
    </form>
  );
}
