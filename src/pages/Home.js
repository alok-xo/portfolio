import React from "react";
import { LinkedIn, Margin } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import "../styles/Home.css";
import react from "../styles/logo/react.svg";
import html from "../styles/logo/html.svg";
import css from "../styles/logo/css.svg";
import bootstrap from "../styles/logo/bootstrap-2.svg";
import jquery from "../styles/logo/jquery.svg";
import mui from "../styles/logo/mui.svg";
import npm from "../styles/logo/npm.svg";
import node from "../styles/logo/nodejs.svg";
import express from "../styles/logo/express.svg";
import mongo from "../styles/logo/mongodb.svg";
import javascript from "../styles/logo/javascript.svg";
import typescript from "../styles/logo/typescript-2.svg";
// import alok from "../styles/logo/Rajani-Kanta-Das-Resume"
// Rajani-kanta-Das-Resume

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Rajani kant</h2>
        <div className="prompt">
          <p>
            A fresher software developer with a passion for learning and
            creating.
          </p> 
          <a href="https://www.linkedin.com/in/rajani-kant-2607ba246/"><LinkedIn /></a>
          <a href="mailto:rajanikantadas.rit@gmail.com"><Email /></a>
          <a href="https://github.com/alok-xo"><GitHub /></a>
          
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <div className="course">
              <ol>
                <li><img src={react} alt="react img" height={"43px"} /></li>
                <li><img src={html} alt="react img" height={"43px"} /></li>
                <li><img src={css} alt="react img" height={"43px"} /></li>
                <li><img src={bootstrap} alt="react img" height={"43px"} /></li>
                <li><img src={jquery} alt="react img" height={"43px"} /></li>
                <li><img src={mui} alt="react img" height={"43px"} width={"60px"} /></li>
                <li><img src={npm} alt="react img" height={"43px"} /></li>
              </ol>
            </div>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            {/* <span>NodeJS, ExpressJS, MongoDB</span> */}
            <div className="course">
              <ol>
                <li><img src={mongo} alt="react img" height={"50px"} /></li>
                <li><img src={node} alt="react img" height={"50px"} /></li>
                <li><img src={express} alt="react img" height={"50px"} /></li>
              </ol>
            </div>
          </li>
          <li className="item">
            <h2>Languages</h2>
            {/* <span>Javascript, TypeScript</span> */}
            <div className="course">
              <ol>
                <li><img src={javascript} alt="react img" height={"43px"} /></li>
                <li><img src={typescript} alt="react img" height={"43px"} /></li>
              </ol>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
