

import './../css/styles.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


export function Button({ type = "card", background, children }) {
    if (type === "download") {
        return (
            <button id='btn-download' className={background}>
                <div className="container-5gap">
                    <img src={process.env.PUBLIC_URL + '/assets/icons/file.svg'} alt="file-icon" />
                    <span className='dark-text ft-w-2 ft-16'>{children}</span>
                </div>
            </button>
        );
    } else if ("experience") {
        return (
            <button id="btn-experience" className={background}>
                <span className='dark-text ft-w-3  ft-20'>{children}</span>
            </button>
        );
    }
    return (
        <button id="btn-experience" className={background}>
            <span className='dark-text ft-w-3  ft-20'>{children}</span>
        </button>
    );
}


export function Tabs({ expanded, setExpandedTabs }) {
    const handleClose = () => {
        setExpandedTabs(!expanded);
    }
    const handlePage = (p) => {

        window.location.href = `/portfoliov2/${p}`;
    }

    return (

        <div id='tabs' className="tabs ft-20 px-1">
            <div id="close-bar" className="close-icon" onClick={handleClose}>
                <img src={process.env.PUBLIC_URL + "/assets/icons/window-close.svg"} alt="close-icon" />
            </div>
            <div>
                <Link className=' blue-text ft-w-2 link' to={"/portfoliov2/"}>Inicio</Link>
            </div>
            <div  >
                <Link className=' blue-text ft-w-2 link' to={"/portfoliov2/projects"} >Proyectos</Link >
            </div>


            <div>
                <Link className=' blue-text ft-w-2 link' to={"/portfoliov2/about"}>Sobre mí</Link>
            </div>
            <div>
                <Link className='  blue-text ft-w-2 link' to={"/portfoliov2/contact"}>Contacto</Link>
            </div>

        </div>
    )
}

export function Social() {
    return (
        <div id='social' className="lt-links-container">
            <div className='container-5gap'>
                <a className='container-5gap' href="/contact" >
                    <img src={process.env.PUBLIC_URL + "/assets/icons/envelope.svg"} alt="mail-icon" />
                    <span className='white-text ft-16'>
                        codefabsdev@gmail.com
                    </span>
                </a>
            </div>
            <div className='container-5gap'>

                <img src={process.env.PUBLIC_URL + "/assets/icons/phone.svg"} alt="mail-icon" />
                <span className='white-text ft-16'>
                    6146964159
                </span>

            </div>
            <div className="container-10gap mb">

                <div className='container-5gap'>

                    <a href="https://github.com/FabGonzalezV" target='_blank' rel='noreferrer' className='light-text ft-16'>
                        <img src={process.env.PUBLIC_URL + "/assets/icons/github.png"} alt="github-icon" />
                    </a>
                </div>
                <div className='container-5gap'>

                    <a className='light-text ft-16' target='_blank' rel='noreferrer' href="http://">
                        <img src={process.env.PUBLIC_URL + "/assets/icons/instagram.png"} alt="instagram-icon" />
                    </a>
                </div>
                <div className='container-5gap'>

                    <a className='light-text ft-16' target='_blank' rel='noreferrer' href="https://www.tiktok.com/@codefabs_?is_from_webapp=1&sender_device=pc">
                        <img src={process.env.PUBLIC_URL + "/assets/icons/tiktok.png"} alt="tiktok-icon" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export function AsideBar({ page, setPage }) {
    const [rotated, setRotate] = useState({
        backendSection: false,
        frontendSection: false,
        uxSection: false,
        skillsSection: false,
        softSkill: false,
        softHard: false,
        proyecto1_back: false,
        proyecto2_back: false,
        proyecto3_back: false,
        proyecto4_back: false,
        proyecto5_back: false,
        proyecto6_back: false,
        proyecto7_back: false,
        proyecto8_back: false,
        proyecto9_back: false,
        proyecto10_back: false,
        proyecto11_back: false,
        proyecto12_back: false,
        proyecto1_front: false,
        proyecto2_front: false,
        proyecto3_front: false,
        proyecto4_front: false,
        proyecto5_front: false,
        proyecto6_front: false,
        proyecto7_front: false,
        proyecto8_front: false,
        proyecto9_front: false,
        proyecto10_front: false,
        proyecto11_front: false,
        proyecto12_front: false,
    });
    const [expanded, setExpanded] = useState({
        backendSection: false,
        frontendSection: false,
        uxSection: false,
        skillsSection: false,
        softSkill: false,
        softHard: false,
        proyecto1_back: false,
        proyecto2_back: false,
        proyecto3_back: false,
        proyecto4_back: false,
        proyecto5_back: false,
        proyecto6_back: false,
        proyecto7_back: false,
        proyecto8_back: false,
        proyecto9_back: false,
        proyecto10_back: false,
        proyecto11_back: false,
        proyecto12_back: false,
        proyecto1_front: false,

        proyecto2_front: false,
        proyecto3_front: false,
        proyecto4_front: false,
        proyecto5_front: false,
        proyecto6_front: false,
        proyecto7_front: false,
        proyecto8_front: false,
        proyecto9_front: false,
        proyecto10_front: false,
        proyecto11_front: false,
        proyecto12_front: false,
        proyecto1_ux: false

    });

    const handleRotateIcon = (section) => {
        setRotate((prevState) =>
            ({ ...prevState, [section]: !prevState[section] })
        )
    }
    const handleClickSection = (section) => {
        setExpanded((prevState) =>
            ({ ...prevState, [section]: !prevState[section] })
        )

    }
    const handlePage = (p) => {


        setPage(p)


    }
    return (
        <>
            <div className='aside-block'>
                <div className="aside-block-scroll">
                    <div className="aside-topics-container">
                        <div id="sub-bar">
                            <div className='section-flex'  >
                                <Link to={"/portfoliov2/"}>
                                    <h3 id='inicio' className='blue-text mb' >Inicio</h3>
                                </Link>
{                                <img src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />}                            </div>
                            <div className='section-flex'  >
                                <Link to={"/portfoliov2/projects"}>
                                    <h3 id='proyectos' className='blue-text mb' >Proyectos</h3>
                                </Link>
                                <img src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                            </div>
                            <div className='section-flex'  >
                                <Link to={"/portfoliov2/about"}>
                                    <h3 id='proyectos' className='blue-text mb' >Sobre mí</h3>
                                </Link>
                                <img src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                            </div>
                            <div className='section-flex'  >
                                <Link to={"/portfoliov2/contact"}>
                                    <h3 id='contacto' className='blue-text mb' >contacto</h3>
                                </Link>
                                <img src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                            </div>

                        </div>
                        <div>
                            <div className='section-flex' onClick={() => { handleClickSection('backendSection'); handleRotateIcon('backendSection'); handlePage("backend-content") }}>
                                <h3 id='backend' className='blue-text mb' >Backend</h3>
                                <img className={`${rotated.backendSection ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                            </div>
                            {
                                expanded.backendSection && (
                                    <div>
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto1_back'); handleRotateIcon('proyecto1_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Curso Python</h4>
                                            <img className={`${rotated.proyecto1_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto1_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/CursoIntroPython">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto2_back'); handleRotateIcon('proyecto2_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Generador de Imagenes</h4>
                                            <img className={`${rotated.proyecto2_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto2_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/image-generator">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto3_back'); handleRotateIcon('proyecto3_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Generador de Coordenadas</h4>
                                            <img className={`${rotated.proyecto3_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto3_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/random-coordinates-generator-">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto4_back'); handleRotateIcon('proyecto4_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>TSP</h4>
                                            <img className={`${rotated.proyecto4_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto4_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/Travel-Salesman-Problem">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }

                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto5_back'); handleRotateIcon('proyecto5_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Twitter Deep-Learning</h4>
                                            <img className={`${rotated.proyecto5_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto5_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/Tweets-Classifier/tree/main">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto6_back'); handleRotateIcon('proyecto6_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>PDI</h4>
                                            <img className={`${rotated.proyecto6_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto6_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/digital-image-processing-and-analysis/tree/main">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto7_back'); handleRotateIcon('proyecto7_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Sistema de Notas</h4>
                                            <img className={`${rotated.proyecto7_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto7_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/system-of-notes">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto8_back'); handleRotateIcon('proyecto8_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Pokedex</h4>
                                            <img className={`${rotated.proyecto8_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto8_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/pokedex">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto9_back'); handleRotateIcon('proyecto9_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>ChatBot</h4>
                                            <img className={`${rotated.proyecto9_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto9_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/chatbot">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto10_back'); handleRotateIcon('proyecto10_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Sistema de Gimnasio</h4>
                                            <img className={`${rotated.proyecto10_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto10_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/gym-system">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto11_back'); handleRotateIcon('proyecto11_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Agente Inteligente</h4>
                                            <img className={`${rotated.proyecto11_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto11_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/vacuum-cleaner">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto12_back'); handleRotateIcon('proyecto12_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Laberinto</h4>
                                            <img className={`${rotated.proyecto12_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto12_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/A--algorithm">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                    </div>

                                )
                            }
                            <hr />
                        </div>
                        {/* ------- */}
                        <div>
                            <div className='section-flex' onClick={() => { handleClickSection('frontendSection'); handleRotateIcon('frontendSection'); handlePage("frontend-content") }}>
                                <h3 id='frontend' className='blue-text mb' >Frontend</h3>
                                <img className={`${rotated.frontendSection ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                            </div>
                            {
                                expanded.frontendSection && (
                                    <div>
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto1_front'); handleRotateIcon('proyecto1_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Frontend-Mission</h4>
                                            <img className={`${rotated.proyecto1_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto1_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/FrontEnd-Mision">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto2_front'); handleRotateIcon('proyecto2_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Pokedex</h4>
                                            <img className={`${rotated.proyecto2_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto2_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/pokedex">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto3_front'); handleRotateIcon('proyecto3_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Mirror</h4>
                                            <img className={`${rotated.proyecto3_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto3_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/kata-css-mirror">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto4_front'); handleRotateIcon('proyecto4_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Pasteleria</h4>
                                            <img className={`${rotated.proyecto4_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto4_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/Frontend-intro-HTML">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto5_front'); handleRotateIcon('proyecto5_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Sistema de Notas</h4>
                                            <img className={`${rotated.proyecto5_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto5_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/system-of-notes">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto6_front'); handleRotateIcon('proyecto6_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Prácticas React</h4>
                                            <img className={`${rotated.proyecto6_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto6_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/react-practices">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto7_front'); handleRotateIcon('proyecto7_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>ChatBot</h4>
                                            <img className={`${rotated.proyecto7_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto7_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/chatbot">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto8_front'); handleRotateIcon('proyecto8_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>PDI</h4>
                                            <img className={`${rotated.proyecto8_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto8_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/digital-image-processing-and-analysis">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto9_front'); handleRotateIcon('proyecto9_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Sistema de Gimnasio</h4>
                                            <img className={`${rotated.proyecto9_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto9_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/gym-system">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto10_front'); handleRotateIcon('proyecto10_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Agente Inteligente</h4>
                                            <img className={`${rotated.proyecto10_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto10_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/vacuum-cleaner">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto11_front'); handleRotateIcon('proyecto11_front'); }}>
                                            <h4 className='blue-text-secondary mx mt mb'>Laberinto</h4>
                                            <img className={`${rotated.proyecto11_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto11_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty'
                                                            href="https://github.com/FabGonzalezV/A--algorithm">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }

                                    </div>
                                )
                            }
                            <hr />
                        </div>

                        {/* ------- */}
                        <div>
                            <div className='section-flex' onClick={() => { handleClickSection('uxSection'); handleRotateIcon('uxSection'); handlePage("ux-content") }}>
                                <h3 id='ux' className='blue-text mb' >UX/UI</h3>
                                <img className={`${rotated.uxSection ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                            </div>
                            {
                                expanded.uxSection && (
                                    <div>
                                        <div onClick={() => handleClickSection('proyecto1_ux')}>
                                            <a className='mx-1 blue-text-tertiaty' href="https://github.com/FabGonzalezV/UI-UX/blob/main/Estudio%20contextual.pdf">
                                                <h4 className='blue-text-secondary mx mt mb'>Estudio Contextual</h4>
                                            </a>


                                        </div>
                                        {
                                            expanded.proyecto1_ux && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty' href="https://github.com/FabGonzalezV/UI-UX/blob/main/Estudio%20contextual.pdf">Documentación</a>

                                                    </div>


                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }
                            <hr />
                        </div>

                        {/* ------- */}
                        <div>
                            <div className='section-flex' onClick={() => { handleClickSection('skillsSection'); handleRotateIcon('skillsSection'); handlePage("skills-content") }}>
                                <h3 id="skills" className='blue-text mb' >Habilidades</h3>
                                <img className={`${rotated.skillsSection ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                            </div>
                            {
                                expanded.skillsSection && (
                                    <div>
                                        <div>
                                            <h4 className='blue-text-secondary mx mt mb'>Blandas</h4>

                                        </div>
                                        <div  >
                                            <h4 className='blue-text-secondary mx mt mb'>Duras</h4>

                                        </div>

                                    </div>
                                )
                            }
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Card({ title, subtitle, path, link, children }) {
    console.log(path)
    return (

        <>

            <div className='card' >
                <div className='card-head'>
                    <div className='card-text-head'>
                        <div>
                            <h1 className='ft-20 mb-1'>{title}</h1>
                        </div>
                        <div>
                            <h2 className='ft-16 ft-w-2'>{subtitle}</h2>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <img src={process.env.PUBLIC_URL + `/assets/images/cards/${path}`} alt="image_project" loading='lazy' />
                </div>

                <div className="card-footer">
                    <p className='ft-14'>
                        {children}
                    </p>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        <Button background={"bg-blue"}>ver</Button>
                    </a>
                </div>
            </div>
        </>
    );
}


export function Label({ children, item }) {

    return (
        <div className="label">
            <div className='item-image bg-white mb'>
                <img src={process.env.PUBLIC_URL + "/assets/icons/icon-tools/" + item} alt="brand_tool" />
            </div>
            <div>
                <span className='white-text'>
                    {children}
                </span>
            </div>
        </div>
    )
}


export function Chip({ children }) {
    return (


        <div className='chip white-text'><span>{children}</span></div>


    );
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-copyright blue-text-secondary">
                    © {new Date().getFullYear()} Armando Fabián González (codefabs)
                </div>

            </div>
        </footer>
    );
};