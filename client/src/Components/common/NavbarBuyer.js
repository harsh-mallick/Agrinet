import React from 'react';
import { Link } from 'react-router-dom'
import '../../Css/common/Navbar.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const NavbarBuyer = () => {
    const { t } = useTranslation();
    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'fr'
        },
        {
            code: 'hi',
            name: 'Hindi',
            country_code: 'hi'
        },
        {
            code: 'bn',
            name: 'Bengla',
            country_code: 'bn'
        },
        {
            code: 'ta',
            name: 'Tamil',
            country_code: 'ta'
        },
        {
            code: 'te',
            name: 'Telgu',
            country_code: 'te'
        },
        {
            code: 'pa',
            name: 'Punjabi',
            country_code: 'pa'
        }
    ]
    const RenderMenu = () => {
        if (window.localStorage.getItem("payload") === "true") {
            return (
                <nav className='nav' style={{ display: "inline-flex" }}>
                    <Link to="/" className="a">Home</Link>
                    <Link to="/about" className="a">Profile</Link>
                    <Link to="/farmer" className="a">Our Farmers</Link>
                    <Link to="/transporter" className="a">Our Transporters</Link>
                    <Link to="/notification-buyer" className="a">Notification</Link>
                    <Link to="/set-info" className="a">Set Information</Link>
                    <Link to="/requests" className="a">My Requests</Link>
                    <Link to="/logout" className="a">Logout</Link>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            🌐
                        </button>
                        <ul class="dropdown-menu">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}><button class="dropdown-item" onClick={() => { i18next.changeLanguage(code) }}>{name}</button></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        } else if (window.localStorage.getItem("payload") === "false") {
            return (
                <nav className='nav' style={{ "display": "inlineFlex" }}>
                    <Link to="/" className="a">{t("Home")}</Link>
                    <Link to="/login" className="a">{t("Sign In")}</Link>
                    <Link to="/signup" className="a">{t("Sign Up")}</Link>
                    <Link to="/team" className="a">{t("Our Team Members")}</Link>
                    <div class="dropdown" style={{ "width": "50px", "alignSelf": "center" }}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            🌐
                        </button>
                        <ul class="dropdown-menu">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}><button class="dropdown-item" onClick={() => { i18next.changeLanguage(code) }}>{name}</button></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav className='' style={{ "display": "inlineFlex" }}>
                    <Link to="/" className="a">Home</Link>
                    <Link to="/login" className="a">Sign In</Link>
                    <Link to="/signup" className="a">Sign Up</Link>
                    <Link to="/team" className="a">Our Team Members</Link>
                    <div class="dropdown" style={{ "width": "50px" }}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            🌐
                        </button>
                        <ul class="dropdown-menu">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}><button class="dropdown-item" onClick={() => { i18next.changeLanguage(code) }}>{name}</button></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        }
    }
    return (
        <div>
            <header className='header' style={{ "display": "inlineFlex" }}>
                <h2 className='h2' style={{ marginRight: "0px" }}>AGRINET</h2>
                <RenderMenu />
            </header>
        </div>
    )
}

export default NavbarBuyer
