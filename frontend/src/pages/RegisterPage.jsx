import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [inputs, setInputs] = useState({ email: "", password: "", confirmPassword: "" });
  const { register } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.password !== inputs.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      await register({ email: inputs.email, password: inputs.password });
      alert("Registro exitoso");
      navigate("/");
    } catch (error) {
      alert("Error en el registro");
    }
  };

  return (
    <div className="card mt-5 mx-auto" style={{ maxWidth: "400px" }}>
      <h2 className="card-title text-center">Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='form-label'>Email:</label>
          <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className='form-label'>Contraseña:</label>
          <input type="password" name="password" value={inputs.password} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className='form-label'>Confirmar Contraseña:</label>
          <input type="password" name="confirmPassword" value={inputs.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" className='btn btn-primary w-100'>Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;