
import { useEffect, useState } from 'react';
import {API} from '../api/axiosConfig'
import Nav from '../components/Nav';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { PetsContext } from '../context/petsContext';


export default function PetPage () {
  //console.log("PetPage component received pet:", _pet);
    const [pet, setPet] = useState({});
    const { pets } = useContext(PetsContext);
    const params  = useParams();
    //console.log("PetPage component received pet ID:", petId);

    //console.log("PetPage component params:", params);
    //console.log("PetPage component pet ID:", pets.find(p => p.id === parseInt(params.id)));
    useEffect(() => {
      setPet(pets.find(p => p.id === parseInt(params.id)) || {});
    }, [params.id, pets]);


  return (
    <div>
        <Nav />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '80%', position: 'relative', left: '200px' }}>
          <div className="">
            <h1>Pet Details</h1>
            <h2>Name: {pet.name}</h2>
            <p>Species: {pet.species}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age} years</p>
            <div className="pet-actions">
              <Link to={`/edit-pet/${pet.id}`} className="edit-card" state={{data: pet}}>Edit</Link>
              <Link to={`/delete-pet/${pet.id}`} className="delete-card" state={{data: pet}}>Delete</Link>
            </div>
          </div>
        </div>
    </div>
  );
}
