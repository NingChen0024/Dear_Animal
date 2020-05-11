import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FloatingMenu, MainButton, ChildButton} from 'react-floating-button-menu';
import ReactPlayer from "react-player"
import { isPipelinePrimaryTopicReference } from '@babel/types';


// the main component pervide navigation to other pages and the theme is customized for 
// the topic


class Main extends Component{
     
     state = {
          isOpen: false,
        }

    render(){
    return(

        <div>
        <section className="hero hero-bg d-flex justify-content-center align-items-center" id='list'>
               <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                              <div className="hero-text">

                                   <h1 className="text-white unifont" data-aos="fade-up">Say hi to endangered animals in Victoria</h1>
                                   
                                   <Link to='/animalList'>     
                                        <a class="custom-btn btn-bg btn mt-3 unifont" data-aos="fade-up" data-aos-delay="100">Let's make friends</a>
                                   </Link>
                                   
                              </div>
                        </div>
                        <div className="col-lg-5 col-12">
                          <div className="hero-image" data-aos="fade-up" data-aos-delay="300">

                            <img src={ require("./images/koala_cartoon.png")} class="img-fluid" alt="working girl"/>
                          
                          </div>
                        </div>
                    </div>
               </div>
          </section>


     
     <section class="about section-padding pb-0 about-background" id="tips">
          <div class="container">
               <div class="row">

                    <div class="col-lg-7 mx-auto col-md-10 col-12 ">
                         <div class="about-info">
                              <h2 class="mb-4 unifont" data-aos="fade-up">We know you want to help your <strong>animals friends !</strong></h2>
                              <div class="row">
                                   <p class="mb-3 col-lg-8 col-md-8 kids-tip-font unifont" data-aos="fade-up">Several ways to help your animal friends!</p>
                                   <div className=' mt-3 col-md-4 col-lg-4'>
                                        <Link to='/kidsTips'>     
                                             <a class="tips-custom-btn tips-btn-bg btn unifont" data-aos="fade-up">Show Me!</a>
                                        </Link>
                                   </div>
                              </div>                        
                         </div>
                         <div class="about-image" data-aos="fade-up" data-aos-delay="200">

                          <img src={ require("./images/kangaroo_cartoon.png")} class="img-fluid mb-5" alt="office"/>
                         
                        </div>
                    </div>

               </div>
          </div>
     </section>


  
     <section class="project section-padding fade-up" id="acts">
          <h2 class="mb-5 text-center unifont" data-aos="fade-up">
               Please take a look through all<strong> amazing activities</strong>
          </h2>
          <div class="container-fluid col-md-9">
               <div id="carouselExampleIndicators" class="carousel slide fade-up" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div class="carousel-inner">
                              <div class="carousel-item active" data-aos="fade-up" data-aos-delay="100">
                                   <Link to='/wildexp'>
                                        <img src={ require("./images/project/Project_one.jpg")} class="img-fluid d-block w-100" alt="project image"/>
                                   </Link>
                                   <div class="project-info">
                                        <small>Outdoors</small>
                                        <h3>
                                        
                                             <span>Wild Explorers</span>
                                        
                                        </h3>
                                   </div>
                              </div>

                              <div class="carousel-item " data-aos="fade-up">
                                   <Link to='/natureCall'>
                                        <img src={ require("./images/project/Project_two.jpg")} class="img-fluid d-block w-100" alt="project image"/>
                                   </Link>
                                   <div class="project-info">
                                        <small>Exploring</small>

                                        <h3>
                                        
                                             <span>Nature's Calling</span>
                                       
                                        </h3>
                                   </div>
                              </div>

                              <div class="carousel-item " data-aos="fade-up">
                                   <Link to='/ausAdv'>
                                        <img src={ require("./images/project/Project_three.jpg")} class="img-fluid d-block w-100" alt="project image"/>
                                   </Link>
                                   <div class="project-info">
                                        <small>Adventures</small>

                                        <h3>
                                            
                                                  <span>Aussie Animal Adventurers</span>
                                                
                                        </h3>
                                   </div>
                              </div>

                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>

                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                         </div>
                    </div>
          
          </section>


    
     <section class="testimonial section-padding" id='last'>
          <div class="container">
               <div class="row">

                    <div class="col-lg-6 col-md-5 col-12">
                    <h2 class="mb-4 unifont" data-aos="fade-up">Let's sing a <strong>lovely</strong> song !</h2>
                        <div class="contact-image" data-aos="fade-up">

                          <img src={ require("./images/Wombat_cartoon.gif")} class="img-fluid wombatSongImg" alt="website"/>
                         
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-7 col-12 pt-3">
                         {/* <div >
          
                              <div className='text-center' >
                                   <div >
                                        <ReactPlayer
                                             url="https://www.youtube.com/watch?v=ALhA9WGqG0k"
                                        />
                                   </div>
                              </div>
                         
                         </div> */}

                         <iframe width="448" height="252" 
                         src="https://www.youtube.com/embed/ALhA9WGqG0k" 
                         frameborder="0" 
                         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

               </div>
          </div>
     </section>


    <footer class="site-footer">
      <div class="container">
        <div class="row">

          <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
            <h1 class="text-white" data-aos="fade-up" data-aos-delay="100">We are making the <strong>best </strong> for kids</h1>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <h4 class="my-4">Contact Info</h4>

            <p>
              <a href="#">
                <i class="fa fa-envelope mr-2 footer-icon"></i>
                dearanimal@gmail.com
              </a>
            </p>

          </div>

          <div class="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
               <h4 class="my-4">Copyright &copy; Black Panther</h4>
          </div>

          
        </div>
      </div>
    </footer>
    </div>
    )
    }
}

export default Main

