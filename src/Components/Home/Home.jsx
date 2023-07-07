import React from 'react'
import home from './home.module.css'
import { CTA } from './CTA'

function Home() {
  return (
    <div className={home.homeContainer}>
    <div className={home.homeContainerText}>
      <h1>Hi, I'm Edith O.</h1>
      <h3>Frontend Developer</h3>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a
        typeface without relying on meaningful content. Lorem ipsum may be
        used as a placeholder before final copy is available.
      </p>
      <CTA />
    </div>
    <div className={home.homeContainerImage}>
    </div>
  </div>
  )
}

export default Home