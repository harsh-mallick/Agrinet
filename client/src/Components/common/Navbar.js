import React, { } from 'react';
import { Link } from 'react-router-dom'
import '../../Css/common/Navbar.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Logo from "../../Images/Logo-Logo.png"
import Dropdown from 'react-bootstrap/Dropdown';


const Navbar = () => {
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
                <nav className='nav' style={{ "display": "inlineFlex" }}>
                    <Link to="/" className="a">{t('Home')}</Link>
                    <Link to="/about" className="a">Profile</Link>
                    <Link to="/buyer" className="a">Our Buyers</Link>
                    <Link to="/transporter" className="a">Our Transporters</Link>
                    <Dropdown style={{ marginTop: "13px" }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: "rgb(16, 126, 56)", border: "rgb(16, 126, 56)" }}>
                            More Services
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item><Link class="dropdown-item" to="/notification-farmer">Notification</Link></Dropdown.Item>
                            <Dropdown.Item><Link class="dropdown-item" to="/requests">My Requests</Link></Dropdown.Item>
                            <Dropdown.Item><Link class="dropdown-item" to="/services" >Other Services</Link></Dropdown.Item>
                            <Dropdown.Item><Link class="dropdown-item" to="/buypstorage" >Buy a Cold Storage</Link></Dropdown.Item>
                            <Dropdown.Item><Link class="dropdown-item" to="/locationstorage" >Cold Storage near me</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to="/logout" className="a">Logout</Link>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            🌐
                        </button>
                        <ul className="dropdown-menu">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}><button className="dropdown-item" onClick={() => { i18next.changeLanguage(code) }}>{name}</button></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        } else if (window.localStorage.getItem("payload") === "false") {
            return (
                <nav className='nav-ini' style={{ "display": "inlineFlex" }}>
                    <Link to="/" className="a">{t("Home")}</Link>
                    <Link to="/login" className="a">{t("Sign In")}</Link>
                    <Link to="/signup" className="a">{t("Sign Up")}</Link>
                    <Link to="/cstorage-signup" className="a">Cold Storage Sign Up</Link>
                    <Link to="/team" className="a">{t("Our Team Members")}</Link>
                    <div className="dropdown" style={{ "width": "50px", "alignSelf": "center" }}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            🌐
                        </button>
                        <ul className="dropdown-menu">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}><button className="dropdown-item" onClick={() => { i18next.changeLanguage(code) }}>{name}</button></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav className='nav-ini' style={{ "display": "inlineFlex" }}>
                    <Link to="/" className="a">{t('Home')}</Link>
                    <Link to="/login" className="a">Sign In</Link>
                    <Link to="/signup" className="a">Sign Up</Link>
                    <Link to="/cstorage-signup" className="a">Cold Storage Sign Up</Link>
                    <Link to="/team" className="a">Our Team Members</Link>
                    <div className="dropdown" style={{ "width": "50px" }}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            🌐
                        </button>
                        <ul className="dropdown-menu">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}><button className="dropdown-item" onClick={() => { i18next.changeLanguage(code) }}>{name}</button></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        }
    }
    return (
        <div style={{ zIndex: "10", width: "100%" }}>
            <header className="header">
                <div className="left">
                    <img className="img" src={Logo} alt="Logo" />
                    <h2 className="h2">AGRINET</h2>
                </div>
                <RenderMenu />
            </header>
        </div>
    )
}

export default Navbar
