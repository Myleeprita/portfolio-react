import monImage from '../assets/hero-bg.jpg';
import MonImage from '../assets/john-doe-about.jpg'
import '../App.css';
import { useEffect, useState } from 'react';

export default function Home() {
    //const [repos, setRepos] = useState([]);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/Myleeprita/repos')
            .then(response => response.json())
            //.then(data => setRepos(data))
            .catch(error => console.error('Erreur GitHub:', error));

        fetch('https://api.github.com/users/Myleeprita')
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(err => console.error('Erreur profil:', err));
    }, []);

    return (
        <>
            <div className="position-relative text-center">
                {/* IMAGE */}
                <img src={monImage} alt="img" className="img-fluid w-100 img-hero" />
                {/* TEXTE + BUTTON */}
                <div className="overlay-text">
                    <h1 className="text-light display-1"> Bonjour, je suis John Doe </h1>
                    <h2 className="text-light display-4"> Développeur web full stack </h2>
                    <button type="button" className="btn btn-danger px-4 py-2 mt-3" data-bs-toggle="modal" data-bs-target="#infoModal"> En savoir plus </button>
                </div>
                            {/* MODAL */}
                <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content bg-dark text-light border-secondary">
                            <div className="modal-header border-secondary">
                                <h1 className="modal-title fs-4" id="infoModalLabel"><strong> Mon profil GitHub </strong></h1>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body border-secondary">
                                {profile ? (
                                    <div className="row">
                                        <div className="col-md-6 text-center mb-3">
                                            <img
                                                src={profile.avatar_url}
                                                alt="avatar"
                                                className="img-fluid rounded-circle"
                                                style={{ maxWidth: '350px' }}
                                            />
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <p className="border-bottom py-2 border-secondary"><i className="bi bi-person"></i> {profile.login}</p>
                                            <p className="border-bottom py-2 border-secondary"><i className="bi bi-geo-alt"></i> {profile.location}</p>
                                            <p className="border-bottom py-2 border-secondary"><i className="bi bi-card-text"></i> {profile.bio || 'Pas de description'}</p>
                                            <p className="border-bottom py-2 border-secondary"><i className="bi bi-box"></i> Repositories : {profile.public_repos}</p>
                                            <p className="border-bottom py-2 border-secondary"><i className="bi bi-people"></i> Followers : {profile.followers}</p>
                                            <p><i className="bi bi-people"></i> Following : {profile.following}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p> Chargement du profil...</p>
                            )}
                            </div>
                            <div className="modal-footer border-secondary">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Fermer </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                                {/* SECTION PRESENTATION */}
            <section className="mt-5">
                <div className="container px-5 shadow p-3 mb-5 bg-body rounded">
                    <div className="row justify-content-center">
                        
                        {/* 1ER BLOC */}
                        
                        <div className="col-12 col-lg-6">
                            <h3 className="border-bottom border-3 py-2 border-primary"> A propos </h3>
                            <div>
                                <img src={MonImage} alt="img" className="img-fluid w-100 mb-3 mt-5" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tortor est. 
                                Proin in malesuada nisi, a hendrerit ipsum. Suspendisse potenti. Phasellus vel nunc odio. 
                                Suspendisse tortor elit, sollicitudin vel dapibus tempor, sagittis at mauris. Vivamus nec dui at ipsum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tortor est. 
                                Proin in malesuada nisi, a hendrerit ipsum. Suspendisse potenti. Phasellus vel nunc odio. 
                                Suspendisse tortor elit, sollicitudin vel dapibus tempor, sagittis at mauris. Vivamus nec dui at ipsum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tortor est. 
                                Proin in malesuada nisi, a hendrerit ipsum. Suspendisse potenti. Phasellus vel nunc odio. 
                                Suspendisse tortor elit, sollicitudin vel dapibus tempor, sagittis at mauris. Vivamus nec dui at ipsum.
                            </p>
                        </div>

                        {/* 2EME BLOC */}

                        <div className="col-12 col-lg-6">
                            <h3 className="border-bottom border-3 py-2 border-primary"> Mes compétences </h3>
                            <div className="mb-3 mt-5">
                                <p> HTML5 90% </p>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style={{ width: "90%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <p> CSS3 80% </p>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" aria-label="Info example" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <p> JAVASCRIPT 70% </p>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{ width: "70%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <p> PHP 60% </p>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <p> REACT 50% </p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-label="Default example" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}