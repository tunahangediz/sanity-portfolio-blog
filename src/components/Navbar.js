import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    {" "}
                    <h2>Tunahan Gediz</h2>
                </Link>
                <ul>
                    <li>
                        {" "}
                        <Link to="/">Main Page</Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="">About</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
