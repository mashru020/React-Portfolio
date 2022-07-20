import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'


// dynamic portfolio item data
const data = [
  {
    id:1,
    image:IMG1,
    title:"Bankis Website",
    github: 'https://github.com/mashru020/Bankist__Website',
    demo:'https://mashru020.github.io/Bankist__Website/',
  },
  {
    id:2,
    image:IMG2,
    title:"Bankist",
    github: 'https://github.com/mashru020/Bankist',
    demo:'https://mashru020.github.io/Bankist/',
  },
  {
    id:3,
    image:IMG3,
    title:"Roll Dice",
    github: 'https://github.com/mashru020/PigGame',
    demo:'https://mashru020.github.io/PigGame/',
  },
  {
    id:4,
    image:IMG4,
    title:"Mapty",
    github: 'https://github.com/mashru020/Mapty',
    demo:'https://mashru020.github.io/Mapty/',
  },
  {
    id:5,
    image:IMG5,
    title:"Remittance-Web",
    github: 'https://github.com/mashru020/Remittance',
    demo:'https://mashru020.github.io/Remittance/',
  },
  {
    id:6,
    image:IMG6,
    title:"Wallet-Web",
    github: 'https://github.com/mashru020/Wallet',
    demo:'https://mashru020.github.io/Wallet/',
  },

]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio