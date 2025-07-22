import { Link } from 'react-router-dom';
import calculateAge from '../helpers/calculateAge';

export default function Pet({ pet }) {
  //console.log("Pet component received:", pet);

  if (!pet) {
    return <div>No pet data available</div>;
  }
  if (!pet.name || !pet.species || !pet.breed || !pet.birthday) {
    return <div>Incomplete pet data</div>;
  }

  const { years: petAge, months: petAgeMonths, days: petAgeDays } = calculateAge(pet.birthday);


  return (
    <>
    <Link to={`/pets/${pet.id}`}   className="pet-card" pet={pet}>
      <h2>{pet.name}</h2>
      <p>{pet.species}</p>
      <p>{pet.breed} </p>
      <p>Edad: {petAge} años, {petAgeMonths} meses, {petAgeDays} días</p>
      {/* <img src={pet.image} alt={`${pet.name}`} /> */}
    </Link>
    </>
  );
}