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
                                <h1 className=' kidtipshead pt-5  '>Let's play a game</h1>
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
                                    <a class="btn btn-warning btn-lg mt-3 unifont text-center"  data-aos-delay="100">Let's go back</a>
                                </Link>                   
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="site-footer">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                                <h2 class="text-white" data-aos-delay="100">We are making the <strong>best </strong> for kids</h2>
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