import React from "react";
import home from "./home.module.css";
import { CTA } from "./CTA";
import nk from "../../assets/nk.jpg";

function Home() {
  return (
    <div id="home" className={home.homeContainer}>
      <div className={home.homeContainerText}>
        <h1>Hi, I'm Edith O.</h1>
        <h3>Frontend Developer</h3>
        <p>
          I specialize in developing visually appealing websites that provide
          seamless navigation and deliver an enjoyable user experience. With a
          natural talent for innovative design and a deep understanding of
          front-end technologies.
        </p>
        <CTA />
      </div>
      <div className={home.homeContainerImage}>
        <img src={nk} alt="" />
      </div>
    </div>
  );
}

export default Home;
