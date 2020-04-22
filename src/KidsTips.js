import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


function KidsTips() {
    return (
      <div className='kids-tips-background'>
        <div className='container '>
        <ScrollAnimation animateIn="fadeIn">
            <div >

              <h1 className=' parentshead pt-5 '>Tips for children</h1>
            
              
              <div  class="parent-image text-center zoom-in mt-5">
                <img src={ require("./images/Kids_tips.jpg")} class="img-fluid kids-tips-image" alt="interview process"/>
              </div>

            </div>
          </ScrollAnimation>
          <div className='container parent-text-space mb-5 pb-5'>
            <p className ='font-weight-bold m-4'>
                1. Dear kids! Sometimes you maybe see injured koalas or wombats in the wild
                when you go out to play! They are very weak at that time and good boys will
                not poke them with branches or hit them with stones! Otherwise, koalas and
                wombats will hurt and will never play with kids!
            </p>  

           
            <p className ='font-weight-bold m-4'>
                2. We know that you all especially want to take your cute pet dogs for a walk.
                But little koalas and wombats may be afraid of them. So dear kids, when you
                see koalas and wombats, please Keep your pet dogs away from the lovely small
                animals!
            </p>  

           
            <p className ='font-weight-bold m-4'>
                3. You are all be able to eat delicious ice cream in summer! But koalas and
                other small animals will be happy as long as they can drink clean water! If there
                are small animals in the vicinity, please prepare some water for them. They will
                thank all of those kind kids very much!
            </p>  

            <p className ='font-weight-bold m-4'>
                4. Dear children, I know you think wallaby are cute and funny, but their
                strength is truly great just like a superman! Keep a safe distance from them!!!
            </p>  

           
            <p className ='font-weight-bold m-4'>
                5. Dear children! If you touch cute wild animals in the wild, do not forget to
                wash your hands!! It is very important for all lovely kids to use fragrant hand
                wash to wash your hands carefully! Otherwise, you may will take other &quot;little
                animals&quot; to your home!
            </p> 

            <p className ='font-weight-bold m-4'>
                6. I know that you all have strong compassion and hope that cute animals can
                stay with you at your home. However, small animals prefer to return to the wild,
                that is their own home!
            </p> 

            <p className ='font-weight-bold m-4'>
                7. Dear children, I know you like snacks very much and are willing to share
                your snacks with small wild animals. But the little animals have their own food!
                If they eat unsuitable food, they will feel very bad! So dear children, just enjoy
                snacks by yourself
            </p> 
    
        </div>
     

        
      </div>
      <footer class="site-footer">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-6 col-12" data-aos-delay="200">
                    <h4 class="my-4">Contact Info</h4>

                    <p class="mb-1">
                    <i className="fa fa-phone mr-2 footer-icon"></i> 
                    +99 080 070 4224
                    </p>

                    <p>
                    <a href="#">
                        <i class="fa fa-envelope mr-2 footer-icon"></i>
                        hello@company.com
                    </a>
                    </p>
                </div>

                <div class="col-lg-3 col-md-6 col-12" data-aos-delay="300">
                    <h4 class="my-4">Our Studio</h4>

                    <p class="mb-1">
                    <i class="fa fa-home mr-2 footer-icon"></i> 
                    Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil
                    </p>
                </div>

                <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos-delay="400">
                    <p class="copyright-text">Copyright &copy; 2020 Your Company
                    <br></br>
                    <a rel="nofollow noopener" href="https://templatemo.com">Design: TemplateMo</a></p>
                </div>

                </div>
            </div>
        </footer>
      </div>
    );
  }

  export default KidsTips