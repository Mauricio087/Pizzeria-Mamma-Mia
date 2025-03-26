import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      alert("Inicio de sesión exitoso");
      navigate("/");
    } catch (error) {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="card mt-5 mx-auto" style={{ maxWidth: "400px" }}>
      <h5 className="card-title text-center">Iniciar Sesión</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='form-label'>Email:</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className='form-label'>Contraseña:</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button type="submit" className='btn btn-primary w-100'>Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;