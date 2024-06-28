// src/components/UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import '../styles/UserProfile.css';

function UserProfile() {
  const { user, updateUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateUser({ ...user, [name]: value });
  };

  return (
    <div className="user-profile">
      <h2>Perfil del Usuario</h2>
      <form>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </div>
        {/* Otros campos necesarios */}
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default UserProfile;
