import { Helmet } from 'react-helmet';

export default function Mentions() {
    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>

            <section className="mt-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold"> Mentions légales </h1>
                    <div className=" mt-3 line-contact"></div>
                </div>

                {/* ACCORDEON */}

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="accordion col-12 col-md-10 col-lg-8" id="accordionContainer">

                        {/* FIRST */}

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headerOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Editeur du site
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headerOne" data-bs-parent="#accordionContainer">
                                    <div className="accordion-body">
                                        <h3> John Doe </h3>
                                        <ul className="list-unstyled">
                                            <li> <i className="bi bi-map"></i> 40 rue Laure Diebold </li>
                                            <li> <i className="bi bi-geo-alt"></i> 69009 Lyon, France </li>
                                            <li> <i className="bi bi-phone"></i> 10 20 30 40 50 </li>
                                            <li> <i className="bi bi-envelope-at"></i> john.doe@gmail.com </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* SECOND */}

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headerTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Hébergeur
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headerTwo" data-bs-parent="#accordionContainer">
                                    <div className="accordion-body">
                                        <h3> <strong> alwaysdata </strong> </h3>
                                        <p> 91 Rue du Faubourg Saint-Honoré, 75008 Paris </p>
                                        <i className="bi bi-globe"><a href="https://www.alwaysdata.com/fr/" target="_blank" rel="noreferrer"> www.alwaysdata.com </a></i>
                                    </div>
                                </div>
                            </div>

                            {/* LAST */}

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headerThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Crédits
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headerThree" data-bs-parent="#accordionContainer">
                                    <div className="accordion-body">
                                        <h3> <strong> Crédits </strong> </h3>
                                        <p> Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/login" target="_blank" rel="noreferrer"> Centre Européen de formation </a> </p>
                                        <p> <em> Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer"> Pixabay </a> </em> </p>
                                        <p> <em> La favicon de ce site a été fournie par <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer"> John doe Icons erstellt von Freepik - Flaticon </a> </em> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}