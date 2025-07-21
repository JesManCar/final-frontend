
import { useEffect, useState } from 'react';
import { API } from '../api/axiosConfig'
import Nav from '../components/Nav';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import { PetsContext } from '../context/petsContext';


export default function EventsPage () {
    const [event, setEvent] = useState({});
    const { id } = useParams();
    const { state } = useLocation();
    console.log("EventsPage component rendered",id);
    console.log(state);

    useEffect(() => {
        if (state) {
            console.log("Event passed from Calendar:", state);
            setEvent(state.event);
        } else {
            const fetchEvent = async () => {
                try {
                    const response = await API.get(`/events/single/${id}`);
                    console.log("Fetched event:", response.data);
                    setEvent(response.data);
                } catch (error) {
                    console.error("Error fetching event:", error);
                }
            };
            fetchEvent();
        }
    }, []);


  return (
    <div>
        <Nav />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '80vh', width: '80%', position: 'relative', left: '200px' }}>
            <h1>Evento:</h1>
            <h2>{event?.title}</h2>
            <p>{event?.description}</p>
            <p>Mascota: {event?.pet?.name}</p>
            <p>Fecha: {new Date(event?.start).toLocaleDateString()}</p>
            <div>
                <p>Dirección: {event?.address}</p>
                <p>Ciudad: {event?.city}</p>
                <p>Código Postal: {event?.postal}</p>
            </div>
        </div>
        <Link to="/calendar" style={{ position: 'absolute', top: '20px', right: '20px', textDecoration: 'none', color: 'blue' }}>Volver al Calendario</Link>
    </div>
  );
}
