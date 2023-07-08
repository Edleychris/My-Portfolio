import cv from '../../assets/resume.pdf'
import home from './home.module.css'


export const CTA = () => {
    return (
      <div className={home.buttonContainer}>
      <a href={cv} download>Download CV</a>
      <a to='#contact'>Let's Talk</a>
      </div>
    )
  }