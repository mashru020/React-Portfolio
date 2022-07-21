import React from 'react'
import './footer.css'
import {SiCodewars} from 'react-icons/si'
import {FaCodepen} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mashrur</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__social">
        
        <a href="https://www.linkedin.com/in/mashru020/"><BsLinkedin/></a>
        <a href="https://cssbattle.dev/player/mashru020"><SiCss3/></a>
        <a href="https://codepen.io/mashru020"><FaCodepen/></a>
        <a href="https://www.hackerrank.com/mashru020"><FaHackerrank/></a>  
        <a href="https://www.codewars.com/users/mashru020"><SiCodewars/></a>   
      </div>

      <div className="footer__copyright">
        <small>&copy; Mashrur. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer