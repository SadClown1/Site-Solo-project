import React,{useState} from 'react'
import './signup.css'


const SignUp = () => {
  const [formData,setFormData] = useState({
    email:'',
    password:'',
   })

   function handleChange(e){
    const{name,value,checked,type} =e.target 
    setFormData (prevData =>({
      ...prevData,
      [name] :type === 'checkbox' ? checked : value
    }))
   } 

   function handleSubmit(e){
    e.preventDefault()
     localStorage.setItem('formData',JSON.stringify(formData))
   }


  return (
   <div className='sign-up ' style={{backgroundImage:`url(images1/sign.jpg)`}}>
     <main class="form-signin w-50 mx-auto text-center p-5  mainss" >
    <form onSubmit={handleSubmit}>
      
      <h1 class="h3 mb-5 fw-normal">فرم ثبت نام</h1>
  
      <div className='the-inputs'>
    <div class="form-floating mb-5 w-75 mx-auto mt-5  inputss">
    <input type="email" 
        class="form-control " 
        id="floatingInput" 
        placeholder="name@example.com"
        name='email'
        onChange={handleChange}
        value={formData.email}
        />
                <label for="floatingInput">ایمیل</label>
      </div>
      <div class="form-floating mb-3 w-75 mx-auto mt-5 inputss">
      <input type="password"
         class="form-control "
          id="floatingPassword" 
          placeholder="Password"
          name='password'
          onChange={handleChange}
          value={formData.password}
          />        
          <label for="floatingPassword">رمز عبور</label>
      </div>
    </div>
      <div class="checkbox mb-3 ">
        <label>
          <input type="checkbox" value="remember-me"/> قوانین را میپذیرم
        </label>
      </div>
      <button class=" w-75 mx-auto  btn btn-lg btn-primary" type="submit"> ثبت نام</button>
      
    </form>
  </main>
   </div>
  )
}

export default SignUp