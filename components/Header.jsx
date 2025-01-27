import React, { Component } from 'react'

function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            
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