import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';

function Header() {

    const [nav, setNav] = useState(false)


    return (
        <nav className='navbar'>
            <div>  <Link to="/">
                Home
            </Link></div>
            <ul>
                <li>
                    <Link to="/">
                        Logga In
                    </Link>

                </li>

                <li>
                    <Link to="/anstallda">
                        Anställda
                    </Link>
                </li>
                <li>
                    <Link to="/timrapport">
                        TimRapport
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Header