import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import axios from 'axios'
import Popup from './Popup'
import wallebyPho from './images/wallaby_icon.png'
import koalaPho from './images/koala_icon.png'
import wombatPho from './images/wombat_icon.png'


class AnimalList extends Component {
    
    state = {
        pid: null,
      }

      componentDidMount(){
        axios.get('/api/get/allanimals')
        //.then(res => console.log(res.data))
        .then(res => this.setState({pid: res.data}))
        .catch(err => console.log(err))
      }
      
     render() {

        console.log(this.state)
        console.log(this.state.pid)
    
        return (
        <div className='kids-tips-background'>
            <div className='container '>
                <ScrollAnimation animateIn="fadeIn">
                    <div >

                        <h1 className=' parentshead pt-5 '>They are your animal friends</h1>

                    </div>
                </ScrollAnimation>


            <div className='container parent-text-space mt-5 pt-5 mb-5 pb-5'>
                <p className ='font-weight-bold m-4'>
                    1. Dear kids! Sometimes you maybe see injured koalas or wombats in the wild
                    when you go out to play! They are very weak at that time and good boys will
                    not poke them with branches or hit them with stones! Otherwise, koalas and
                    wombats will hurt and will never play with kids!
                </p>  

                <div className='row mt-5 mp-5'>
                        <div class="col-lg-4 col-md-4 col-12 mb-4 mt-3 pl-5">

                            <Popup img={wallebyPho} />                          
                        </div>
                        
                        <div class="col-lg-4 col-md-4 col-12 mb-4">
                            <Popup img={koalaPho} />                       
                        </div>

                        <div class="col-lg-4 col-md-4 col-12 mb-4"  >
                            <Popup img={wombatPho} />
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
    )}
  }

  export default AnimalList