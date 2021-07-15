import React from "react";

const Project = (props) => {
    return (
        <div className="project">
            <h2>{props.name}</h2>
            <img src={props.img} alt="" />
            <div>
                <a href={props.href} target="_blank">
                    <h2>See Live Demo</h2>
                </a>
            </div>
        </div>
    );
};

export default Project;
