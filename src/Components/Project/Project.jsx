import pro from './project.module.css'
import loan from '../../assets/loan.png'
import shop from '../../assets/shop.png'
import net from '../../assets/netflix.png'
import stella from '../../assets/stella.png'
import naija from '../../assets/naija.png'
import cornie from '../../assets/cornie.png'
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
                    <img src={cornie} alt="" />
                </div>
                <h3>Cornie Health</h3>
                <div className={pro.project_item_cta}>
                <a href="https://corniehealth.com/" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={naija} alt="" />
                </div>
                <h3>NaijaKoboMarket</h3>
                <div className={pro.project_item_cta}>
                <a href="https://www.naijakobomarket.com/" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={stella} alt="" />
                </div>
                <h3>Stella Sync</h3>
                <div className={pro.project_item_cta}>
                <a href="https://loan-indol.vercel.app" target='_blank'>Live Demo</a></div>
            </article>
        <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={loan} alt="" />
                </div>
                <h3>Loanify</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/Loan" target='_blank'>Github</a>
                <a href="https://loan-indol.vercel.app" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={sportify} alt="" />
                </div>
                <h3>Spotify</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/Spotify-clone" target='_blank'>Github</a>
                <a href="https://spotify-clone-eight-tau.vercel.app/?vercelToolbarCode=p5XZX3tuXQBCnxH" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={net} alt="" />
                </div>
                <h3>Netflix</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/Stutern-Netflix-landing-page" target='_blank'>Github</a>
                <a href="https://stutern-netflix-landing-page.vercel.app/" target='_blank'>Live Demo</a></div>
            </article>
            <article className={pro.project_item}>
                <div className={pro.project_item_image}>
                    <img src={shop} alt="" />
                </div>
                <h3>Shopsatisfy</h3>
                <div className={pro.project_item_cta}>
                    <a href="https://github.com/Edleychris/shopsatisfy-ecommerce" target='_blank'>Github</a>
                    <a href="https://shopsatisfy-ecommerce.vercel.app/" target='_blank'>Live Demo</a>
                    </div>
            </article>
        </div>
    </div>
  )
}

export default Project
