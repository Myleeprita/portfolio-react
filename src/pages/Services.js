import MonImage from "../assets/banner.jpg";
import '../App.css';

export default function Services() {
    return (
        <>
            {/* IMAGE-BANNIERE */}
            <div>
                <img src={MonImage} alt="img" className="img-fluid w-100 img-banner" />
            </div>

            {/* BLOC CARDS SERVICES */}

            <section className="py-5 mt-5">
                <div className="container">
                    <div className="text-center mb-5 px-3">
                        <h1 className="fw-bold"> Mon offre de services </h1>
                        <p className="mb-2 pb-4"> Voici les prestations sur lesquelles je peux intervenir </p>
                        <div className="line"></div>
                    </div>
                    <div className="row justify-content-center gy-4">
                        <div className="col-md-4">
                            <div className="card text-center h-100 p-3">
                                <p className="card-icon py-4"><i className="bi bi-brush"></i></p>
                                <h3 className="fw-bold"> UX Design </h3>
                                <p> L'UX Design est une discipline qui consiste à
                                    concevoir des produits (sites web, applications
                                    mobiles, logiciels, objets connectés, etc.) en plaçant
                                    l'utilisateur au centre des préoccupations. L'objectif
                                    est de rendre l'expérience utilisateur la plus fluide et
                                    agréable possible.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center h-100 p-3">
                                <p className="card-icon py-4"><i className="bi bi-code-slash"></i></p>
                                <h3 className="fw-bold"> Développement web </h3>
                                <p> Le développement de site web consiste à créer des
                                    sites internet en utilisant des langages de 
                                    programmation (HTML, CSS, JavaScript, PHP, etc.)
                                    et des frameworks (Bootstrap, React, Angular, etc.).
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center h-100 p-3">
                                <p className="card-icon py-4"><i className="bi bi-search"></i></p>
                                <h3 className="fw-bold"> Référencement </h3>
                                <p> Le référencement naturel (SEO) est une technique
                                    qui consiste à optimiser un site web pour le faire
                                    remonter dans les résultats des moteurs de
                                    recherche (Google, Bing, Yahoo, etc.). L'objectif est
                                    d'attirer un maximum de visiteurs qualifiés sur le site.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}