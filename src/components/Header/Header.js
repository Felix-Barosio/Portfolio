import React from "react";
import Profile from "../../assets/images/profile3.png";
import "./Header.css";
import Personal from "./Personal";
import Socials from "./Socials";

const Header = () => {
    return (
        <header id="home">
            <div className="container header_cont">
                <h4>Hello There I'm</h4>
                <h1>Barosio Felix</h1>
                <h4 className="text-light">Full-Stack Developer</h4>
                <Personal />
                <Socials />
                <a href="#contact" className="scroll_down">
                    Scroll Down
                </a>
                <div className="pic">
                    <img src={Profile} alt="My Pic" />
                </div>
            </div>
        </header>
    );
};

export default Header;
