import './Projects.css'

function Project(props) {
    return (
        <div className="project-card">
            <div className='project-image'></div>
            <h3 className='project-title'>Project Title</h3>
            <p className='project-description'>Some quick information about this project. Some more stuff also.</p>
            <a className='project-more-info' href='https://github.com/'>More info</a>
        </div>
    )
}

function Projects() {
    return (
        <section className="portfolio-section">
            <div className='title-container'>
                <a className='section-anchor' name="projects"></a>
                <h2 className='section-title'>Projects</h2>
            </div>

            <span className='project-container'>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </span>
        </section>
    )
}

export default Projects