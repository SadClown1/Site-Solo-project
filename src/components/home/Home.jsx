import React from 'react'
import Hero from '../../containers/hero/Hero'
import Questions from '../../containers/questions/Questions'
import Shop from '../shop/Shop'


import './home.css'

const Home = () => {
  return (
    <div>
       <Hero/>
       <Shop />
       <Questions/>

    </div>
  )
}

export default Home