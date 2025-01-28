// import React, { Component } from 'react'
import './Header.css'
import Socials from './Socials'

function Header(props) {
    console.log(props)

    const socialElements = props.socials.map((entry) => {
        console.log(entry)
        return (
            <Socials {...entry} />
        )
    })

    return (
        <header>
            <h1 className="name">{props.name}</h1>
            <h3 className="title">{props.description}</h3>
            <div className="socials-container">
                {socialElements}
            </div>
        </header>
    )
}

// class Header extends Component {      
//     render() {
//         return (
//             <header>
//                 <h1>First React Page</h1>
//             </header>
//         )
//     }
// }

export default Header