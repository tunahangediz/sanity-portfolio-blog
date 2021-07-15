import React from "react";
import { ReactComponent as Svg } from "./undraw_heatmap_uyye.svg";
import { ReactComponent as Svg2 } from "./undraw_version_control_re_mg66.svg";
const MainSection = () => {
    return (
        <div className="main-hero">
            <div style={{ width: "100%" }}>
                <h1 style={{ marginTop: "5rem" }}>
                    Hello , my name's Tunahan. I'm a{" "}
                    <span style={{ color: "#674ED3" }}>
                        Frontend Developer.
                    </span>{" "}
                </h1>
            </div>

            <div style={{ width: "100%" }}>
                <Svg2 style={{ width: "100%" }} />
            </div>
        </div>
    );
};

export default MainSection;
