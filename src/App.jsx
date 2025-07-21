import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PetPage from './pages/PetPage';
import RegisterPet from './pages/RegisterPet';
import CalendarPage from './pages/CalendarPage';
import EventsPage from './pages/EventsPage';
import EditPet from './pages/EditPet';
import DeletePet from './pages/DeletePet';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("App component isAuthenticated:", isAuthenticated); 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/add-pet"
        element={isAuthenticated ? <RegisterPet /> : <Navigate to="/" />}
      />
      <Route
        path="/pets/:id"
        element={isAuthenticated ? <PetPage /> : <Navigate to="/" />}
      />
      <Route
        path="/edit-pet/:id"
        element={isAuthenticated ? <EditPet /> : <Navigate to="/" />}
      />
      <Route
        path="/delete-pet/:id"
        element={isAuthenticated ? <DeletePet /> : <Navigate to="/" />}
      />
      <Route
        path="/calendar"
        element={isAuthenticated ? <CalendarPage /> : <Navigate to="/" />}
      />
      <Route
        path="/events/:id"
        element={isAuthenticated ? <EventsPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
