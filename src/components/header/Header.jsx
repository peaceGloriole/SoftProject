import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <img src="./images/headphones.png" />
                    <Link to="#">Home</Link>
                    <ul>
                        <li><Link to="#">Catalog</Link></li>
                        <li><Link to="#">Search</Link></li>
                        <li><Link to="#">Login</Link></li>
                        <li><Link to="#">Register</Link></li>
                        <li><Link to="#">Create Album</Link></li>
                        <li><Link to="#">Logout</Link></li>
                    </ul>
            </nav>
        </header>
    );
}