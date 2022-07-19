import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://hackerrank.com" target="_blank"><FaHackerrank/></a>
    </div>
  )
}

export default HeaderSocial