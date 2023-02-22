import React,{useContext} from 'react'
import {ShopContext} from '../../context/shop-context'
import './card.css'

const Card = (props) => {
const {addToCart, cartItems} = useContext(ShopContext)
const cartItemAmount = cartItems[props.id]

  return (
  
      <div className='card mx-auto text-center'>
             
   <img 
                src={props.coverImg}
                className="card--image" 
            />
            <div className="card--stats">
            </div>
            <p className="card--title ">{props.title}</p>
            <p className="card--price">
                <span className="bold">${props.price}</span> 
            </p>
            <button className='btn s-btn btn-primary w-75 mx-auto mb-3 p-btn' onClick={ () => addToCart(props.id) }>
              اضافه به سبد خرید{cartItemAmount>0 &&<>({cartItemAmount})</>}
            </button>
            
    </div>
        
  
  )
}

export default Card