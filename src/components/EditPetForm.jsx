import { useState  } from 'react';
import { AuthContext } from '../context/authContext';
import { useParams, useLocation } from 'react-router-dom';
import {API} from '../api/axiosConfig';
import  "../styles/form.style.css"

export default function EditPetForm() {
  const data = useLocation();
  const state = data.state.data;
  const [petName, setPetName] = useState(state.name);
  const [species, setSpecies] = useState(state.species);
  const [breed, setBreed] = useState(state.breed);
  const date = new Date(state.birthday);
  const [birthday, setBirthday] = useState(date.toISOString().split('T')[0]);
  const [image, setImage] = useState("");
  const params = useParams();

  const handleRegister = async e => {
    e.preventDefault();
    console.log("Actualizando mascota:", { petName, species, breed, birthday, image });
    try {
        const response = await API.put(`/update/${params.id}`, {
            name: petName,
            species,
            breed,
            birthday,
            image
        });
        /*const response = await fetch(`http://localhost:3001/update/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
            },
            body: {
                name: petName,
                species,
                breed,
                birthday,
                image
            },
        })*/
        console.log("Pet updated successfully:", response.data);
        feedback(); // Call feedback function to show success message
    } catch (error) {
        console.error("Error updating pet:", error);
    }
  }

      const feedback = () => {
        alert("Mascota actualizada correctamente");
        //window.location.href = '/dashboard'; // Redirigir al dashboard después de eliminar
    }
  

  return (
    <form onSubmit={handleRegister} method='PUT'>
      <h2>Actualización de Mascota</h2>
        <input type="text" value={petName} onChange={e => setPetName(e.target.value)} placeholder={petName} />
        <input type="text" value={species} onChange={e => setSpecies(e.target.value)} placeholder={species} />
        <input type="text" value={breed} onChange={e => setBreed(e.target.value)} placeholder={breed} />
        <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} placeholder={birthday} />
        <input type="file"  onChange={e => setImage(e.target.files[0])} id="image" name="image" />
      <button type="submit">Actualizar Mascota</button>
    </form>
  );
}
