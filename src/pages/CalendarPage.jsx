
import Nav from '../components/Nav';
import Calendar from '../components/Calendar';
import CalendarForm from '../components/CalendarForm';
import { useState } from 'react';

export default function CalendarPage() {

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    //alert(`Selected date: ${date.dateStr}`);
  }

  return (
    <>
        <Nav />
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80vh', width: '80%', position: 'relative', left: '200px'}}>
            <div style={{ flex: 1, height: '75vh', width: '75%', marginLeft: "10px", marginRight: "30px" }}>
            <Calendar date={selectedDate} handleDateChange={handleDateChange}  />
            </div>
            <div style={{ flex: 2 ,width: '20%' }}>
            <CalendarForm date={selectedDate}  />
            </div>
        </div>
    </>
  );
}
