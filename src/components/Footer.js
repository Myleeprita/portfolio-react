import { Link } from 'react-router-dom';
import '../App.css';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
            <div className="container">
                <div className="row">

                {/* première colonne / personal info */}

                    <div className="col-12 col-md-4">
                        <h3> John Doe </h3>
                        <ul className="list-unstyled">
                            <li> 40 rue Laure Diebold </li>
                            <li> 69009 Lyon, France </li>
                            <li> 10 20 30 40 50 </li>
                            <li> john.doe@gmail.com </li>
                        </ul>
                        <div className="d-flex gap-2">
                            <a href="https://github.com/Myleeprita" target="_blank" rel="noreferrer" className="social-icon">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://fr.linkedin.com/" target="_blank" rel="noreferrer" className="social-icon">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://x.com/i/flow/login" target="_blank" rel="noreferrer" className="social-icon">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>


                {/* deuxième colonne / Liens de la page */}

                    <div className="col-12 col-md-4">
                        <h3> Liens utiles </h3>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light text-decoration-none"> Accueil </Link></li>
                            <li><Link to="/services" className="text-light text-decoration-none"> Services </Link></li>
                            <li><Link to="/portfolio" className="text-light text-decoration-none"> Portfolio </Link></li>
                            <li><Link to="/contact" className="text-light text-decoration-none"> Me contacter </Link></li>
                            <li><Link to="/mentions" className="text-light text-decoration-none"> Mentions légales </Link></li>
                        </ul>
                    </div>


                {/* troisième colonne / Les projets */}

                    <div className="col-12 col-md-4">
                        <h3> Mes dernières réalisations </h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href='/portfolio' target="_blank" rel="noreferrer" className="text-light text-decoration-none"> Fresh Food </a>
                            </li>
                            <li>
                                <a href='/portfolio' target="_blank" rel="noreferrer" className="text-light text-decoration-none"> Restaurant Akira </a>
                            </li>
                            <li>
                                <a href='/portfolio' target="_blank" rel="noreferrer" className="text-light text-decoration-none"> Espace bien-être </a>
                            </li>
                            <li>
                                <a href='/portfolio' target="_blank" rel="noreferrer" className="text-light text-decoration-none"> SEO </a>
                            </li>
                            <li>
                                <a href='/portfolio' target="_blank" rel="noreferrer" className="text-light text-decoration-none"> Création d'une API </a>
                            </li>
                            <li>
                                <a href='/portfolio' target="_blank" rel="noreferrer" className="text-light text-decoration-none"> Maquette d'un site </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}