import React from "react";
import "./About.scss";

export default function About(resumeData) {
  const data = resumeData.resumeData;

  return (
    <section className="container-fluid p-5 text-center" id="aboutSection">
      <h3 className="sectionName">
        About<span>.</span>
      </h3>
      <div className="row">
        <div className="col-md-5 text-center">
          <img src={data.avatar} width="250" height="250" alt=""></img>
          <p>
            <a href={data.cvLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary"> Download CV</button>
            </a>
          </p>
        </div>
        <div className="col-md-6">
          <p>
            Hello, my name is <span>Agustin Salguero</span>. I am a
            <span> Fullstack Web Developer</span>. I am constantly searching for
            engaging challenges that make me learn and improve my
            skills. I am experienced in <span>HTML5</span>, <span>CSS3/SASS</span>,
            <span> JavaScript</span> and
            <span> ReactJS</span>. I also have knowledge in
            <span> NodeJS</span>, <span> Express</span>,<span> MongoDB</span> and <span> MySQL</span>.
            I am proficient in
            <span> Git Version Control</span>.
            Currently working on solidifying my
            <span> JavaScript</span> and <span>React</span> fundamentals.
          </p>
        </div>
      </div>
      <ul className="skill-list">
        <li>
          <i className="fab fa-sass"></i>
        </li>
        <li>
          <i className="fab fa-js-square"></i>
        </li>
        <li>
          <i className="fab fa-bootstrap"></i>
        </li>
        <li>
          <i className="fab fa-react"></i>
        </li>
        <li>
          <i className="fab fa-git-alt"></i>
        </li>
        <li>
          <i class="fab fa-node-js"></i>
        </li>
        <li>
        <i class="fas fa-database"></i>
        </li>
      </ul>
    </section>
  );
}
