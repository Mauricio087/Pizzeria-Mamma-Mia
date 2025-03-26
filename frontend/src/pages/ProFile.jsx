import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { token, getProfile, logout } = useUser();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getProfile()
        .then((data) => {
          setProfile(data);
        })
        .catch((err) => {
          console.error("Error al obtener perfil:", err);
          setError("No se pudo obtener el perfil.");
        });
    } else {
      setError("No hay token disponible.");
    }
  }, [token, getProfile]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (error) {
    return (
      <div className= "container mt-5">
        <p>{error}</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    );
  }

  if (!profile) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Email: {profile.email}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;