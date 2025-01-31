import Socials from '../Socials/Socials'
import './Contact.css'

function Contact(props) {
    const socialElements = props.socials.map((entry) => {
        return (
            <Socials key={entry.id} entry={entry} />
        )
    })

    return (
        <section className="portfolio-section">
            <div className='title-container'>
                <a className='section-anchor' name="contact"></a>
                <h2 className='section-title'>Get in touch</h2>
            </div>

            <span className='contact-info'>
                <div className='tmp-profile-img small'></div>
                <span className="socials-container">
                    {socialElements}
                </span>
            </span>
        </section>
    )
}

export default Contact