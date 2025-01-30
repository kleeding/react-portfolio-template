import {useState} from 'react';
import './Navbar.css'

function NavElement(props) {
    return (
        <a className="page-link" href={props.entry.url}>{props.entry.name}</a>
    )
}

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    const navbarElements = props.links.map((entry) => {
        return (
            <NavElement key={entry.id} entry={entry} />
        )
    })

    return (
        <nav className='nav-elements'>
            <li className="nav-logo">
                <div className='tmp-logo'>
                    <a className="home-link" href='#top'>HOME</a>
                </div>
            </li>
            
            <div className={`empty-nav-space  ${isOpen ? "is-open" : ""}`} onClick={toggleMenu}></div>

            <div className='nav-links'>
                <div className={`nav-mobile-trigger-open  ${isOpen ? "is-open" : ""}`} onClick={toggleMenu}>
                    <div className='nav-burger'></div>
                    <div className='nav-burger'></div>
                    <div className='nav-burger'></div>
                </div>
                
                <div className={`nav-mobile-trigger-close  ${isOpen ? "is-open" : ""}`} onClick={toggleMenu}>
                    <div className='nav-cross-1'></div>
                    <div className='nav-cross-2'></div>
                </div>


                <ul className={`links-container ${isOpen ? "is-open" : ""}`}>
                    {navbarElements}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar