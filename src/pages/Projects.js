import React from "react";
import image1 from "../styles/project_one.png";
import "../styles/portfolio.css";

function Projects() {
  return (
    <div className="project1">
      <div className="imagediv">
        <img src={image1} style={{ width: "12rem", height: "10rem" }} />
        <span className="hyp">
          <a
            href="https://github.com/alok-xo/mern-mcu-card-shop.git"
            target="_blank"
          >
            visit <i id="icn" class="bi bi-link-45deg"></i>
          </a>
        </span>
      </div>

      <div className="para1">
        <p>
          created a Database using MongoDB, From where data are coming. <br />{" "}
          <br /> created a Search bar you can search by name and get data in a
          popup <br />
          <br /> and a shopping page in which user can browse, filter, sort &
          created a custom shopping cart.
        </p>
        <div className="project-2">
          <img
            src="https://25677985.fs1.hubspotusercontent-eu1.net/hubfs/25677985/Aesthetics/artist-single-visual-full-10.webp"
            style={{ height: "10rem", width: "8rem" }}
            alt=""
          />
          <br />
          <div className="a2p2">
            <a href="https://github.com/alok-xo/Aesthetic.git" target="_blank">
              visit <i id="icn" class="bi bi-link-45deg"></i>
            </a>
            <span className="pdes">
              created a Aesthetic website using only Html, Css, Bootstrap,
              jQuery.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
