// import './About.css'

function About(props) {
    // console.log(props)

    return (
        <section className="portfolio-section">
            <div className='title-container'>
                <a className='section-anchor' name="about"></a>
                {/* <h2 className='section-title'>About me</h2> */}
            </div>
            <span className='section-info'>
                <div className='tmp-profile-img'></div>
                <p className='info-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem urna, facilisis non rhoncus a, dictum at nisl. Quisque vel enim libero. Vestibulum tempus sed massa molestie eleifend. Nulla vestibulum maximus laoreet. Sed aliquet eleifend sem, nec congue risus scelerisque lobortis. Sed ut accumsan nisl, sit amet volutpat augue. Aenean tempus sagittis felis dictum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </span>
        </section>
    )
}


export default About