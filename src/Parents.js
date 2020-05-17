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
    )}
  }

  export default Parent