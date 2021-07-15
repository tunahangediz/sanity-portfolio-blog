import React from "react";
import Project from "./Project";
import img1 from "../images/Screen Shot 2021-07-15 at 10.44.39.png";
import img2 from "../images/shoppingCart.png";

const Projects = () => {
    return (
        <div style={{ marginTop: "3rem" }} className="projects-grid">
            <Project
                img={img1}
                name={"React Pokedex"}
                href={"https://react-pokedex-tau.vercel.app/"}
            />
            <Project
                img={img2}
                name={"React Shopping Cart"}
                href={"https://shopping-cart-eosin.vercel.app/"}
            />
        </div>
    );
};

export default Projects;
