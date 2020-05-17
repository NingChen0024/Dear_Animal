import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom'
import ReactPlayer from "react-player"
import Breadcrumb from 'react-bootstrap/Breadcrumb'


// this components contain server link to its sub pages which contain 
// more specified imforemation, and it provides a video plugin


class Parent extends Component {


   
  render(){
    return (
      <div >
       

        <div className='detail-container'>

          <nav aria-label="breadcrumb" className='top-left'>
            <ol class="breadcrumb secondary-color">
              <li class="breadcrumb-item"><a class="white-text white-font" href="/">Home</a></li>
              <li class="breadcrumb-item active "><a class="white-text white-font" >For Parents</a></li>
            </ol>
          </nav>
          <img src={require('./images/parents/cover.jpg')} class="img-fluid" />
          <h1 className="top-center text-white unifont">ANIMALS, HABITAT &amp; THREATS</h1>
          <Link to='/threatCover'>
            <a class="custom-btn btn-bg btn mt-5 unifont fact-bottom-right-parent" data-aos-delay="100">Visualize to know more</a>
          </Link>
        </div>

        <div className='row'>
          <p></p>
        </div>


        <div className='mb-5'>
          <div className='row mb-3'>

            <div className='detail-container col-lg-4 col-md-4 col-12'>
              <Link to='/threat'>
                <img src={require('./images/parents/habitat.jpg')} class="img-fluid" />
              </Link>
              <h1 className="top-center-tips text-white unifont">Threat</h1>
            </div>

            <div className='detail-container col-lg-4 col-md-4 col-12'>
              <Link to='/map'>
                <img src={require('./images/parents/map.jpg')} class="img-fluid" />
              </Link>
              <h1 className="top-center-tips text-white unifont">Map</h1>
            </div>

            <div className='detail-container col-lg-4 col-md-4 col-12'>
              <Link to='/prediction'>
              <img src={require('./images/parents/prediction.jpg')} class="img-fluid" />
              </Link>
              <h1 className="top-center-conservation text-white unifont">Forecasting</h1>         
            </div>

          </div>


          <div className='row mb-3'>
      
            <div className='detail-container col-lg-4 col-md-4 col-12'>
              <Link to='/parentTips'>
                <img src={require('./images/parents/tips.jpg')} class="img-fluid" />
              </Link>
              <h1 className="top-center-tips text-white unifont">Tips</h1>

            </div>
        

            <div className='detail-container col-lg-4 col-md-4 col-12'>
              <Link to='/parentCons'>
                <img src={require('./images/parents/conservation.jpg')} class="img-fluid" />
              </Link>
              <h1 className="top-center-conservation text-white unifont">Conservation</h1>
          
            </div>

            <div className='detail-container col-lg-4 col-md-4 col-12'>
              <Link to='/parentRescure'>
                <img src={require('./images/parents/measures.jpg')} class="img-fluid" />
              </Link>
              <h1 className="top-center-conservation text-white unifont">Measures</h1>
            
            </div>

            <div className='row'>
              <p></p>
            </div>
            
          </div>
        </div>


        {/* <div className='container mb-5 pb-5'>
        
        <div class="row">
    
          <div class="col-lg-12 col-12 py-5 mt-5 mb-3 text-center">
            <ScrollAnimation animateIn="fadeIn">
              <h1 class="mb-4 parentshead3" >All you need to know as a parent</h1>
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
                <h4 class="blog-category text-danger">Rescue</h4>

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
          

               
          <div >
            <div class='row'>
              <div class="col-lg-6 mr-auto mt-5 pt-5 col-md-6 col-12 careKoala"> 
                <h2 class="careKoala ml-5">Caring For A Koala</h2>
                <img src={ require("./images/care.png")} class="img-fluid careImg" alt="blog"/>
              </div>
             
              <div class="col-lg-6 ml-auto mt-5 pt-5 col-md-6 col-12">
                <div className='text-center' >
                    <iframe width="448" height="252" 
                    src="https://www.youtube.com/embed/0tKPzSRzs1c" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>

            <div class="col-lg-5 ml-auto mt-5 pt-5 col-md-6 col-12">
              <img src={ require("./images/newsletter.png")} data-aos-delay="100" class="img-fluid" alt="newsletter"/>
            </div>

            <div class="col-lg-5 mr-auto mt-5 pt-5 col-md-6 col-12">

              <h2  className="mt-5 pt-5" data-aos-delay="300">We value your opinions.</h2>
              <h4  data-aos-delay="300">Please let us know your ideas about our service .</h4>
                <div class="form-group mt-4"  data-aos-delay="400">


                </div>
            </div>
          
          </div>
     


        </div> */}

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
    )}
  }

  export default Parent