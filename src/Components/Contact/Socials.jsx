import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SlSocialTwitter} from 'react-icons/sl';
import con from './contact.module.css'

function Socials () {
  return (
    <div className={con.socialsHeader}>
    <a href='https://www.linkedin.com/in/onwugbufor-nkiruka-5a9837243/'><BsLinkedin/></a>
    <a href='https://github.com/Edleychris'><BsGithub/></a>
    <a href='https://twitter.com/EdleyChris2'><SlSocialTwitter/></a>
    </div>
  )
}
export default Socials;