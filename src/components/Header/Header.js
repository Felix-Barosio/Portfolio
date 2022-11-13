import React from "react";
import Profile from "../../assets/images/profile3.png";
import "./Header.css";

const Header = () => {
    return (
        <div id="home">
            <div className="container header_container">
                <h4>Hello There I'm</h4>
                <h1>Barosio Felix</h1>
                <h4 className="text-light">Full-Stack Developer</h4>
                <a href="#contact" className="scroll_down">
                    Scroll Down
                </a>
                <div className="pic">
                    <img src={Profile} alt="My Pic" />
                </div>
            </div>
        </div>
    );
};

export default Header;
