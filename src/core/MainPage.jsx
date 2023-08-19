import { useState } from "react"
import { AsideBar, Card, Label, Chip  } from "../components/components";
import Navbar from "./Navbar"
import { useLocation } from 'react-router-dom';
import './../css/styles.css'



export default function MainPage({ p }) {
    const [page, setPage] = useState("backend-content");
    const location = useLocation();

    
    
    


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

                                        <Card title={"Curso Python"} subtitle={"py"} path={"curso_python.png"} 
                                        link={"https://github.com/FabGonzalezV/CursoIntroPython"}>
                                            Curso python por Innovaccion Virtual
                                        </Card>

                                        <Card title={"Generador de imagenes"} subtitle={"HTML5, CSS, js"} path={"dali.png"}
                                        link={"https://github.com/FabGonzalezV/image-generator"} >
                                            Generador de imagenes mediante la api de openai-dalli
                                        </Card>

                                        <Card title={"Coordenadas"} subtitle={"lenguaje C"} path={"random.png"}
                                         link={"https://github.com/FabGonzalezV/random-coordinates-generator-"} >
                                            Generador de coordenadas para algoritmo metaheurístico
                                        </Card>
                                        <Card title={"TSP"} subtitle={"HTML5,CSS, js, node"} path={"tsp.png"} 
                                        link={"https://github.com/FabGonzalezV/Travel-Salesman-Problem"} >
                                            Algoritmo metaheurístico recocido simulado para resolver tsp
                                        </Card>
                                        <Card title={"Twitter deep-learning"} subtitle={"pyton, codelab"} path={"twitter.png"}
                                        link={"https://github.com/FabGonzalezV/Tweets-Classifier/tree/main"} >
                                            Algortimo de deep-learning para análisis de tweets falsos
                                        </Card>

                                        <Card title={"PDI"} subtitle={"HTML5, ejs, js, node"} path={"pdi.png"}
                                         link={"https://github.com/FabGonzalezV/digital-image-processing-and-analysis/tree/main"} >
                                            Sistema de procesamiento de imagenes fullstack
                                        </Card>
                                        <Card title={"Sistema de Notas"} subtitle={"Bootstrap, HTML5, ejs, js"} path={"notes.png"}
                                        link={"https://github.com/FabGonzalezV/system-of-notes"} >
                                            Sistema de registro de notas fullstack
                                        </Card>
                                        <Card title={"Pokedex"} subtitle={"CSS, HTML5, js"} path={"pokedex.png"}
                                         link={"https://github.com/FabGonzalezV/pokedex"}>
                                            Consumo de api pokedex, implementación front y back.
                                        </Card>
                                        <Card title={"Chat Bot "} subtitle={"HTML5, ejs, js, node"} path={"chatbot.png"} 
                                        link={"https://github.com/FabGonzalezV/chatbot"}>
                                            Chatbot fullstack usando la api de openai(chat-gpt-3.5)
                                        </Card>
                                        <Card title={"Sistema Gimnasio"} subtitle={"HTML5, ejs, js, node"} path={"gym.png"} 
                                        link={"https://github.com/FabGonzalezV/gym-system"}>
                                            Sistema de registro para gimnasio fullstack
                                        </Card>
                                        <Card title={"Agente Inteligente"} subtitle={"HTML5, CSS, JS"} path={"aspiradora.png"} 
                                        link={"https://github.com/FabGonzalezV/vacuum-cleaner"}>
                                            Agente inteligente fullstack con algoritmo de busqueda
                                        </Card>
                                        <Card title={"Laberinto"} subtitle={"HTML5, CSS, JS"} path={"A_.png"}
                                         link={"https://github.com/FabGonzalezV/A--algorithm"}>
                                            Validador de laberintos con algoritmo A estrella
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
                                        <Card title={"Frontend-Mission"} subtitle={"HTML5, CSS, JS"} path={"frontend_mision.png"} 
                                        link={"https://github.com/FabGonzalezV/FrontEnd-Mision"} >
                                            Curso Frontend por inovaccion virtual
                                        </Card>
                                        <Card title={"Pokedex"} subtitle={"CSS, HTML5, js"} path={"pokedex.png"} 
                                        link={"https://github.com/FabGonzalezV/pokedex"}>
                                            Consumo de api pokedex, implementación front y back.
                                        </Card>
                                        <Card title={"Mirror"} subtitle={"CSS, HTML5, js"} path={"vacunas.png"}
                                        link={"https://github.com/FabGonzalezV/kata-css-mirror"} >
                                            Mirror de página de vacunas
                                        </Card>
                                        <Card title={"Pastelería"} subtitle={"CSS, HTML5, js"} path={"pasteleria.png"} 
                                        link={"https://github.com/FabGonzalezV/Frontend-intro-HTML"}>
                                            Página de pedidos para pastelería
                                        </Card>
                                        <Card title={"Sistema de Notas"} subtitle={"Bootstrap, HTML5, ejs, js"} path={"notes.png"} 
                                        link={"https://github.com/FabGonzalezV/system-of-notes"}>
                                            Sistema de registro de notas fullstack
                                        </Card>
                                        <Card title={"Prácticas con React"} subtitle={"React, jsx, node"} path={"react.png"} 
                                        link={"https://github.com/FabGonzalezV/react-practices"}>
                                            Prácticas con react
                                        </Card>
                                        <Card title={"Chat Bot "} subtitle={"HTML5, ejs, js, node"} path={"chatbot.png"}
                                        link={"https://github.com/FabGonzalezV/chatbot"} >
                                            Chatbot fullstack usando la api de openai(chat-gpt-3.5)
                                        </Card>
                                        <Card title={"PDI"} subtitle={"HTML5, ejs, js, node"} path={"pdi.png"} >
                                            Sistema de procesamiento de imagenes fullstack
                                        </Card>
                                        <Card title={"Sistema Gimnasio"} subtitle={"HTML5, ejs, js, node"} path={"gym.png"}
                                        link={"https://github.com/FabGonzalezV/digital-image-processing-and-analysis"} >
                                            Sistema de registro para gimnasio fullstack
                                        </Card>

                                        <Card title={"Agente Inteligente"} subtitle={"HTML5, CSS, JS"} path={"aspiradora.png"} 
                                        link={"https://github.com/FabGonzalezV/vacuum-cleaner"}>
                                            Agente inteligente fullstack con algoritmo de busqueda
                                        </Card>
                                        <Card title={"Laberinto"} subtitle={"HTML5, CSS, JS"} path={"A_.png"}
                                        link={"https://github.com/FabGonzalezV/A--algorithm"} >
                                            Validador de laberintos con algoritmo A estrella
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