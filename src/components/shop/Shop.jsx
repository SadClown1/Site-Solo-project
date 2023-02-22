import React from 'react'
import data from '../../data'
import Card from '../../containers/card/Card'






import './shop.css'


const Shop = () => {

  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})     

 
 

  return (
       <div id='shop'>
          <div className='products '>
    <h4>محصولات پرفروش</h4>
      <section className="cards-list"id='shop'>
      {cards}
  </section>
  </div>

 
       </div>
  )
}

export default Shop