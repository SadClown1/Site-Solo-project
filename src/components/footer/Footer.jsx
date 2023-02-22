import React from 'react'
import insta from '../../images/insta.png'
import tel from '../../images/tel.png'
import twitter from '../../images/twitter.png'
import './footer.css'


const Footer = () => {
  return (
    <div class="footerss text-light">
  <footer class="py-3 text-light footers">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 ">خانه</a></li>
      <li class="nav-item"><a href="/#shop" class="nav-link px-2 ">محصولات</a></li>
      <li class="nav-item"><a href="/#questions" class="nav-link px-2 ">سوالات متداول</a></li>
      <li class="nav-item"><a href="/checkout" class="nav-link px-2 ">سبد خرید</a></li>
    </ul>
    <p class="text-center ">&copy; تمامی حقوق مطعلق به این سایت است</p>
  </footer>
</div>
  )
}

export default Footer