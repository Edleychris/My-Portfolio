import React from "react";
import about from "./about.module.css";

function About() {
  return (
    <div id="about" className={about.aboutMeContainer}>
      <div className={about.aboutMeHeader}>
        <h2>About Me</h2>
        <p>
          As a frontend developer, I focus on building captivating websites that
          engage users. With a keen eye for design and expertise in front-end
          technologies, I strive to create impactful web experiences that leave
          a lasting impression.
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
            <h4>
              Genesys Upskills <br></br>
              <span className={about.smallText} style={{ color: "#2C74B3" }}>
                Remote Mentor(Volunteer)
              </span>
            </h4>
            <p className={about.aboutMeText}>
              Mentorship and training of young software developers transitioning
              into Tech. Achieved 70% students performance improvement on Html,
              CSS and JavaScript.
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> 2022-2023
            </p>
            <h4>
              Stutern Graduate Accelerator<br></br>
              <span className={about.smallText} style={{ color: "#2C74B3" }}>
                Remote Intern
              </span>
            </h4>
            <p className={about.aboutMeText}>
              Mentorship to foster continuous growth in frontend web development
              encompassing HTML, CSS, JavaScript, Bootstrap, React.js, and
              database integration. Additionally, emphasized collaborative
              practices with backend developers, data analysts, and designers to
              create cohesive and efficient solutions that meet industry
              standards and user expectations.
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> 2019-2020
            </p>
            <h4>
              Huawei Technology (Airtel Switch)<br></br>
              <span className={about.smallText} style={{ color: "#2C74B3" }}>
                Engineer
              </span>
            </h4>
            <p className={about.aboutMeText}>
              Skilled in site maintenance, installation, and performance
              monitoring. Proficient troubleshooter with strong problem-solving
              abilities. Detail-oriented, innovative, and adaptable with
              excellent communication skills. Strong technical expertise and a
              focus on efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
