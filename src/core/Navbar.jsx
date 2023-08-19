
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Tabs } from "../components/components";

import "./../css/styles.css"
export default function Navbar() {

    const location = useLocation();
    const allowedRoutes = ['/portfoliov2/projects'];
    const showAsideBar = allowedRoutes.includes(location.pathname);
    const [expandedTabs, setExpandedTabs] = useState(false);
    const [movilDevice, setMovilDevice] = useState(null);
    const handleAsideBar = () => {
        const asideBar = document.getElementById("aside-bar");
        if (expandedTabs) {
            asideBar.style.display = "block";
        } else {
            asideBar.style.display = "none";
        }
    };
    const handlerClickMenu = () => {
        setExpandedTabs(!expandedTabs);
    }
    const handlerDevice = () => {
        const width = window.innerWidth;
        if (width < 1024) {
            setMovilDevice(true);
        } else {
            setMovilDevice(false);

        }

    }
    useEffect(() => {
        handlerDevice();
        window.addEventListener("resize", handlerDevice);

    }, []);
    return (

        <nav className="nav bg-dark">
            <div className="container-flex px py">
                <div id="left-side" className="container-20gap">
                    <div id="menu" className="menu-btn" onClick={handlerClickMenu}>
                        <img src={process.env.PUBLIC_URL + "/assets/icons/bars.svg"} alt="menu-btn" loading='lazy'/>
                    </div>
                    <div className="container-5gap">
                        <a href="/">
                        <div className="logo">
                            <img src={process.env.PUBLIC_URL + '/assets/icons/logo.png'} alt="logo-brand" /> 
                        </div>
                        </a>
                        <div className="slogan">
                            <span className="white-text ft-16 ft-w-1">
                                Nuestro código, tu solución
                            </span>
                        </div>
                    </div>
                </div>
                <div id="right-side" className="container-40gap">

                    {
                        !showAsideBar ?
                            (
                                (movilDevice) ? (

                                    expandedTabs && <Tabs expanded={expandedTabs} setExpandedTabs={setExpandedTabs} />


                                ) : (
                                    <Tabs expanded={expandedTabs} setExpandedTabs={setExpandedTabs} />
                                )
                            ) : (movilDevice) ? (

                                handleAsideBar()


                            ) : (
                                <Tabs expanded={expandedTabs} setExpandedTabs={setExpandedTabs} />
                            )
                    }

                    {/* {
                            
                        movilDevice ? (
                            expandedTabs && <Tabs expanded={expandedTabs} setExpandedTabs={setExpandedTabs} />
                        ) : (
                            <Tabs expanded={expandedTabs} setExpandedTabs={setExpandedTabs} />
                        )
                    } */}

                    <div>
                        <a href="/CV-Armando Fabián Fonzález.pdf" download>
                            <Button type="download" background="bg-white">Curriculumn</Button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    )
}