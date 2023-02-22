import React from 'react'
import Features from '../../containers/features/Features'
import Header from '../../containers/header/Header'
import Contact from '../../containers/contact/Contact'
const About = () => {
  return (
    <div className='about' id='home'>
       <Header/>
       <Features/>
       <Contact/>
    </div>
  )
}

export default About