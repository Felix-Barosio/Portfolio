import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Socials = () => {
    return (
        <div className="socials">
            <a
                href="https://twitter.com/barosio_felix"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                <BsTwitter />{" "}
            </a>
            <a
                href="https://www.linkedin.com/in/felix-barosio"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                <BsLinkedin />{" "}
            </a>
            <a
                href="https://github.com/Felix-Barosio"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                <BsGithub />{" "}
            </a>
        </div>
    );
};

export default Socials;
