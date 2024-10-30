import React from 'react'
import Backend from '../Skills/Backend'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer footer__container">
                <h1 className="footer__title">Malhar</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#links" className="footer__link">Links</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/malhardv/?__d=1%2F" target="_blank" className="home__social-icon">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://github.com/malhardv" target="_blank" className="home__social-icon">
                        <i className="fa-brands fa-figma"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/malhardv/" target="_blank" className="home__social-icon">
                        <i className="uil uil-linkedin"></i>
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer