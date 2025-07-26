import { Link } from 'react-router-dom';

// BARRE DE NAVIGATION AVEC SON MENU BURGER RESPONSIVE MOBILE
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> John Doe </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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