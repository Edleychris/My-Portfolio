import styles from './project.module.css';

import loan from '../../assets/loan.png';
import shop from '../../assets/shop.png';
import net from '../../assets/netflix.png';
import stella from '../../assets/stella.png';
import naija from '../../assets/naija.png';
import cornie from '../../assets/cornie.png';
import tespire from '../../assets/tespire-co.png';
import basic from '../../assets/tespire-basic.png';
import spotify from '../../assets/sportify.png';

const projects = [
   {
    title: 'Tespire',
    image: tespire,
    links: [{ label: 'Live Demo', url: 'https://tespire.co/' }],
  },
  {
    title: 'Tespire Basic School',
    image: basic,
    links: [{ label: 'Live Demo', url: 'https://basic.tespire.school/' }],
  },
  {
    title: 'Cornie Health',
    image: cornie,
    links: [{ label: 'Live Demo', url: 'https://corniehealth.com/' }],
  },
  {
    title: 'NaijaKoboMarket',
    image: naija,
    links: [{ label: 'Live Demo', url: 'https://www.naijakobomarket.com/' }],
  },

  {
    title: 'Loanify',
    image: loan,
    links: [
      { label: 'GitHub', url: 'https://github.com/Edleychris/Loan' },
      { label: 'Live Demo', url: 'https://loan-indol.vercel.app' },
    ],
  },
  {
    title: 'Spotify Clone',
    image: spotify,
    links: [
      { label: 'GitHub', url: 'https://github.com/Edleychris/Spotify-clone' },
      { label: 'Live Demo', url: 'https://spotify-clone-eight-tau.vercel.app/' },
    ],
  },
  {
    title: 'Netflix Landing Page',
    image: net,
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Edleychris/Stutern-Netflix-landing-page',
      },
      {
        label: 'Live Demo',
        url: 'https://stutern-netflix-landing-page.vercel.app/',
      },
    ],
  },
  {
    title: 'Shopsatisfy',
    image: shop,
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Edleychris/shopsatisfy-ecommerce',
      },
      {
        label: 'Live Demo',
        url: 'https://shopsatisfy-ecommerce.vercel.app/',
      },
    ],
  },
];

function Project() {
  return (
    <section id="project" className={styles.project_main_container}>
      <div className={styles.project_main_container__h2}>
        <h2>Projects</h2>
      </div>

      <div className={styles.project_container}>
        {projects.map((project, index) => (
          <article key={index} className={styles.project_item}>
            <div className={styles.project_item_image}>
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className={styles.project_item_cta}>
              {project.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
