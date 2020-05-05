import React, { Component } from 'react'
import PuzzleComp from './PuzzleComp'
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
// import "./scss/main.scss";
// import Cardgame from "./gamejs/Game/Cardgame";
// this component display several games to kids


class Game extends Component{
    render(){

        const{data} = this.props.location
        return(
            <dev >
                <div>
        
                    <div class="row pt-5 pb-5">
                
                        <div class="col-lg-5 col-md-5 col-12">
                            <div >
                                <h1 className=' kidtipshead pt-5  '>Let's play games</h1>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-12">
                            <div >
                                <div className='text-center' >
                                    <div > 
                                        <PuzzleComp id={data.aid}/>     
                                    </div>
                                </div>                    
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-2 col-12">
                            <div >
                                <div className='text-center puzzle-game-pic' >
                                    <img src={require('./images/animal_list/' + data.aniname + '_icon.jpeg')} class="img-fluid" />
                                </div> 

                                 <Link to='/animalList'>     
                                    <a class="btn btn-warning mt-3 unifont text-center"  data-aos-delay="100">Let's go back</a>
                                </Link>                   
                            </div>
                        </div>

                    </div>

                </div>
                {/* <div>
                    <Cardgame/>
                </div> */}

                <footer class="site-footer">
                    <div class="container">
                        <div class="row">

                        <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                            <h1 class="text-white" data-aos-delay="100">We are making the <strong>best </strong> for kids</h1>
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
            </dev>
    )}
}

export default Game