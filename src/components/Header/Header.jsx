// import React, { Component } from 'react'
import './Header.css'
import Socials from '../Socials/Socials'

function Header(props) {
    const socialElements = props.socials.map((entry) => {
        return (
            <Socials key={entry.id} entry={entry} />
        )
    })

    return (
        <header id="top">
            <h1 className="name">{props.name}</h1>
            <h3 className="title">{props.description}</h3>
            <span className="socials-container">
                {socialElements}
            </span>
        </header>
    )
}

export default Header