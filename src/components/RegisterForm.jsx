import { useState, useContext } from 'react';
import {API} from '../api/axiosConfig';
import { AuthContext } from '../context/authContext';
import  "../styles/form.style.css"

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [postal, setPostal] = useState('');
  const { login } = useContext(AuthContext);

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/register', { email, password, username, country, city, address, postal });
      login(res.data.token);
    } catch {
      alert('Error al registrar');
    }
  };

  

  return (
    <form onSubmit={handleRegister}>
      <h2>Registro</h2>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
      <input type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder="Pais" />
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Ciudad" />
      <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Direccion" />
      <input type="text" value={postal} onChange={e => setPostal(e.target.value)} placeholder="Codigo Postal" />
      <button type="submit">Registrarse</button>
    </form>
  );
}
