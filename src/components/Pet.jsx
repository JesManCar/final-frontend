import { Link } from 'react-router-dom';

export default function Pet({ pet }) {
  //console.log("Pet component received:", pet);

  if (!pet) {
    return <div>No pet data available</div>;
  }
  if (!pet.name || !pet.species || !pet.breed || !pet.birthday) {
    return <div>Incomplete pet data</div>;
  }
  const petAge = new Date().getFullYear() - new Date(pet.birthday).getFullYear();
  let petAgeMonths = 0;
  if(petAge === 0) {
    petAgeMonths = new Date().getMonth() - new Date(pet.birthday).getMonth();
  }
  //console.log("Pet age calculated:", petAge);


  return (
    <>
    <Link to={`/pets/${pet.id}`}   className="pet-card" pet={pet}>
      <h2>{pet.name}</h2>
      <p>Species: {pet.species}</p>
      <p>Breed: {pet.breed} </p>
      {petAge > 0 ? (
        <p>Age: {petAge} years</p>
      ) : (
        <p>Age: {petAgeMonths} months</p>
      )}
      {/* <img src={pet.image} alt={`${pet.name}`} /> */}
    </Link>
    </>
  );
}