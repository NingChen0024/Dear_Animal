import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom'

function Parent() {
    return (
      <div >
        <div className='container mb-5 pb-5'>
        
        
        <div class="row">
    
          <div class="col-lg-12 col-12 py-5 mt-5 mb-3 text-center">
            <ScrollAnimation animateIn="fadeIn">
              <h1 class="mb-4 parentshead" >All you need to know as a parent</h1>
            </ScrollAnimation>
          </div>

          <div class="col-lg-7 col-md-7 col-12 mb-4">
            <div class="blog-header" data-aos-delay="100">
              <img src={ require("./images/project/parents_tips.jpg")} class="img-fluid" alt="blog header"/>

              <div class="blog-header-info">
                <h4 class="blog-category text-info">Tips</h4>

                <Link to='/parentTips'>
                  <h3>10 Easy Things You Can Do to Save Endangered Species</h3>                        
                </Link>

              </div>
            </div>
          </div>
         
          <div class="col-lg-5 col-md-5 col-12 mb-4"  >
      
            <div class="blog-sidebar d-flex justify-content-center align-items-center"  data-aos-delay="200">
              <img src={ require("./images/project/parents_help.jpg")} class="img-fluid" alt="blog"/>

              <div class="blog-info">
                <h4 class="blog-category text-danger">Rescure</h4>

                <Link to='/parentRescure'>
                  <h3>Methods that are critical to help harmed animals</h3>                        
                </Link>
                
              </div>
            </div>
          
            <div class="blog-sidebar py-4 d-flex justify-content-center align-items-center" data-aos-delay="300">
              <img src={ require("./images/project/parents_cons.jpg")} class="img-fluid" alt="blog"/>

              <div class="blog-info">
                <h4 class="blog-category text-primary">Conservation</h4>
                <Link to='/parentCons'>
                  <h3>Conservation measures for serveral animals</h3>                        
                </Link>
        
              </div>
            </div>

            <div class="blog-sidebar py-4 d-flex justify-content-center align-items-center" data-aos-delay="300">
              <img src={ require("./images/project/parents_faq.jpg")} class="img-fluid" alt="blog"/>

              <div class="blog-info">
                <h4 class="blog-category text-success">FAQ</h4>
                <Link to='/parentFaq'>
                  <h3>All the answers of frequently asked questions</h3>                        
                </Link>
        
              </div>
            </div>
         
          </div>
          
          <div class="col-lg-5 ml-auto mt-5 pt-5 col-md-6 col-12">
            <img src={ require("./images/newsletter.png")} data-aos-delay="100" class="img-fluid" alt="newsletter"/>
          </div>

          <div class="col-lg-5 mr-auto mt-5 pt-5 col-md-6 col-12">
            <h4  data-aos-delay="200">Contact Us</h4>

            <h2  data-aos-delay="300">We value your opinions.</h2>
            <h4  data-aos-delay="300">Please let us know your ideas about our service.</h4>
            <p   data-aos-delay="300">Email to: dearanimal@gmail.com</p>
            <div class="form-group mt-4"  data-aos-delay="400">

            <small id="emailHelp" class="form-text text-muted" >We'll NOT share your email address to anyone else.</small>

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

  export default Parent