import React,{useState,useContext} from 'react'


import './checkout.css'



const Checkout = () => {

  const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    address:'',
    select:'',
    cardInfo:'',
    cvv:'',
   })


   function handleChange(e){
    const{name,value,checked,type} =e.target 
    setFormData (prevData =>({
      ...prevData,
      [name] :type === 'checkbox' ? checked : value
    }))
   } 

   function checkout(e){
    e.preventDefault()
     localStorage.setItem('formData',JSON.stringify(formData))
   }





  return (
    <div className='checkout-container 'style={{backgroundImage:`url(images1/sign.jpg)`}}>
      <div className='checkout  w-50 mx-auto'>
      <form onSubmit={checkout}>
      <div className=' form-name p-4'>
        <input className='form-control w-50 c-input' placeholder='نام'
        type='text'
        name='firstName'
        onChange={handleChange}
        value={formData.firstName}
        />
        <input className='form-control w-50 c-input' placeholder=' نام خانوادگی'
           type='text'
           name='lastName'
           onChange={handleChange}
           value={formData.lastName}
           />
      </div>

      <div className='form-contact p-4'>
         <div>
             <label className='text-light'>تلفن</label>
            <input className='form-control w-100 c-input' placeholder='09120000000' 
            type='NUMBER'   
            name='phone'
            onChange={handleChange}
            value={formData.phone}
            />
         </div>

         <div>
           <label className='text-light'>ایمیل</label>
            <input className='form-control w-100 c-input' placeholder='something@gmail.com' 
            type='email'   
            name='email'
            onChange={handleChange}
            value={formData.email}
            />
         </div>

        <div>
            <label className='text-light'>آدرس</label>
            <input className='form-control w-100 c-input' placeholder='خیابان____'
               type='text'
               name='address'
               onChange={handleChange}
               value={formData.address}
            />
         </div>
        </div>

         <div className='form-data p-4 '>
            <div className='form-c'>
            <select class="form-select c-input" id="state" required
               type='select'
               name='select'
               onChange={handleChange}
               value={formData.select}
            >
                <option value="">شهر خود را انتخاب کنید</option>
                <option>تهران</option>
                <option>کرج</option>
                <option>کردستان</option>
                <option>شیراز</option>
                <option>اصفهان</option>
              </select>
            </div>
          </div>
          <hr className='hr mx-auto'/>

          <div className='payment p-4'>
             <h5>نحوه پرداخت</h5>
             <div>
             <input type="radio" id='' checked/>
             <label htmlFor="">کارت</label>
             </div>
            
             <div className='form-cards'>
              <div>
              <label className='text-light'>شماره حساب</label>
            <input className='form-control w-100 c-input'  
            type='NUMBER'   
            name='cardInfo'
            onChange={handleChange}
            value={formData.cardInfo}
            />
              </div>
              <div>
              <label className='text-light'>CVV </label>
            <input className='form-control w-100 c-input' 
            type='NUMBER'   
            name='cvv'
            onChange={handleChange}
            value={formData.cvv}
            />
              </div>

             </div>
          </div>
          <button className='w-75 mb-5'>تکمیل خرید</button>
      </form>
    </div>
    </div>
  )
}

export default Checkout