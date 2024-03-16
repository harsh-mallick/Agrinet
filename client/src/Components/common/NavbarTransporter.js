import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../Css/common/Navbar.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const NavbarTransporter = () => {
    const [userData, setUserData] = useState({});
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
    const callAboutPage = async () => {
        try {
            const res = await fetch("/getFarmerdata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })

            const data = await res.json();

            console.log(data)
            setUserData(data)

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);
    const RenderMenu = () => {
        if (window.localStorage.getItem("payload") === "true") {
            return (
                <nav className='nav'>
                    <Link to="/" className="a">Home</Link>
                    <Link to="/about" className="a">Profile</Link>
                    <Link to="/requests-transporter" className="a">My Requests</Link>
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
                <nav className='nav' style={{ "display": "inlineFlex" }}>
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
                <h2 className='h2'>AGRINET</h2>
                <RenderMenu />
            </header>
        </div>
    )
}

export default NavbarTransporter
