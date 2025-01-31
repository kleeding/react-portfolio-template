import './Experience.css'

function ExperienceEntry(props) {
    return (
        <div className="experience-card">
            <div className='experience-image'></div>
            <span className='experience-info'>
                <h3 className='experience-title'>{props.title}</h3>
                <h3 className='experience-location'>{props.location}</h3>
                <span className='experience-description'>{props.description}</span>
                <span className='experience-date'>{props.date}</span>
            </span>
        </div>
    )
}

function Experience(props) {

    return (
        <section className="portfolio-section contrast">
            <div className='title-container'>
                <a className='section-anchor' name="experience"></a>
                <h2 className='section-title'>Experience</h2>
            </div>

            <span className='experience-container'>
                <ExperienceEntry title="Full Stack Developer" location="Boogle" description="" date="2021-2024" />
                <ExperienceEntry title="Software Developer" location="Boogle" description="" date="2019-2021" />
                <ExperienceEntry title="Junior Software Developer" location="Nicrohard" description="" date="2018-2019" />
                <ExperienceEntry title="University of Example" location="BSc (Hons) Computer Science" description="" date="2013-2018" />
            </span>
        </section>
    )
}

export default Experience