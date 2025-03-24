import { useState } from 'react';

const RegisterPage = () => {
    const [users, setUsers] = useState({
      email: '',
      password: '',
      confirmPassword: ''
    })

    const handleChange = (e) => {
      setUsers({ ...users, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
      e.preventDefault()

      const { email, password, confirmPassword } = users

      if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres')
        return
      }

      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden')
        return
      }

      alert('Registro exitoso')
      setUsers({ email: '', password: '', confirmPassword: ''})
    }

    return (
        <div className="card mt-5 mx-auto " style={{ maxWidth: "400px" }}>
            <div className="card-body">
              <h5 className="card-title text-center">Register</h5>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor='email' className='form-label'>Email</label>
                        <input
                          type='email'
                          name='email'
                          value={users.email}
                          onChange={handleChange}
                          className='form-control'
                          placeholder='Introduce el correo'
                          required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input
                          type='password'
                          name='password'
                          value={users.password}
                          onChange={handleChange}
                          className='form-control'
                          placeholder='Introduce tu contraseña'
                          required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor='confirmPassword' className='form-label'>Confirm your password</label>
                        <input
                          type='password'
                          name='confirmPassword'
                          value={users.confirmPassword}
                          onChange={handleChange}
                          className='form-control'
                          placeholder='Confirma tu contraseña'
                          required
                        />
                    </div>

                    <button type='submit' className='btn btn-primary w-100' disabled={!users.email || !users.password || !users.confirmPassword}>Registrar</button>
                </form>
            </div>
        </div>
    );
};

  export default RegisterPage