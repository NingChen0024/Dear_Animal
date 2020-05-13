import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom'
import ReactPlayer from "react-player"
import Breadcrumb from 'react-bootstrap/Breadcrumb'


// this components contain server link to its sub pages which contain 
// more specified imforemation, and it provides a video plugin


class Parent extends Component {


    componentDidMount() {  
      this.initViz()  
    }  

    initViz() {
     
      const url = "https://public.tableau.com/views/FirstexplanationPART2/Dashboard3?:display_count=y&publish=yes&:origin=viz_share_link",
      vizContainer = this.vizContainer;  
      var options = {
          hideTabs: true,
          width:'100%',
          height:'900px',
          autoflow:'auto',
          onFirstInteractive: function () { 
            
          }
      };

      var viz = new window.tableau.Viz(vizContainer, url, options);
    }

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
          <Link to='/threat'>
            <p className="fact-bottom-right">Visualize to know more</p>
          </Link>
        </div>

        <div className='row'>
          <p></p>
        </div>

        <div className='row'>
          <div className='detail-container col-lg-4 col-md-4 col-12'>
            <img src={require('./images/parents/tips.jpg')} class="img-fluid" />
            <h1 className="top-center-tips text-white unifont">Tips</h1>
            <Link to='/parentTips'>
              <p className="fact-bottom-right-tips">To know more</p>
            </Link>
          </div>

          <div className='detail-container col-lg-4 col-md-4 col-12'>
            <img src={require('./images/parents/conservation.jpg')} class="img-fluid" />
            <h1 className="top-center-conservation text-white unifont">conservation</h1>
            <Link to='/parentCons'>
              <p className="fact-bottom-right-conservation">To know more</p>
            </Link>
          </div>

          <div className='detail-container col-lg-4 col-md-4 col-12'>
            <img src={require('./images/parents/measures.jpg')} class="img-fluid" />
            <h1 className="top-center-measures text-white unifont">measures</h1>
            <Link to='/parentRescure'>
              <p className="fact-bottom-right-measures">To know more</p>
            </Link>
          </div>

          <div className='row'>
            <p></p>
          </div>
          
        </div>

        <div className='container'>
          <div ref={(div) => { this.vizContainer = div }}> 
          </div>   
        </div>  



         <div className='row'>

            <div className='detail-container col-lg-1 col-md-1 col-12'>
              <p></p>
            </div>

            <div className='detail-container col-lg-5 col-md-5 col-12'>
              <img src={require('./images/parents/map.jpg')} class="img-fluid" />
              <h1 className="top-center-map text-white unifont">Map</h1>
              <Link to='/map'>
                <p className="fact-bottom-right-map">To know more</p>
              </Link>
            </div>

            <div className='detail-container col-lg-5 col-md-5 col-12'>
              <img src={require('./images/parents/prediction.jpg')} class="img-fluid" />
              <h1 className="top-center-prediction  unifont">Prediction</h1>
             
              <Link to='/prediction'>
                <p className="fact-bottom-right-prediction">To know more</p>
              </Link>
            </div>

            <div className='row'>
              <p></p>
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
                    <h1 class="text-white"ß data-aos-delay="100">We are making the <strong>best </strong> for kids</h1>
                </div>

                <div class="col-lg-3 col-md-6 col-12" data-aos-delay="200">
                    <h4 class="my-4">Contact Info</h4>

                    <p>
                    <a href="#">
                        <i class="fa fa-envelope mr-2 footer-icon"></i>
                        dearanimal@gmail.com
                    </a>
                    </p>

                </div>

                <div class="col-lg-4 col-md-6 col-12" data-aos-delay="300">
                    <h4 class="my-4">Copyright &copy; Black Panther</h4>
                </div>

                
                </div>
            </div>
        </footer>
      </div>
    )}
  }

  export default Parent