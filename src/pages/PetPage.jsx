
import { useEffect, useState } from 'react';
import { API } from '../api/axiosConfig'
import Nav from '../components/Nav';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { PetsContext } from '../context/petsContext';
import calculateAge from '../helpers/calculateAge';

export default function PetPage () {
    const [pet, setPet] = useState({});
    const { pets } = useContext(PetsContext);
    const params  = useParams();
    useEffect(() => {
      setPet(pets.find(p => p.id === parseInt(params.id)) || {});
    }, [params.id, pets]);

     const { years: petAge, months: petAgeMonths, days: petAgeDays } = calculateAge(pet.birthday);
    


  return (
    <div>
        <Nav />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '80%', position: 'relative', left: '200px' }}>
          <div className="pet-info">
            <h1>Información Mascota</h1>
            <h2>{pet.name}</h2>
            <p>{pet.species}</p>
            <p>{pet.breed}</p>
            <p>Edad: {petAge} años, {petAgeMonths} meses, {petAgeDays} días</p>
            <div className="pet-actions">
              <Link to={`/edit-pet/${pet.id}`} className="edit-card" state={{data: pet}}>Edit</Link>
              <Link to={`/delete-pet/${pet.id}`} className="delete-card" state={{data: pet}}>Delete</Link>
            </div>
          </div>
        </div>
    </div>
  );
}
