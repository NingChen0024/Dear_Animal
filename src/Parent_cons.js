import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'

// this component provide clear instruction of conservation for parents

function ParentCons() {
    return (
      <div >


        <div>
          <Breadcrumb className='Breadcrumb-background'>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            
            <Breadcrumb.Item>
              <Link to='/parent'>For Parents</Link>
            </Breadcrumb.Item>
           
            <Breadcrumb.Item active>Conservation</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className='container'>
          <ScrollAnimation animateIn="fadeIn">
            <div className='mb-5, pb-5'>

                <h1 className=' parentshead2 pt-5 mt-5 mb-5 unifont'>Conservation methods for animals</h1>

                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <img src={ require("./images/koala_pho.jpg")} class="img-fluid parent-image" alt="interview process"/>

                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4"  >
                        <h2 className='unifont'>What are the safety measures to save injured Koala?</h2>

                        <p class="mt-3 mb-4 unifont">following management actions are undertaken to conserve the koala and their habitat</p>

                        <ul class="list-detail unifont">
                            <li><span>Restrain your dog and keep it away from the koala.</span></li>
                            <li><span>approach the koala from behind and place a washing basket over the koala.</span></li>
                            <li><span>Put something heavy on top of the basket to stop the koala moving away and climbing a tree.</span></li>
                            <li><span>Ensure the koala is left in a quiet and stresss free environment.</span></li>
                        </ul> 
                    </div>
                </div>


                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <img src={ require("./images/wallaby_pho.jpg")} class="img-fluid parent-image" alt="interview process"/>

                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4"  >
                        <h2 className='unifont'>What are the safety measures to save injured Wallaby?</h2>

                        <p class="mt-3 mb-4 unifont">How to protect wallaby?</p>

                        <ul class="list-detail unifont">
                            <li><span>Protecting Proserpine rock-wallaby habitat through voluntary conservation agreements and council open space habitat.</span></li>
                            <li><span>Controlling feral and domestic animals conducting weed control in Proserpine rock-wallaby habitat.</span></li>
                            <li><span>Implementing grazing and fire management appropriate for the Proserpine rock-wallaby.</span></li>
                            <li><span>Installing fences (eg. solid as opposed to mesh) that allow wallabies to escape from predators.</span></li>
                        </ul> 
                    </div>
                </div>


                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <img src={ require("./images/wombat_pho.jpg")} class="img-fluid parent-image" alt="interview process"/>

                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4 "  >
                        <h2 className='unifont'>What are the basic protective measures for wombat?</h2>

                        <p class="mt-3 mb-4 unifont">ollowing management actions are undertaken to conserve the wombats and their habitat</p>

                        <ul class="list-detail unifont">
                            <li><span>Research and monitoring of the wombats</span></li>
                            <li><span>Fire management.</span></li>
                            <li><span>Pmaintenance of the predator-proof fence.</span></li>
                            <li><span>Control of predators and competitors.</span></li>
                            <li><span>weed control..</span></li>
                        </ul> 
                    </div>
                </div>
            </div>
          </ScrollAnimation>
        
      </div>
      <footer class="site-footer">
          <div class="container">
          <div class="row">
               <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                    <h2 class="text-white" data-aos-delay="100"> Educate &amp; &nbsp;<strong>Encourage</strong> </h2>
               </div>

               <div class="col-lg-4 col-md-6 col-12" data-aos-delay="300">
                    <h4 class="my-3">Copyright &copy; 2020 Black Panther</h4>
               </div>          
          </div>
          </div>
     </footer>
      </div>
    );
  }

  export default ParentCons