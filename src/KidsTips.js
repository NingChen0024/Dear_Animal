import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


function KidsTips() {
    return (
      <div className='kids-tips-background'>
        <div className='container '>
            <ScrollAnimation animateIn="fadeIn">
                <div >

                <h1 className=' parentshead pt-5 '>Tips for you! </h1>
                            
                <div  class="parent-image text-center zoom-in mt-5">
                    <img src={ require("./images/kidsTIps_one.png")} class="img-fluid kids-tips-image" alt="interview process"/>
                </div>

                </div>
            </ScrollAnimation>


          <div className='container parent-text-space mt-5 pt-5 mb-5 pb-5'> 

            <div className='row mt-5 mp-5'>
                    <div class="col-lg-5 col-md-5 col-12 mb-4 mt-3 pl-5">

                        <img src={ require("./images/KidsTips_four.png")} class="img-fluid kidstipimage" alt="interview process"/>

                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4"  >
                    <p className ='font-weight-bold mt-4'>
                        1. If you have Cats, attach a small bell to them. It helps to alert the native animals to run away.
                    </p>  
                    </div>
            </div>
           
           

            <div className='row mt-5 mp-5'>

                    <div class="col-lg-5 col-md-5 col-12 mb-4 pl-5"  >
                        <p className ='font-weight-bold mt-4'>
                            2. Yes, polluting the forest or parks with plastics, glasses, steels would cause a 
                            injury or harm to the animals easily. Avoid using  them and throw the waste in bin.
                        </p>  
                    </div>

                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">

                        <img src={ require("./images/KIdsTips_three.png")} class="img-fluid kidstipimage" alt="interview process"/>

                    </div>
            </div>
           
            
            <div className='row mt-5 mp-5'>
                    <div class="col-lg-5 col-md-5 col-12 mb-4 mt-3 pl-5">

                        <img src={ require("./images/kidsTips_two.png")} class="img-fluid kidstipimage" alt="interview process"/>

                    </div>
                    
                    <div class="col-lg-7 col-md-7 col-12 mb-4"  >
                    <p className ='font-weight-bold mt-4'>
                        3.First ask your parents, make sure you follow the guidelines and wear all protective measures to help them safely.
                    </p>  
                    </div>
            </div>

         
    
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
                    <a rel="nofollow noopener" href="https://templatemo.com">Design: </a></p>
                </div>

                </div>
            </div>
        </footer>
      </div>
    );
  }

  export default KidsTips