import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/"> John Doe </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/"> Home </Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/services"> Services </Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/portfolio"> Portfolio </Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact"> Contact </Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/mentions"> Mentions légales </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}