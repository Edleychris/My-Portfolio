import cv from '../../assets/resume.pdf'
import {Link} from 'react-router-dom'
import home from './home.module.css'


export const CTA = () => {
    return (
      <div className={home.buttonContainer}>
      <a href={cv} download>Download CV</a>
      <Link to='/contact'>Let's Talk</Link>
      </div>
    )
  }