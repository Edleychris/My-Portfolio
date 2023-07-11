import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import skill from "./skill.module.css";

function Skill () {
  return (
    <div id="skill" className={skill.skillContainer}>
      <h2>My Skills</h2>
      <div className={skill.container}>
        <div className={skill.mainSkillContainer}>
          <h3>Coding Skills</h3>
          <div className={skill.skillBlock}>
          <div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Html5, CSS3</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon} />
              <div className={skill.mySkills}>
                <h3>JavaScript</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>React</h3>
                <p>Experienced</p>
              </div>
            </div>
         </div>

         <div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon} />
              <div className={skill.mySkills}>
                <h3>GIT</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>SASS</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Bootsrap</h3>
                <p>Experienced</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className={skill.mainSkillContainer}>
          <h3>Technical/Soft Skills</h3>
          <div className={skill.skillBlock}>
          <div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Technical writing</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Research</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Leadership</h3>
                <p>Experienced</p>
              </div>
            </div>
         </div>

         <div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>MS OFFICE</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Creativity</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Teamwork</h3>
                <p>Experienced</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};
export default Skill;