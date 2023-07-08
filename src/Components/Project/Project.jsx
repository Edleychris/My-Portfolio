import React from 'react'
import pro from './project.module.css'
import loan from '../../assets/loan.png'
import shop from '../../assets/shop.png'
import net from '../../assets/netflix.png'
import udem from '../../assets/udemy.png'
import inst from '../../assets/insta.png'
import trad from '../../assets/trading.png'
import sportify from '../../assets/sportify.png'

function Project() {
  return (
    <div id='project' className={pro.project_main_container}>
        <div className={pro.project_main_container__h2}>
            <h2>Projects</h2>
        </div>
        <div className={pro.project_container}>
        <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={loan} alt="" />
                </div>
                <h3>This is the Title</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/Loan" target='_blank'>Github</a>
                <a href="https://loan-indol.vercel.app" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={sportify} alt="" />
                </div>
                <h3>This is the Title</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/Spotify-clone" target='_blank'>Github</a>
                <a href="https://spotify-clone-eight-tau.vercel.app/?vercelToolbarCode=p5XZX3tuXQBCnxH" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={net} alt="" />
                </div>
                <h3>This is the Title</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/Stutern-Netflix-landing-page" target='_blank'>Github</a>
                <a href="https://stutern-netflix-landing-page.vercel.app/" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={shop} alt="" />
                </div>
                <h3>This is the Title</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/shopsatisfy-ecommerce" target='_blank'>Github</a>
                    <a href="https://shopsatisfy-ecommerce.vercel.app/" target='_blank'>Live Demo</a>
                    </div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={udem} alt="" />
                </div>
                <h3>This is the Title</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/Udemy-clone" target='_blank'>Github</a>
                <a href="https://udemy-clone-murex.vercel.app/" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={inst} alt="" />
                </div>
                <h3>This is the Title</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/Instagram_clone" target='_blank'>Github</a>
                <a href="https://instagram-eta-seven.vercel.app/?vercelToolbarCode=Kj3zEjNNdrl7-ga" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src="" alt="" />
                </div>
                <h3>This is the Title</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/Note-Pad" target='_blank'>Github</a>
                <a href="https://note-pad-khaki.vercel.app/?vercelToolbarCode=vz3MgVCYstGNvjt" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src="" alt="" />
                </div>
                <h3>This is the Title</h3>
                <div className={pro.project_item_cta}><a href="" target='_blank'>Github</a>
                <a href="https://spotify-clone-tt85.vercel.app/" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={trad} alt="" />
                </div>
                <h3>This is the Title</h3>
                <div className={pro.project_item_cta}>
                    <a href="" target='_blank'>Github</a>
                <a href="https://my-animal-trading-card.vercel.app/" target='_blank'>Live Demo</a></div>
            </article>
        </div>
    </div>
  )
}

export default Project
