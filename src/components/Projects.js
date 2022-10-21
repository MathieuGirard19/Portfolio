import "./styles/Projects.css"
import { projectData } from "./data.js"
import React from "react"

function Projects() {

    return (
        <div className="projects">
            <h1 className="projectTitle">Projects</h1>
            <div className="projectContainer">
                {projectData.map(project => {
                    return (
                        <a className="projectBox" href={project.link}>
                            <div className="projectImg"
                                style={{
                                    backgroundImage: `url(/assets/${project.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                            </div>
                            <div className="projectText">
                                <p>{project.name}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects