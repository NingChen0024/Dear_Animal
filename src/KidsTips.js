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
            <div >
               <ScrollAnimation animateIn="fadeIn">
                <div >
                    <h1 className=' tipshead pr-5 mb-3 '>Tips for you! </h1>
                </div>
               </ScrollAnimation>

    
            <div className='container'>
              <div className='col-lg-4 col-md-4 col-12'>
                <p></p>
              </div>
              <div className='col-lg-4 col-md-4 col-12'>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">

                  <div class="carousel-item active">
                      <img src={ require('./images/tips/3.jpg')} className="d-block w-100"/>
                      <div class="carousel-caption d-none d-md-block">
                        <div className='tips-style unifont'>
                          <h1 className='tips-font'>Don't think that cute koalas and wombats love snacks as much as you do. If they eat something that is not with them, they will get sick!</h1>            
                        </div>      
                      </div>
                    </div>

                {
                  this.state.pid.map(tip => (
                    <div class="carousel-item ">
                      <img src={ require('./images/tips/' + tip.kid + '.jpg')} className="d-block w-100"/>
                      <div class="carousel-caption d-none d-md-block">
                        <div className='tips-style unifont'>
                          <h1 className='tips-font'>{tip.content}</h1>            
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
            <div className='col-lg-4 col-md-4 col-12'>
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
                        <h4 class="my-3">Copyright &copy; 2020 Black Panther</h4>
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