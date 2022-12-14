import { useState } from "react"
import { Link } from "react-router-dom"

const logo = require('./../images/logogreen-icon.png')

function Header() {
    
    const [navLink, setNavLink] = useState('home')

    return (
        <section className="headersection">
            <div className="uppernavbar">
                <div className="logo_img">
                    <Link to={'/'}>
                        <img src={logo}/>
                    </Link>
                </div>
                <div className="right-nav">
                    <ul>
                        <li>
                            <Link className={navLink === 'home'?"active":''} to={'/casher'} onClick={() => { setNavLink('home') }}>Ticketing</Link>
                        </li>
                        <li>
                            <Link className={navLink === 'report'?"active":''} to={'/casher/report'} onClick={() => { setNavLink('report') }}>Report</Link>
                        </li>
                        <li>
                            <Link className={navLink === 'result'?"active":''} to={'/'} onClick={() => { setNavLink('result') }}>Game</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Header