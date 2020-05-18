import React, { Component } from 'react'
import PuzzleComp from './PuzzleComp'
import {Link} from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class Game extends Component{


    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      openModal() {
        this.setState({ open: true });
      }
      closeModal() {
        this.setState({ open: false });
      }


    render(){

        const{data} = this.props.location
        return(
            <dev >
                <div>
                    <Breadcrumb className='Breadcrumb-background'>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to='/animalList'>Animal Friends</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Game</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <div class="row pt-5 pb-5">
                
                        <div class="col-lg-5 col-md-5 col-12">
                            <div >
                                <h1 className=' kidtipshead pt-5  '>Let's solve a puzzle</h1>
                            </div>
                            <div className='container'>
                                <div>
                                    <p className='game-desc'>{data.gamedesc}</p>
                                </div>


                                <div className='row'>
                                    <div className='col-lg-4 col-md-4'></div>
                                    <div className='col-lg-4 col-md-4'>
                                        <Link to='/animalList'>     
                                            <a class="btn btn-warning btn-lg mt-3 unifont game-desc-btn"  data-aos-delay="100">Let's go back</a>
                                        </Link> 
                                    </div>
                                    <div className='col-lg-4 col-md-4'></div>

                                </div>


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
                            <div className='mt-5 pt-1'>
                                <div>
                                    <h2 className='unifont'>{data.aniname}</h2>
                                </div>
                                <div className='text-center puzzle-game-pic' >
                                    <img src={require('./images/animal_list/' + data.aniname + '_game.jpeg')} class="img-fluid" />
                                </div> 

                                 <Link to='/kidsTips'>     
                                    <a class="btn btn-warning btn-lg mt-3 unifont text-center"  data-aos-delay="100">Let's get tips</a>
                                </Link>                   
                            </div>
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
            </dev>
    )}
}

export default Game