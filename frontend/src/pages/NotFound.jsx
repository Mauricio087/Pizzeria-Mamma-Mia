import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main className='container text-center mt-5 mb-5'>
            <img src="https://media1.tenor.com/m/lx2WSGRk8bcAAAAd/pulp-fiction-john-travolta.gif" alt='Página no encontrada' className='img-fluid w-15px h-20px'/>
            <h2 className='mt-4 text-dark'>what the hell!</h2>
            <Link to='/' className='btn btn-primary mt-3'>
                Volver al inicio
            </Link>
        </main>
    )
}

export default NotFound