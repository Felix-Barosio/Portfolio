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

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>


        </section>
    );
};

export default Portfolio;
