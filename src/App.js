import './App.css';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/signup/Signup'
import SignIn from './components/signin/Signin'
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import Cart from '../src/components/cart/Cart'
import Checkout from './components/checkout/Checkout'
import {Routes,Route,} from 'react-router-dom'
import ShopContextProvider from './context/shop-context';
import About from './components/About/About';



function App() {
  return (
  <div>
      <ShopContextProvider >
    <Navbar />
     <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}  />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path ='/cart' element={ <Cart/>}/>
      <Route path ='/about' element={ <About/>}/>
      <Route path='/checkout' element={<Checkout/>}/>

     </Routes>
     <Footer/>

    </ShopContextProvider>
  </div>
  );
}

export default App;
