import React from "react";
import about from "./about.module.css";

function About() {
  return (
    <div id="about" className={about.aboutMeContainer}>
      <div className={about.aboutMeHeader}>
        <h2>About Me</h2>
        <p>
          Collaborated with diverse teams, including backend developers,
          designers, and other stakeholders, to create robust websites.
          Integrating frontend designs with various expertise, delivering
          exceptional user experiences that harmonize aesthetics and
          functionality.
        </p>
      </div>

      <div className={about.aboutMeBody}>
        <div className={about.aboutMeBodyBlock}>
          <h4>Education</h4>
          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> 2015-2021
            </p>
            <h4>Abubakar Tafawa Balewa University, Bauchi State</h4>
            <p className={about.aboutMeText}>
              Bachelor of Engineering in Computer and Communications
              Engineering.
            </p>
          </div>
        </div>

        <div className={about.aboutMeBodyBlock}>
          <h4>Experience</h4>
          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> 2023-Present
            </p>
            <h4>Stutern</h4>
            <p className={about.aboutMeText}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> 2022-2023
            </p>
            <h4>Stutern Graduate Accelerator, Remote Intern.</h4>
            <p className={about.aboutMeText}>
              Mentorship to foster continuous growth in frontend web
              development encompassing HTML, CSS, JavaScript, Bootstrap,
              React.js, and database integration. Additionally, emphasized
              collaborative practices with backend developers, data analysts,
              and designers to create cohesive and efficient solutions that meet
              industry standards and user expectations.
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> 2019-2020
            </p>
            <h4>Huawei Technology (Airtel Switch), Engineer.</h4>
            <p className={about.aboutMeText}>
              Collaborated with diverse teams, including backend developers,
              designers, and other stakeholders, to create robust websites.
              Integrating frontend designs with various expertise, delivering
              exceptional user experiences that harmonize aesthetics and
              functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
