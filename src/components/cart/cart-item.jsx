import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context'


     const CartItem = (props) => {
     const {id,coverImg,title,price} = props.data
     const{cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext)
  return (
    <div className=' cartItem'>
             
   <img 
                src={coverImg}
                className="" 
            />
            <div className="description">
            
            <p className='p'>{title}</p>
            <p >
                <span className='p' >${price}</span> 
                <div className='countHandler'>
                    <button onClick={()=>removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={()=>addToCart(id)}> + </button>

                </div>
            </p>
            </div>
            </div>
  )
}

export default CartItem