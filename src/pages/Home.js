import monImage from '../assets/hero-bg.jpg';
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
    );
}