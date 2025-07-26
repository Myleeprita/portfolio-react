import monImage from '../assets/hero-bg.jpg';
import '../App.css';

export default function Home() {
    return (
        <div className="position-relative text-center">
            <img src={monImage} alt="Mon Image" className="img-fluid w-100" />

            <div className="overlay-text">
                <h1 className="text-color"> Bonjour, je suis John Doe </h1>
                <h2 className="text-color"> Développeur web full stack </h2>
            </div>
        </div>
    )
}