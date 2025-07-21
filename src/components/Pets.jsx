import Pet from '../components/Pet';
import { useContext, useEffect, useState} from 'react';
import { AuthContext } from '../context/authContext';
import {API} from '../api/axiosConfig';
import { PetsContext } from '../context/petsContext';
import { Link } from 'react-router-dom';

export default function Pets() {
    const [pets, setPets] = useState([]);
    const { user } = useContext(AuthContext);
    const { load } = useContext(PetsContext);
    console.log("User in Pets component:", user);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await API.get(`/pets/${user.id}`);
                //console.log("Mascotas del usuario:", response.data);
                setPets(response.data);
            } catch (error) {
                console.error("Error al cargar las mascotas:", error);
            }
        };
        fetchPets();
    }, [user.id]);

    useEffect(() => {
        if (pets.length > 0) {
            load(pets);
        }
    }, [pets, load]);

    let containerClass = 'pets-container';

    const rowCalculate = (l) => {
        if (l < 1) return 1;
        if (l < 2) return 2;
        let power = 1;
        while (power <= l) {
            power *= 2;
        }
        return power;
    }
    const numberToWord = (n) =>{
        //const words = {0: "zero",1: "one",2: "two",3: "three",4: "four",5: "five",6: "six",7: "seven",8: "eight",9: "nine",10: "ten" };
        const words = {0: "zero",1: "one",2: "two",3: "three"};
        if (n > 3 ) return "four-or-more"
        return words[n] || "unknown";
    }
    
    containerClass += ` ${numberToWord(Math.ceil(Math.sqrt(rowCalculate(pets.length))))}`;


    const handlePetClick = (pet) => {
        console.log("Pet clicked:", pet);
        // Navigate to the pet's detail page or perform any action
    };

    return (
      <div className={containerClass}>
        {pets.map((pet) => (
          <Pet key={pet.id} pet={pet} onClick={() => handlePetClick(pet)} />
        ))}
      <Link to="/add-pet" className="add-card">+</Link>
    </div>
    );
}