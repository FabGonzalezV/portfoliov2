

import './../css/styles.css'
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


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

        window.location.href = `/${p}`;
    }

    return (

        <div id='tabs' className="tabs ft-20 px-1">
            <div id="close-bar" className="close-icon" onClick={handleClose}>
                <img src={process.env.PUBLIC_URL + "/assets/icons/window-close.svg"} alt="close-icon" />
            </div>

            <div  >
                <Link className=' blue-text ft-w-2 link' onClick={() => { handlePage("proyectos") }}>Proyectos</Link >
            </div>

            
            <div>
                <Link className=' blue-text ft-w-2 link'to={"/about"}>Sobre mí</Link>
            </div>
            <div>
                <Link className='  blue-text ft-w-2 link' onClick={() => { handlePage("contact") }}>Contacto</Link>
            </div>

        </div>
    )
}

export function Social() {
    return (
        <div id='social' className="lt-links-container">
            <div className='container-5gap'>
                <a className='container-5gap' href="" >
                    <img src={process.env.PUBLIC_URL + "/assets/icons/envelope.svg"} alt="mail-icon" />
                    <span className='white-text ft-16'>
                        codefabsdev@gmail.com
                    </span>
                </a>
            </div>
            <div className='container-5gap'>
                <a className='container-5gap' href="">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/phone.svg"} alt="mail-icon" />
                    <span className='white-text ft-16'>
                        6146964159
                    </span>
                </a>
            </div>
            <div className="container-10gap mb">

                <div className='container-5gap'>

                    <a href="http://" className='light-text ft-16'>
                        <img src={process.env.PUBLIC_URL + "/assets/icons/github.png"} alt="github-icon" />
                    </a>
                </div>
                <div className='container-5gap'>

                    <a className='light-text ft-16' href="http://">
                        <img src={process.env.PUBLIC_URL + "/assets/icons/instagram.png"} alt="instagram-icon" />
                    </a>
                </div>
                <div className='container-5gap'>

                    <a className='light-text ft-16' href="http://">
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
        proyecto1_front: false
    });
    const [expanded, setExpanded] = useState({
        backendSection: false,
        frontendSection: false,
        uxSection: false,
        skillsSection: false,
        softSkill: false,
        softHard: false,
        proyecto1_back: false,
        proyecto1_front: false,
        proyecto1_ux: false

    });
    const location = useLocation();
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
                        <div>
                            <div className='section-flex' onClick={() => { handleClickSection('backendSection'); handleRotateIcon('backendSection'); handlePage("backend-content") }}>
                                <h3 id='backend' className='blue-text mb' >Backend</h3>
                                <img className={`${rotated.backendSection ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                            </div>
                            {
                                expanded.backendSection && (
                                    <div>
                                        <div className='section-flex' onClick={() => { handleClickSection('proyecto1_back'); handleRotateIcon('proyecto1_back') }}>
                                            <h4 className='blue-text-secondary mx mt mb'>proyecto 1</h4>
                                            <img className={`${rotated.proyecto1_back ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto1_back && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty' href="">Documentación</a>

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
                                            <h4 className='blue-text-secondary mx mt mb'>proyecto 1</h4>
                                            <img className={`${rotated.proyecto1_front ? 'rotated' : ''}`} src={process.env.PUBLIC_URL + "/assets/icons/chevron-right.svg"} alt="icon_arrow" />
                                        </div>
                                        {
                                            expanded.proyecto1_front && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty' href="">Documentación</a>

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
                                            <h4 className='blue-text-secondary mx mt mb'>proyecto 1</h4>

                                        </div>
                                        {
                                            expanded.proyecto1_ux && (
                                                <div>
                                                    <div>
                                                        <a className='mx-1 blue-text-tertiaty' href="">Documentación</a>

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

export function Card({ title, subtitle, children }) {
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
                    <img src={process.env.PUBLIC_URL + "/assets/images/cards/webpack1.png"} alt="image_project" />
                </div>

                <div className="card-footer">
                    <p className='ft-14'>
                        un pequeño portafolio web implementado en react
                    </p>
                    <Button background={"bg-blue"}>ver</Button>
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