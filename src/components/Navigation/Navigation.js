import React, { useState } from "react";
import './Navigation.css'

import {
    RiHomeHeartLine,
    RiUserLine,
    RiBook3Line,
    RiServiceLine,
    RiMessage2Line,
} from "react-icons/ri";

const Navigation = () => {
    const [isActive, setIsActive] = useState("#home");
    return (
        <div className="nav">
            <a
                href="#home"
                className={isActive === "#home" ? "active" : ""}
                onClick={() => setIsActive("#home")}
            >
                <RiHomeHeartLine />
            </a>
            <a
                href="#about"
                className={isActive === "#about" ? "active" : ""}
                onClick={() => setIsActive("#about")}
            >
                <RiUserLine />
            </a>
            <a
                href="#experience"
                className={isActive === "#experience" ? "active" : ""}
                onClick={() => setIsActive("#experience")}
            >
                <RiBook3Line />
            </a>
            <a
                href="#portfolio"
                className={isActive === "#portfolio" ? "active" : ""}
                onClick={() => setIsActive("#portfolio")}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                className={isActive === "#contact" ? "active" : ""}
                onClick={() => setIsActive("#contact")}
            >
                <RiMessage2Line />
            </a>
        </div>
    );
};

export default Navigation;
