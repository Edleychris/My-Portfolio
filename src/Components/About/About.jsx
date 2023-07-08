// import React from "react";
import about from './about.module.css';

export const About = () => {
  return (
    <div id="about" className={about.aboutMeContainer}>
      <div className={about.aboutMeHeader}>
        <h2>About Me</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>

      <div className={about.aboutMeBody}>
        <div className={about.aboutMeBodyBlock}>
          <h4>Education</h4>
          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> 2017-2018
            </p>
            <h4>Delta State University</h4>
            <p className={about.aboutMeText}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
        </div>

        <div className={about.aboutMeBodyBlock}>
          <h4>Experience</h4>
          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> 2017-2018
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
              <span></span> 2017-2018
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
              <span></span> 2017-2018
            </p>
            <h4>Stutern</h4>
            <p className={about.aboutMeText}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};