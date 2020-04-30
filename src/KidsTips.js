import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactPlayer from "react-player"
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import {
    UserCard,
    ProductCard,
    TaggedContentCard,
    FlippingCard,
    FlippingCardFront,
    FlippingCardBack,
    RecipeCard,
    NewsHeaderCard,
    CryptoCard,
    PaymentCard,
    DropdownCard
  } from 'react-ui-cards'
  
function refreshPage() {
    window.location.reload(false);
  }
// this component show tips to kids about how to protect endangered animals

class KidsTips extends Component() {


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
           <div className="container">
               <ScrollAnimation animateIn="fadeIn">
                <div >
                    <h1 className=' parentshead pt-5 pr-5 '>Tips for you! </h1>
                </div>
                </ScrollAnimation>


             <Carousel>
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
             </Carousel>


             <div class="row mt-5">
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
 
    );
    }
  }

  export default KidsTips