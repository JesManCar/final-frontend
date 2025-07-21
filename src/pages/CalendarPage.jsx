
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
        <div style={{ height: '80%', width: '60%', position: 'relative', left: '250px', top: '50px' }}>
            <Calendar date={selectedDate} handleDateChange={handleDateChange} />
        </div>
        <div style={{ width: "15%", left: "77%", top:"-750px", position: "relative" }}>
            <CalendarForm date={selectedDate} />
        </div>
    </>
  );
}
