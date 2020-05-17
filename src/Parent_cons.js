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

                <h1 className=' parentshead2 mb-5 unifont'>Conservation methods for animals</h1>

                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <img src={ require("./images/koala_pho.jpg")} class="img-fluid parent-image" alt="interview process"/>

                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4"  >
                        <h2 className='unifont'>Best methods to protect Mammals</h2>

                        <ul class="list-detail unifont">
                            <li><span>Research and monitoring the presence of mammals.</span></li>
                            <li><span>Fire management.</span></li>
                            <li><span>Maintenance of the predator-proof fence.</span></li>
                            <li><span>Control of predators and competitors.</span></li>
                            <li><span>weed control.</span></li>
                        </ul> 
                    </div>
                </div>


                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <img src={ require("./images/wallaby_pho.jpg")} class="img-fluid parent-image" alt="interview process"/>

                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4"  >
                        <h2 className='unifont'>Important methods to save birds</h2>

                        <ul class="list-detail unifont">
                            <li><span>We can plant as many trees as possible to provide natural shelter for birds.</span></li>
                            <li><span>Be sure to extinguish the fire with water in the wild after using fire.</span></li>
                            <li><span>You can make simple bird nests and put some nuts in nests and put them on tress.</span></li>
                            <li><span>Do nothing, wait for them to leave quietly when birds come under the roof to avoid rain.</span></li>
                        </ul> 
                    </div>
                </div>


                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <img src={ require("./images/wombat_pho.jpg")} class="img-fluid parent-image" alt="interview process"/>

                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4 "  >
                        <h2 className='unifont'>Effective methods to conserve fish</h2>

                       

                        <ul class="list-detail unifont">
                            <li><span>Overfishing should be avoided.</span></li>
                            <li><span>Important to decrease in habitat loss and degradation.</span></li>
                            <li><span>Be aware of the continuous climate change.</span></li>
                            <li><span>Keep an eye on the increase in pollution and use effectively.</span></li>
                            <li><span>Help to Increase in the population of Freshwater and marine fishes.</span></li>
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
                      <h3 class="my-3 text-white copy-font">Copyright &copy; 2020 Black Panther</h3>
                </div>          
            </div>
            </div>
        </footer>
      </div>
    );
  }

  export default ParentCons