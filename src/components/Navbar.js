import { NavLink, Link } from 'react-router-dom';
import '../App.css';

// BARRE DE NAVIGATION AVEC SON MENU BURGER RESPONSIVE MOBILE
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> JOHN DOE </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><NavLink to="/" className={({ isActive }) => 'nav-link text-uppercase' + (isActive ? ' active-link' : '')}> Home </NavLink></li>
                        <li className="nav-item"><NavLink to="/services" className={({ isActive }) => 'nav-link text-uppercase' + (isActive ? ' active-link' : '')}> Services </NavLink></li>
                        <li className="nav-item"><NavLink to="/portfolio" className={({ isActive }) => 'nav-link text-uppercase' + (isActive ? ' active-link' : '')}> Portfolio </NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" className={({ isActive }) => 'nav-link text-uppercase' + (isActive ? ' active-link' : '')}> Contact </NavLink></li>
                        <li className="nav-item"><NavLink to="/mentions" className={({ isActive }) => 'nav-link text-uppercase' + (isActive ? ' active-link' : '')}> Mentions légales </NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}