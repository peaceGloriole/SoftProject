import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <header>
            <nav>
                <img src="./images/headphones.png" />
                <Link to="/">Home</Link>
                <ul>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/albums">Catalog</Link></li>
                            <li><Link to="/search">Search</Link></li>
                            <li><Link to="/albums/create">Create Album</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}