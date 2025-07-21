
import Nav from '../components/Nav';
import EditPetForm from '../components/EditPetForm';


export default function EditPet() {

  return (
    <div>
        <Nav />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '80%', position: 'relative', left: '200px' }}>
          <div className="">
            <EditPetForm/>
          </div>
        </div>
    </div>
  );
}
