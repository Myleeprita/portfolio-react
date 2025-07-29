import MonImage from "../assets/banner.jpg";
import imageFresh from "../assets/fresh-food.jpg";
import imageRestaurant from "../assets/restaurant-japonais.jpg";
import imageEspace from "../assets/espace-bien-etre.jpg";
import imageSeo from "../assets/seo.jpg";
import imageCoder from "../assets/coder.jpg";
import imageScreen from "../assets/screens.jpg";
import '../App.css';

export default function Portfolio() {
    return (
        <>
            {/* IMAGE-BANNIERE */}
            <div>
                <img src={MonImage} alt="img" className="img-fluid w-100 img-banner" />
            </div>

            {/* CARDS REALISATION */}
            <section className="py-5 mt-5">
                <div className="container">
                    <div className="text-center mb-5 px-3">
                        <h1 className="fw-bold"> Portfolio </h1>
                        <p className="mb-2 pb-4"> Voici quelques-unes de mes réalisation. </p>
                        <div className="line"></div>
                    </div>
                    <div className="row justify-content-center gy-4">
                        <div className="col-md-4">
                            <div className="card text-center h-100">
                                <img src={imageFresh} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="fw-bold"> Fresh Food </h3>
                                    <p>
                                        Site de vente de produits frais en ligne
                                    </p>
                                    <button type="button" className="btn btn-primary"> Voir le site </button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted"> Site réalisé avec PHP et MySQL </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center h-100">
                                <img src={imageRestaurant} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="fw-bold"> Restaurant Akira </h3>
                                    <p>
                                        Site de vente de produits frais en ligne
                                    </p>
                                    <button type="button" className="btn btn-primary"> Voir le site </button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted"> Site réalisé avec WordPress </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center h-100">
                                <img src={imageEspace} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="fw-bold"> Espace bien-être </h3>
                                    <p>
                                        Site de vente de produits frais en ligne
                                    </p>
                                    <button type="button" className="btn btn-primary"> Voir le site </button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted"> Site réalisé avec LARAVEL </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center h-100">
                                <img src={imageSeo} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="fw-bold"> SEO </h3>
                                    <p>
                                        Amélioration du référencement d'un site e-commerce
                                    </p>
                                    <button type="button" className="btn btn-primary"> Voir le site </button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted"> Utilisation des outils SEO </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center h-100">
                                <img src={imageCoder} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="fw-bold"> Création d'une API </h3>
                                    <p>
                                        Création d'une API RESTFULL publique
                                    </p>
                                    <button type="button" className="btn btn-primary"> Voir le site </button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted"> PHP - SYMFONY </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center h-100">
                                <img src={imageScreen} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="fw-bold"> Maquette d'un site web </h3>
                                    <p>
                                        Création du prototype d'un site
                                    </p>
                                    <button type="button" className="btn btn-primary"> Voir le site </button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted"> Réalisé avec FIGMA </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}