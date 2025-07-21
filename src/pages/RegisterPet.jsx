
import Nav from '../components/Nav';
import RegisterPetForm from '../components/RegisterPetForm';


export default function RegisterPet() {

  return (
    <div>
        <Nav />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '80%', position: 'relative', left: '200px' }}>
          <div className="">
            <RegisterPetForm/>
          </div>
        </div>
    </div>
  );
}
