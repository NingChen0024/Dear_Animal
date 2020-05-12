import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactPlayer from "react-player"
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
  


// this component show tips to kids about how to protect endangered animals

class KidsTips extends Component {


    state = {
        loading:true,
        pid: null,
      }
  
  
      async componentDidMount(){
        axios.get('/api/get/allkidtips')
        //.then(res => console.log(res.data))
        .then(res => this.setState({pid: res.data, loading: false}))
        .catch(err => console.log(err))
      }


    render(){
    return (

        <div >
        {this.state.loading || !this.state.pid ? (
          <div>loading....</div>
        ) : (
            <div>
              <div>
                <Breadcrumb className='Breadcrumb-background'>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Tips</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            <div className="container mb-5 pb-5">
               <ScrollAnimation animateIn="fadeIn">
                <div >
                    <h1 className=' parentshead pt-5 pr-5 '>Tips for you! </h1>
                </div>
                </ScrollAnimation>

             {/* <div class="row mt-5 mb-3">
                <div class="col-lg-2 col-md-2 col-12">                  
                </div>

                <div class="col-lg-10 col-md-10 col-12">
                    <div >

                        <div className='text-center' >
                            <div >
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=7k8CcAU2Lt0"
                                    />
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div> */}


            {/* <Carousel>
               {
                 this.state.pid.map(tip => (
                   <Carousel.Item>
                   <img src={ require("./images/kidtipsimg.png")} class="kidtipsImg" alt="office"/>
                   <Carousel.Caption>
                     <h1 className='kidtipsfont'>{tip.content}</h1>
                   </Carousel.Caption>
                 </Carousel.Item>
                 ))
               }
             </Carousel> */}

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">

              <div class="carousel-item active">
                  <img src={ require('./images/tips/10.jpg')} />
                  <div class="carousel-caption d-none d-md-block">
                    <div className='tips-style unifont'>
                      <h1>When you touch a cute koala, remember to wash your hands!</h1>            
                    </div>      
                  </div>
                </div>

             {
              this.state.pid.map(tip => (
                <div class="carousel-item ">
                  <img src={ require('./images/tips/' + tip.kid + '.jpg')} />
                  <div class="carousel-caption d-none d-md-block">
                    <div className='tips-style unifont'>
                      <h1>{tip.content}</h1>            
                    </div>      
                  </div>
                </div>
                ))
             }
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>



           </div>
                <footer class="site-footer">
                    <div class="container">
                        <div class="row">

                        <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                            <h1 class="text-white"  data-aos-delay="100">We are making the <strong>best </strong> for kids</h1>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12"  data-aos-delay="200">
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
        </div>
 
    )
    }
  }

  export default KidsTips