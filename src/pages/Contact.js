import '../App.css';

export default function Contact() {
    return (
        <>
            <section className="mt-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold"> Contact </h1>
                    <p> Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact. </p>
                    <div className="line-contact"></div>
                </div>
                <div  className="container px-4 shadow p-3 mb-5 bg-body rounded">
                    <div className="row justify-content-center mb-5">

                        <div className="col-12 col-lg-6">
                            <h3 className="fw-bold border-bottom border-3 py-2 border-primary"> Formulaire de contact </h3>
                            <div className="mt-5">
                                <form>
                                    <div className="spacing">
                                        <label htmlFor="nom" className="form-label"></label>
                                        <input type="text" className="form-control" id="nom" placeholder="Votre Nom" required/>
                                    </div>

                                    <div className="spacing">
                                        <label htmlFor="email" className="form-label"></label>
                                        <input type="email" className="form-control" id="email" placeholder="Votre adresse email" required/>
                                    </div>

                                    <div className="spacing">
                                        <label htmlFor="tel" className="form-label"></label>
                                        <input type="tel" className="form-control" id="tel" placeholder="Votre numéro de téléphone" required/>
                                    </div>

                                    <div className="spacing">
                                        <label htmlFor="sujet" className="form-label"></label>
                                        <input type="text" className="form-control" id="sujet" placeholder="Sujet" required/>
                                    </div>

                                    <div className="spacing">
                                        <label htmlFor="message" className="form-label"></label>
                                        <textarea className="form-control" id="message" rows="18" placeholder="Votre message" required></textarea>
                                    </div>
                                    <div className="text-center mt-3">
                                        <button type="submit" className="btn btn-primary"> Envoyer </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <h3 className="fw-bold border-bottom border-3 py-2 border-primary"> Mes coordonnées </h3>
                            <div className="mt-5">
                                <h3> John Doe </h3>
                                <ul className="list-unstyled">
                                    <li> <i className="bi bi-map"></i> 40 rue Laure Diebold </li>
                                    <li> <i className="bi bi-geo-alt"></i> 69009 Lyon, France </li>
                                    <li> <i className="bi bi-phone"></i> 10 20 30 40 50 </li>
                                    <li> <i className="bi bi-envelope-at"></i> john.doe@gmail.com </li>
                                </ul>
                                <div className="ratio ratio-1x1">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657541047!2d4.796403976715944!3d45.7786657124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1753779542127!5m2!1sfr!2sfr"
                                        title="Google Map">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}