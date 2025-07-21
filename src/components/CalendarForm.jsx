import { useEffect, useState, useContext} from "react";
import { PetsContext } from '../context/petsContext';
import { AuthContext } from '../context/authContext';
import { API } from '../api/axiosConfig';

const EventType = {
    1: "Paseo",
    2: "Visita Veterinario",
    3: "Operacion Veterinaria",
    9: "Adopcion",
    4: "Vacunas",
    5: "Quedada Grupal",
    6: "Desparasitante",
    7: "Baño",
    10: "Peluqueria",
    8: "Otros"
}


export default function CalendarForm({date}){
    const { user } = useContext(AuthContext);
    const { pets } = useContext(PetsContext);
    const [readOnly, setReadOnly] = useState(true);
    const [dateStr, setDateStr] = useState(date.dateStr || "dd/mm/aaaa");
    const [selectedPet, setSelectedPet] = useState("");
    const [eventTitle, setEventTitle] = useState("");
    const [eventType, setEventType] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventCity, setEventCity] = useState("");
    const [eventAddress, setEventAddress] = useState("");
    const [eventPostal, setEventPostal] = useState("");


    useEffect (() => {
        if (date) {
            console.log(`Selected date in CalendarForm:`);
            console.log(date);
            setDateStr(date.dateStr);
            setReadOnly(false);
        } else {
            clearForm();
        }
    }, [date]);

    const  clearForm = () => {
        console.log("Clearing form");
        setDateStr("dd/mm/aaaa");
        setReadOnly(true);
        const inputs = document.querySelectorAll('.calendar-form input');
        inputs.forEach(input => {
            input.value = '';
        });
        document.querySelector('.calendar-form textarea').value = '';
        document.querySelector('.calendar-form select').selectedIndex = 0;
        console.log("Form cleared");

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!dateStr || !selectedPet || !eventTitle || !eventType || !eventDescription || !eventCity || !eventAddress || !eventPostal) {
            alert(`Por favor, completa todos los campos dateStr: ${dateStr},
                selectedPet: ${selectedPet},
                eventTitle: ${eventTitle},
                eventType: ${eventType},
                eventDescription: ${eventDescription},
                eventCity: ${eventCity},
                eventAddress: ${eventAddress},
                eventPostal: ${eventPostal}`);
            return;
        }
        console.log("Submitting form with the following data:");
        const res = await API.post(
            '/events/add-event', 
            { user: user.id, dateStr, selectedPet, eventType, eventTitle, eventDescription, eventCity, eventAddress, eventPostal }
        )
        alert(res.data.message);
    }

    return (
        <form readOnly={readOnly} className="calendar-form" onSubmit={handleSubmit}>
            <h2>Añadir Eventos</h2>
            <input readOnly={readOnly} type="date" value={dateStr} onClick={(e) => e.preventDefault()} />
            <select readOnly={readOnly} disabled={readOnly} onChange={(e) => setSelectedPet(e.target.value)}>
                <option value="" selected>Selecciona Mascota</option>
                {pets.map((pet) => (
                    <option key={pet.id} value={pet.id}>{pet.name}</option>
                ))}
            </select>
            <input readOnly={readOnly} disabled={readOnly} type="text" placeholder="Titulo del Evento" onChange={(e) => setEventTitle(e.target.value)} />
            <select readOnly={readOnly} disabled={readOnly} onChange={(e) => setEventType(e.target.value)}>
                <option value="" selected onChange={(e) => {setEventType(e.target.value)}}>Selecciona Tipo de Evento</option>
                {Object.entries(EventType).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                ))}
            </select>
            <textarea readOnly={readOnly} disabled={readOnly} rows="5" cols="40" placeholder="Descripcion del Evento" onChange={(e) => setEventDescription(e.target.value)}></textarea>
            <input readOnly={readOnly} disabled={readOnly} type="text" placeholder="Ciudad del Evento" onChange={(e) => setEventCity(e.target.value)} />
            <input readOnly={readOnly} disabled={readOnly} type="text" placeholder="Ubicacion del Evento" onChange={(e) => setEventAddress(e.target.value)} />
            <input readOnly={readOnly} disabled={readOnly} type="text" placeholder="Codigo Postal del Evento" onChange={(e) => setEventPostal(e.target.value)} />
            <button type="submit" readOnly={readOnly} disabled={readOnly}>Agregar Evento</button>
        </form>
    );
}

/*
---- HistoricalEventsPetOwner ----
Persona
Mascota
EventId
Date
Assits (true)

---- Event ----
Name
EventType (enum)
Description
City
Address
Postal
*/ 