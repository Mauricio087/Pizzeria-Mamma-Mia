import { useState } from 'react'

const LoginPage = () => {
    const [user, setUser] = useState({
      email: '',
      password: ''
    })

    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const { email, password } = user

        if (password.length < 6) {
          alert('La contraseña debe tener al menos 6 caracteres')
          return;
        }

      alert('Inicio de sesión exitoso')
    }

    return (
        <div className="card mt-5 mx-auto" style={{ maxWidth: "400px" }}>
            <div className="card-body">
              <h5 className="card-title text-center">Iniciar Sesión</h5>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor='email' className='form-label'>Email</label>
                        <input
                          type='email'
                          name='email'
                          value={user.email}
                          onChange={handleChange}
                          className='form-control'
                          placeholder='Introduce el correo'
                        />
                    </div>

                    <div className="mb-3">
                      <label htmlFor='password' className='form-label'>Contraseña</label>
                        <input
                          type='password'
                          name='password'
                          value={user.password}
                          onChange={handleChange}
                          className='form-control'
                          placeholder='Introduce tu contraseña'
                        />
                    </div>

                    <button type='submit' className='btn btn-primary w-100' disabled={!user.email || !user.password}>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage