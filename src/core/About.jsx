import Navbar from "./Navbar"
import "./../css/styles.css"
import { Button } from "../components/components"
export function About() {
    const handleClick = ()=>{
        window.location.href = "/proyectos";
    }
    return (
        <>
            <Navbar />
            <main>
                <div className="about-container ">

                    <section className="mb-3 ">
                        <h1 className="white-text mb-3 ">¿Quien soy?</h1>
                        <div className='lt-portrait'>
                            <img src={process.env.PUBLIC_URL + "/assets/images/portrait.png"} alt="portrait" />
                        </div>

                        <p className="white-text ft-w-1">
                            Te invito a leer un pequeño resumen sobre mí,  mis, objetivos, y mis pasiones.
                        </p>

                    </section>
                    <div>
                        <section className="mb-3 ">

                            <h2 className="white-text"> Formación</h2>
                            <p className="white-text ft-w-1">
                                Actualmente soy egresado de la carrera de Ingenieria en Computación

                                cursada en la Universidad Tecnológica de la Mixteca, Oaxaca, México.

                                Como parte de mi  formación cuento con una subesecialidad en inteligencia artificial .
                            </p>
                            <p className="white-text ft-w-1">
                                Durante mi carrera y hasta este momento he estado puliendo mis
                                habilidades en la programación en general, y sobre todo en el desarrllo web.

                                teniendo una travesía por el diseño de bases de datos, UX/UI, frontend y backend.
                            </p>

                        </section>
                        <section className="mb-3 ">
                            <h2 className="white-text">
                                Areas de interes
                            </h2>
                            <p className="gray-text ft-w-1">
                                Por mi formación en Ingeniería tengo una inclinación por saber
                                cómo funcionan las cosas lo cual despierta el interes por el área
                                matemática de la Computación, los Compiladores, la IA, el Diseño y Analisis de algoritmos.
                            </p>
                        </section>

                        <section className="mb-3 ">
                            <h2 className="white-text mb-2">
                                Otros cursos
                            </h2>
                            <span className="white-text">
                                Acontinuación algunos de los cursos que he tomado:
                            </span>
                            <ul className="white-text ft-w-1">
                                <li className="mb">Desarrollador web fullstack impartido por innovaccion virtual impulsado por microsoft y github education.</li>
                                <li className="mb">diseño ux/ui impartido por :</li>
                                <li className="mb"></li>
                                <li className="mb"></li>
                            </ul>
                        </section>
                        <section className="mb-3 ">
                            <h2 className="white-text">Pasiones</h2>
                            <p className="white-text ft-w-1">
                                Me apasiona compartir  el conocimiento con los demás por lo que amo crear contenido en internet sobre ingeniería y programación.
                                Una meta personal es llevar el conocimiento a las zonas marginadas de mi país (México).
                            </p>
                            <p className="white-text ft-w-1">
                                Otra gran pasíon es el arte, la pintura y el dibujo, maneras perfectas de expresión.  Encontrando este mismo en la programación.
                            </p>
                        </section>
                        <section className="mb-3 ">
                            <h2 className="white-text">objetivos</h2>
                            <p className="white-text ft-w-1">
                                aprender y aprender, con el fin de compartir. La modernidad no seria posible sin el conocimiento libre.

                                Por otro lado, deseo continuar con la preparación a nivel universitario y contribuir a la comunidad.
                            </p>
                        </section>

                        <Button background="bg-green" onClick={handleClick}>Siguiente  &gt;  </Button>
                         

                    </div>

                </div>

            </main>
        </>
    )
}