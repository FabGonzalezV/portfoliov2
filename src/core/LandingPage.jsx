import Navbar from "./Navbar"
import "./../css/styles.css"
import { Button, Social } from "../components/components";
export default function LandingPage() {
    const handleClick = () => {
        window.location.href = "/about";
        
    }
    return (
        <>
            <Navbar />
            <main>
                <section id='landin-page'>
                    <div className="lt-container mt-3">
                        <div className='lt-components-container'>
                            <div className="lt-components-main-elements-container">
                                <div className="lt-heading-container">
                                    <div className="lt-title-container">
                                        <h1 className='light-text'>Fabián González</h1>
                                        <div className="lt-text-subtitle-container">
                                            <h2>
                                                <div className="container-10gap">
                                                    <span className='light-text'>Desarrollador web</span>
                                                    <span className='red-text'>Full-stack</span>
                                                </div>
                                            </h2>

                                        </div>
                                    </div>
                                    <p className='white-text ft-16 ft-w-1'>
                                        Si buscas un programador proactivo, colaborador y motivado,
                                        <br />
                                        ¡estoy listo para formar parte de tu equipo!
                                    </p>
                                </div>
                                <div className="landing-btn-container" onClick={handleClick}>
                                    <Button background="bg-green" >Conoce mi experiencia</Button>
                                </div>
                            </div>
                            <Social /> 

                        </div>
                        <div className='lt-portrait'>
                            <img src={process.env.PUBLIC_URL + "/assets/images/portrait.png"} alt="profile_image" loading='lazy'/>
                        </div>
                    </div>
                </section>

            </main>

        </>
    );

}