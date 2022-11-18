import React from "react";
import "./Portfolio.css";
import Dairy from "../../assets/images/yellowstone.png";
import Box from "../../assets/images/box.png";
import Tasty from "../../assets/images/tasty.png";
import Recipe from "../../assets/images/recipe.png";
import Todo from "../../assets/images/todo.png";

const Portfolio = () => {


    const projects = [
        {
            id: 1,
            title: "Dairy Business",
            image_url: Dairy,
            github_url: "https://github.com/Felix-Barosio/Dairy_business",
            live_demo: "",
        },
        {
            id: 2,
            title: "Box Office Buffs",
            image_url: Box,
            github_url: "https://github.com/Felix-Barosio/Box-Office-Buffs",
            live_demo: "",
        },
        {
            id: 3,
            title: "Tasty Tips",
            image_url: Tasty,
            github_url: "https://github.com/Felix-Barosio/Tasty-Tips",
            live_demo: "",
        },
        {
            id: 4,
            title: "Recipe Blog",
            image_url: Recipe,
            github_url: "https://github.com/Felix-Barosio/Receipe-blog-client",
            live_demo: "",
        },
        {
            id: 5,
            title: "To-Do App",
            image_url: Todo,
            github_url: "https://github.com/Felix-Barosio/To-Do-Client",
            live_demo: "",
        },
    ];

    const renderProjects = projects.map((project) => {
        return (
            <article className="portfolio_item" key={project.id}>
                <div className="portfolio_item_image">
                    <img src={project.image_url} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <div className="portfolio_item_cta">
                    <a
                        href={project.github_url}
                        className="btn"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href={project.live_demo}
                        className="btn btn-primary"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>
                </div>
            </article>
        );
    });

    return (
        <section id="portfolio">
            <h5>Recent Works</h5>
            <h2>My Portfolio</h2>

            <div className="container portfolio_container">{renderProjects}</div>
        </section>
    );
};

export default Portfolio;
