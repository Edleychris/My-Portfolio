import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import skill from "./skill.module.css";

function Skill () {
  return (
    <div id="skill" className={skill.skillContainer}>
      <h2>My Skills</h2>
      <div className={skill.container}>
        <div className={skill.mainSkillContainer}>
          <h3>Frameworks/Libraries</h3>
          <div className={skill.skillBlock}>
          <div className={skill.sub_contai}>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Vue.js</h3>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon} />
              <div className={skill.mySkills}>
                <h3>React.js</h3>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Nuxt.js</h3>
              </div>
            </div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon} />
              <div className={skill.mySkills}>
                <h3>Next.js</h3>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Tailwind CSS</h3>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Bootstrap</h3>
              </div>
            </div>
         </div>

         {/* <div>
            </div> */}
          </div>
        </div>

        <div className={skill.blockSkill}>
        <div className={skill.iio}>
          <h3>Languages</h3>
          <div className={skill.skillBlock}>
          <div className={skill.sub_contai}>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>JavaScript (ES6+)</h3>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Typescript</h3>
              </div>
            </div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>PHP</h3>
              </div>
            </div>

         </div>
          </div>
        </div>

        <div className={skill.iio}>
          <h3>State Management</h3>
          <div className={skill.skillBlock}>
          <div className={skill.sub_contai} >
          {/* style={{ width: '56%' }} */}
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Redux</h3>
              </div>
            </div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Vuex</h3>
              </div>
            </div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Pinia</h3>
              </div>
            </div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Zustand</h3>
              </div>
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