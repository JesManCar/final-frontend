
import Pets from '../components/Pets';
import Nav from '../components/Nav';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom';

import '../styles/grid.styles.css';
import "../styles/calendar.style.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleCalendarClick = () => {
    navigate('/calendar');
  }

  return (
    <div>
      <Nav />
      <div className="grid">
        <div className="item item-0 desktop-only">
            <Pets />
        </div>
        <div className="item item-1 desktop-only">🚧 Work In Progress 1</div>
        <div className="item item-2 desktop-only" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 

          <div style={{ width: '80%', cursor: 'pointer' }} onClick={handleCalendarClick}>
            <FullCalendar
                plugins={[dayGridPlugin]}
                headerToolbar={false}
                initialView="dayGridMonth"
                locale='es'
                expandRows={true}
                aspectRatio={1.3}
            />
          </div>
        </div>  
        <div className="item item-3 desktop-only">🚧 Work In Progress 3</div>
      </div>
  </div>
  );
}
