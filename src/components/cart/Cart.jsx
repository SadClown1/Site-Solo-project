import React, {useContext} from 'react'
import data from '../../data'
import {ShopContext} from '../../context/shop-context'
import CartItem from '../cart/cart-item'
import { useNavigate } from 'react-router-dom'
import './cart.css'


const Cart = () => {
  const { cartItems,getTotalAmount} = useContext(ShopContext)
  const totalAmount = getTotalAmount()
  const navigate = useNavigate()


  return (
    <div className='cart'>
        <div><h1>سبد خرید شما:</h1></div>
        <div className='cartItems'>
        {data.map((item) => {
          if (cartItems[item.id] !== 0 ){
            return <CartItem data={item}/>
          }
})}
</div>

                {totalAmount>0 ?
               <div className='checkout mb-5'>
                   <p className='pp'>قیمت نهایی : {totalAmount}$</p>
                   <button onClick={()=>navigate("/")}>ادامه خرید</button>
                   <a href='/checkout'><button>تکمیل خرید</button></a>
              </div>
              :<h1 className='s-h1'>سبد خرید شما خالی است!</h1>  }
        </div>
    
  )
}

export default Cart