import React from 'react'
import './question.css'
const Questions = () => {
  return (
    <div id='questions' className='w-75 mx-auto'>
         <div class="accordion question mx-auto my-1  p-3 my-5 rounded-3 shadow gradient__bg" id="accordionExample">
    <div class="mx-auto rounded gg text-center d-flex flex-row justify-content-center my-2">
      <h2 class="mx-3 text-light">سوالات متداول</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-question-circle mt-1 text-light" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
      </svg>
    </div>
    <div class="accordion-item my-3 rounded-3 border border-dark border-3 border-opacity-10 shadow-sm  questions">
      <h2 class="accordion-header" id="headingOne">
        <button class=" accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           
برای استفاده از گیفت کارت گوگل باید چه‌کار کرد؟     
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body q-text">
          اگر قصد دارید تا با کمک گیفت کارت، حساب کاربری خود را شارژ کنید، ابتدا باید گیفت کارتی مطابق با ریجن اکانت خود را خریداری کنید. پس از این کار، باید در بخش اکانت گوگل پلی خود گزینه شارژ حساب کاربری از طریق گیفت کارت را انتخاب کنید. سپس، شما وارد صفحه‌ای می‌شوید که در آن باید کد گیفت کارت را وارد کنید. در ادامه و پس از وارد کردن کد گیفت کارت، نوبت به این می‌رسد که روی گزینه تایید کلیک کنید تا حساب کاربری شما شارژ شود.            </div>
      </div>
    </div>
    <div class="accordion-item my-3 rounded-3 border border-dark border-3 border-opacity-10 shadow-sm questions">
      <h2 class="accordion-header" id="headingTwo">
        <button class=" accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          اعتبارهای مختلف گیفت کارت گوگل پلی چقدر است؟
                     </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body  q-text">
          مانند بسیاری از گیفت کارت‌های دیگر، گیفت کارت گوگل پلی نیز دارای ریجن و منطقه خاص خود است. ازا ین رو، زمانی که شما برای خرید گیفت کارت این فروشگاه اقدام می‌کنید، باید حتما گیفت کارتی را انتخاب کنید که برای ریجن اکانت شما باشد. از جمله ریجن‌های پرطرفدار اکانت و گیفت کارت گوگل پلی می‌توان به آمریکا، انگلیس، ترکیه، کانادا و امارات اشاره کرد. از جمله گیفت کارت‌های ارائه‌شده برای ریجن آمریکا می‌توان به اعتبارهای 5، 10، 15، 20، 25، 30، 50، 60، 75، 100 و 200 دلاری اشاره کرد که شما می‌توانید با توجه به بودجه و نیاز خود، آن‌ها را خریداری کنید.            </div>
      </div>
    </div>
    <div class="accordion-item my-3 rounded-3 border border-dark border-3 border-opacity-10 shadow-sm questions">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          کات سین به چه معناست؟
                    </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body  q-text">
          در میان بازی‌های دیجیتالی گاهی اوقات صحنه‌هایی از بازی، معمولا بین مراحل یا در حین انجام بازی استاپ می‌شوند و فیلم‌ یا انیمیشن‌هایی تحت عنوان معرفی داستان بازی، کاراکترهای بازی، اطلاعات و جزییات بازی پخش می‌شوند. معمولا در کات سین‌های موجود در سناریوی بازی بازیکن نقش بخصوصی ندارد و صرفا تماشاچی می‌باشد.
        </div>
      </div>
    </div>
    <div class="accordion-item my-3 rounded-3 border border-dark border-3 border-opacity-10 shadow-sm questions">
      <h2 class="accordion-header" id="headingFour">
        <button class=" accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
           
          مزایای پلتفرم استیم چیست؟
                     </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body  q-text">
          پلتفرم  استیم امکانات فراوانی از قبیل، امکان ذخیره‌سازی بازی در سرویس فضای ابری، اجازه اشتراک گذاری لیست بازی، امکان ایجاد چت صوتی و تصویری، امکان آپدیت کردن بازی‌ها و نمایشگرهای BIG PICTURE و.. در اختیار کاربران قرار می‌دهد.            </div>
      </div>
    </div>
    <div class="accordion-item my-3 rounded-3 border border-dark border-3 border-opacity-10 shadow-sm questions">
      <h2 class="accordion-header" id="headingc">
        <button class=" accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsec" aria-expanded="true" aria-controls="collapsec">
           
          پلتفرم فعال سازی چیست؟
                      </button>
      </h2>
      <div id="collapsec" class="accordion-collapse collapse " aria-labelledby="headingc" data-bs-parent="#accordionExample">
        <div class="accordion-body  q-text">
          مطمئنا همه گیمرها حداقل یک بار در طول عمرشان واژه “پلتفرم” را  شنیده‌اند، خوب است بدانید، پلتفرم در حقیقت بستری است که برنامه‌های نرم افزاری نوشته شده برای یک بازی در آن قابل اجرا و استفاده می باشند. این بستر هم شامل برنامه‌های سخت افزاری و  هم نرم افزاری می ‌شود. معمولاً پلتفرم ها قابلیت و ویژگی‌های بسیاری دارند، شما می توانید از آن تحت عنوان یک “قفسه بازی” مجازی که در آن بازی‌های خود را نگهداری می‌کنید استفاده کنید. اوریجین،استیم،یوپلی، بتل نت و .. از نمونه پلتفرم‌های رایج و اصلی هستند.

        </div>
      </div>
    </div>

    <div class="accordion-item my-3 rounded-3 border border-dark border-3 border-opacity-10 shadow-sm questions">
      <h2 class="accordion-header" id="headingd">
        <button class=" accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsed" aria-expanded="true" aria-controls="collapsed">
           
           پلتفرم استیم چیست؟
                     </button>
      </h2>
      <div id="collapsed" class="accordion-collapse collapse " aria-labelledby="headingd" data-bs-parent="#accordionExample">
        <div class="accordion-body  q-text">
          استيم يك پرتال و فروشگاه جامع نرم‌افزاری توزیع بازی‌های آنلاین مولتی‌پلیر مختص گيمرها است. در پلتفرم استیم بازی‌هایی که خریداری می‌کنید، بر خلاف نسخه‌های فیزیکی برای همیشه متعلق به کاربر هستند. یکی از نکات کلیدی و کارآمد پلتفرم استیم بازیابی فایل‌های از دست رفته است. در صورت حذف‌شدن فایل ها از روی سیستم، قادر هستید، بازی‌های خریداری شده را مجدد مثل روز اول نصب کنید. خوشبختانه، فایل‌ها بر روی حافظه ذخیره‌سازی ابری استیم باقی می‌مانند، تنها لازم است پس از نصب مجدد ویندوز PC، یا ورود به استیم در سیستمی دیگر به آسانی محتویات را بازیابی کنید.            </div>
      </div>
    </div>

  </div>


    </div>
  )
}

export default Questions