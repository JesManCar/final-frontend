import { useState  } from 'react';
import { AuthContext } from '../context/authContext';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {API} from '../api/axiosConfig';
import  "../styles/form.style.css"

export default function EditPetForm() {
  const data = useLocation();
  const navigate = useNavigate();
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
    //console.log("Actualizando mascota:", { petName, species, breed, birthday, image });
    try {
        const response = await API.put(`/update/${params.id}`, {
            name: petName,
            species,
            breed,
            birthday,
            image
        });
        //console.log("Mascota actualizada:", response.data);
        feedback(response.data); 
    } catch (error) {
        console.error("Error al actualizar mascota:", error);
    }
  }

      const feedback = (data) => {
        alert(`Mascota actualizada correctamente: ${data.name}`);
        navigate("/dashboard");
    }
  

  return (
    <form onSubmit={handleRegister} method='PUT'>
      <h2>Actualización de Mascota</h2>
        <input type="text" value={petName} onChange={e => setPetName(e.target.value)} placeholder={petName} />
        <input type="text" value={species} onChange={e => setSpecies(e.target.value)} placeholder={species} />
        <input type="text" value={breed} onChange={e => setBreed(e.target.value)} placeholder={breed} />
        <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} placeholder={birthday} />
        {/* <input type="file"  onChange={e => setImage(e.target.files[0])} id="image" name="image" /> */}
      <button type="submit">Actualizar Mascota</button>
    </form>
  );
}
