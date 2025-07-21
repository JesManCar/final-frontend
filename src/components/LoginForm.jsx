import { useState, useContext } from 'react';
import {API} from '../api/axiosConfig';
import { AuthContext } from '../context/authContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/login', { email, password });
      console.log(res.data)
      login(res.data.token, res.data.user);
    } catch {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
