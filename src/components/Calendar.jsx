import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { API } from '../api/axiosConfig';
import "../styles/nav.style.css";
import "../styles/calendar.style.css";
import { useEffect, useContext, useState } from 'react';

export default function Calendar({  handleDateChange }) {
  const { user } = useContext(AuthContext);
  const [ events, setEvents ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch events from the backend when the component mounts
    const fetchEvents = async () => {
      try {
        const response = await API.get(`/events/${user.id}`);
        console.log("Fetched events:", response.data);
        const _events = response.data.map(event => ({
          title: event.event.name,
          description: event.event.desc,
          address: event.event.address,
          city: event.event.city,
          postal: event.event.postal,
          start: event.date,
          id: event.id,
          pet: event.pet,
          allDay: true,
        }));
        setEvents(_events);
        console.log("Events fetched:", _events);
        //console.log("Events fetched:", response.data);
        // Here you can set the events in the state if needed
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, [ user.id]);

  const handleEventClick = (e) => {
    console.log(e.event.id)
    events.forEach(event => {
      console.log("Event ID:", event.id);
    });
    const event = events.find(event => event.id == e.event.id);
    if (!event) {
      console.error("Event not found:", e.id);
      return;
    }
    navigate(`/events/${event.id}`, {
      state: {
        event: event,
      }});
  }

  return (
      <FullCalendar
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: null
        }}
        locale={esLocale}
        aspectRatio="1.5"
        plugins={[dayGridPlugin, interactionPlugin]}
        selectable={true}
        selectMirror={false}
        unselectAuto={true}
        unselectCancel=".calendar-form"
        dateClick={handleDateChange}
        unselect={() => handleDateChange("")}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        
      />
  );
}
