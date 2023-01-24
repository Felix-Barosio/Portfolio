import React from "react"
import "./Footer.css"
import { FaLinkedinIn, FaGithub, FaMediumM } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
// import { IoMdMail } from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer_logo">BAROSIO</a>
            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                {/* <li><a href="#services">Services</a></li> */}
                <li><a href="#portfolio">Portfolio</a></li>
                {/* <li><a href="#testimonials">Testimonials</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/felix-barosio" target={'_blank'} rel="noreferrer"><FaLinkedinIn /></a>
                <a href="https://github.com/Felix-Barosio" target={'_blank'} rel="noreferrer"><FaGithub /></a>
                <a href="https://twitter.com/barosio_felix" target={'_blank'} rel="noreferrer"><IoLogoTwitter /></a>
                <a href="https://medium.com/@felix.barosio" target={'_blank'} rel="noreferrer"><FaMediumM /></a>
                {/* <a href="mailto:barosiofelix@gmail.com" target={'_blank'} rel="noreferrer"><IoMdMail /></a> */}
            </div>

            <div className="footer_copyrights">
                <small>&copy; {new Date().getFullYear()}. Barosio Felix. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;
