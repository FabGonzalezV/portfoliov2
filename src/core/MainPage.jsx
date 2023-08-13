import { useState } from "react"
import { AsideBar, Card, Label, Chip } from "../components/components";
import Navbar from "./Navbar"
import { useLocation } from 'react-router-dom';
import './../css/styles.css'



export default function MainPage({ p }) {
    const [page, setPage] = useState("backend-content");
    const location = useLocation();

    // Rutas en las que quieres mostrar el aside bar
    const allowedRoutes = ['/proyectos','/proyectos#skills' ];
    const showAsideBar = allowedRoutes.includes(location.pathname);

   
    console.log(location.pathname)
    return (
        <>

            <Navbar />
            <div className="container-page">
                {/* {
                    showAsideBar && (
                        <aside id="aside-bar">
                            <AsideBar page={page} setPage={setPage} />
                        </aside>
                    )} */}
                    <aside id="aside-bar">
                            <AsideBar page={page} setPage={setPage} />
                        </aside>
                <aside id="main-content-aside" className="aside-content">

                    {
                        page === "backend-content" && (
                            <>

                                <div>
                                    <h1 className="white-text mt">Proyectos Backend</h1>
                                    <div className="main-info-page">


                                        <Card title={"Portfolio"} subtitle={"React, css, html5, js"} >
                                            portafolio realizado con ...
                                        </Card>
                                        <Card title={"Portfolio"} subtitle={"React, css, html5, js"} >
                                            portafolio realizado con ...
                                        </Card>
                                        <Card title={"Portfolio"} subtitle={"React, css, html5, js"} >
                                            portafolio realizado con ...
                                        </Card>
                                        <Card title={"Portfolio"} subtitle={"React, css, html5, js"} >
                                            portafolio realizado con ...
                                        </Card>
                                        <Card title={"Portfolio"} subtitle={"React, css, html5, js"} >
                                            portafolio realizado con ...
                                        </Card>

                                    </div>
                                </div>
                            </>
                        )

                    }
                    {
                        page === "frontend-content" && (
                            <>

                                <div>
                                    <h1 className="white-text mt">Proyectos Frontend</h1>
                                    <div className="main-info-page">
                                        <Card title={"Portfolio"} subtitle={"React, css, html5, js"} >
                                            portafolio realizado con ...
                                        </Card>
                                        <Card title={"Portfolio"} subtitle={"React, css, html5, js"} >
                                            portafolio realizado con ...
                                        </Card>
                                        <Card title={"Portfolio"} subtitle={"React, css, html5, js"} >
                                            portafolio realizado con ...
                                        </Card>
                                        <Card title={"Portfolio"} subtitle={"React, css, html5, js"} >
                                            portafolio realizado con ...
                                        </Card>

                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        page === "ux-content" && (
                            <>

                                <div>
                                    <h1 className="white-text mt">Proyectos UX/UI</h1>
                                    <div className="main-info-page">

                                        <div>
                                            <h2 className="white-text mb-2">Herramientas</h2>
                                            <div className="chips-container">
                                                <Label item={"figma.svg"} > Figma</Label>
                                                <Label item={"inkscape.svg"} > Inskcape</Label>
                                                <Label item={"krita.svg"} > Krita</Label>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        page === "skills-content" && (
                            <>

                                <div className="main-info-page">
                                    <div className="mb-3">
                                        <h1 className="white-text mb-2">Habilidades Blandas</h1>
                                        <div className="chips-container">
                                            <Chip>Comunicación efectiva</Chip>
                                            <Chip>Trabajo en equipo</Chip>
                                            <Chip>Resolución de problemas</Chip>
                                            <Chip>Adaptabilidad</Chip>
                                            <Chip>Gestión del tiempo</Chip>
                                            <Chip>Pensamiento crítico</Chip>
                                            <Chip>Creatividad</Chip>
                                            <Chip>Empatía</Chip>
                                            <Chip>Toma de feedback</Chip>
                                            <Chip>Autoaprendizaje</Chip>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h1 className="white-text mb-3">Habilidades Duras</h1>
                                        <h2 className="white-text mb-2">Lenguajes</h2>
                                        <div className="chips-container mb-3">
                                            <Label item={"c.svg"} > Lenguaje C</Label>
                                            <Label item={"python.svg"} > Python</Label>
                                            <Label item={"java.svg"} > Java</Label>
                                            <Label item={"vhdl.svg"} > VHDL</Label>
                                            <Label item={"sql.svg"} > SQL</Label>
                                            <Label item={"asm.svg"} > Lenguaje <br />Emsamblador</Label>
                                            <Label item={"js.svg"} > javaScript</Label>
                                        </div>
                                        <h2 className="white-text mb-2">Pseudo Lenguajes</h2>
                                        <div className="chips-container mb-3">
                                            <Label item={"bash.svg"} > Bash</Label>
                                            <Label item={"yaml.svg"} > YAML</Label>
                                            <Label item={"markdown.png"} > Markdown</Label>
                                            <Label item={"html.svg"} > HTML5</Label>
                                            <Label item={"css3.svg"} > CSS3</Label>
                                        </div>

                                        <h2 className="white-text mb-2">Frameworks</h2>
                                        <div className="chips-container mb-3">
                                            <Label item={"node.svg"} > Node.js</Label>
                                            <Label item={"react.svg"} > React</Label>
                                            <Label item={"b.svg"} > Bootstrap</Label>
                                            <Label item={"express.svg"} > express.js</Label>
                                            <Label item={"django.svg"} > Django <br /> (en aprendizaje)</Label>

                                        </div>
                                        <h2 className="white-text mb-2">Librerías</h2>
                                        <div className="chips-container mb-3">
                                            <Label item={"eslint.svg"} > Eslint</Label>
                                            <Label item={"webpack.svg"} > Webpack</Label>
                                            <Label item={"babel.svg"} > Babel</Label>
                                            <Label item={"p.svg"} > passport</Label>
                                            <Label item={"j.svg"} > JWT</Label>

                                        </div>
                                        <h2 className="white-text mb-2">Gestores de versión</h2>
                                        <div className="chips-container mb-3">
                                            <Label item={"git.svg"} > Git</Label>


                                        </div>
                                        <h2 className="white-text mb-2">Bases de datos y ORM</h2>
                                        <div className="chips-container">
                                            <Label item={"postgresql.svg"} > postgreSQL</Label>
                                            <Label item={"mongo.png"} > MongoDB</Label>
                                            <Label item={"sequelize.svg"} > Sequelize</Label>
                                        </div>
                                    </div>

                                </div>



                            </>
                        )
                    }

                </aside>
            </div>
        </>

    )




}