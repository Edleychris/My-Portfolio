import about from "./about.module.css";

function About() {
  return (
    <div id="about" className={about.aboutMeContainer}>
      <div className={about.aboutMeHeader}>
        <h2>About Me</h2>
        <p>
          {/* As a frontend developer, I focus on building captivating websites that
          engage users. With a keen eye for design and expertise in front-end
          technologies, I strive to create impactful web experiences that leave
          a lasting impression. */}
          Nkiruka is an ambitious and skilled software developer, seeking a dynamic and challenging
          career opportunity that leverages her extensive experience in React.js, Vue.js, and full-stack
          development, dedicated to driving the success of forward-thinking companies by delivering
          innovative solutions, enhancing operational efficiency, and contributing to team success. she
          aims to continuously expand her technical expertise and professional growth within a
          stimulating and collaborative environment.
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
              <span></span>Aug. 2023-Present
            </p>
            <h4>
              Scello Technologies Nig Ltd <br></br>
              <span className={about.smallText} style={{ color: "#2C74B3" }}>
                Frontend Developer
              </span>
            </h4>
            <p className={about.aboutMeText}>
              • Played a crucial role in developing and launching Cornie Health, a comprehensive health
              solution used by various healthcare sectors.
              • Contributed to the development of robust frontend architectures, ensuring scalability and
              maintainability
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span>Jan. 2022- Jan. 2024
            </p>
            <h4>
              Green Tech Communications & Network Ltd<br></br>
              <span className={about.smallText} style={{ color: "#2C74B3" }}>
                Frontend Developer
              </span>
            </h4>
            <p className={about.aboutMeText}>
              • Contributed to the design and development of web-based user interfaces, crafting
              highly responsive web applications using React.js.
            </p>
            <p className={about.aboutMeText}>
              • Successfully oversaw the deployment of two major platforms: NaijaKoboMarket, an e-commerce solution, and Stella Sync, a data synchronization health solution platform.
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span>Aug. 2022- Dec. 2022
            </p>
            <h4>
              Scillafield Solution Ltd<br></br>
              <span className={about.smallText} style={{ color: "#2C74B3" }}>
                Frontend Developer (Contract)
              </span>
            </h4>
            <p className={about.aboutMeText}>
              • Developed secure and user-friendly applications using React.js and Next.js,
              significantly enhancing health performance and user experience.
            </p>
            <p className={about.aboutMeText}>
              • Designed and implemented responsive interfaces, ensuring seamless functionality
              across multiple devices and browsers with React.js, Vue.js, and Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
