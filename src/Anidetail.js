import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';
// this component displays animal details to kids

var audio = null

class Anidetail extends Component{

    state = {
        sound: false
    }

    componentWillMount (){

        var {data} = this.props.location
        try{
            audio = require('./sounds/' + data.aniname + '.mp3')
            this.setState({sound:true})
        }catch(e){
            this.setState({sound:false})
           
        }
    }

    render(){

        const{data} = this.props.location
  
        return(
            <div>

            {this.state.sound ? (
                
            <dev className='anidetailbackground'>

                <div className='detail-container'>
                    <img src={require('./images/animal_list/' + data.aniname + '_cover.jpeg')} class="img-fluid" />
                    <h1 className="bottom-right text-white unifont">{data.aniname}</h1>
                    <p className="fact-bottom-right unifont">{data.facts}</p>
                </div>
                
                <div className="container row1-style mt-5 mb-3 ">
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-12 ">
                            <p className='row1-font'>Type:&nbsp;{data.class}</p>
                        </div>
                            
                        <div className="col-lg-4 col-md-4 col-12">
                            <p className='row1-font'>Total Count:&nbsp;{data.anicount}</p>
                        </div>

                        <div className="col-lg-4 col-md-4 col-12 ">
                            <p className='row1-font'>Status:&nbsp;{data.anistatus}</p>
                        </div>
                    </div>
                </div>


                <div className='m-5'>
                    <img src={require('./images/animal_list/' + data.aniname + '_cards.jpeg')} className="img-fluid card-image" />
                </div>


                <div className='container mb-5'>
                    <div className='row'>

                        <div className="col-lg-6 col-md-6 col-12 ">
                            <img src={require('./images/animal_list/' + data.aniname + '_detail.jpeg')} class="img-fluid" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 ">
                            <p className='row3-font mb-3'>Description</p>
                            <p className='row2-font'>{data.anidescription}</p>
                            <p className='row3-font mt-5'>{data.sound}</p>
                            <div className='sound'>
                                <ReactAudioPlayer
                                src= {audio}
                                controls
                            />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mb-5 pb-5'>
                    <div className='row'>
                        <div className="col-lg-3 col-md-3 col-12 back-button">

                            <Link to='/animalList'>     
                                <a class="btn btn-warning btn-lg mt-3 unifont"  data-aos-delay="100">Let's go back</a>
                            </Link>

                        </div>
                        <div className="col-lg-3 col-md-3 col-12 "></div>
                        <div className="col-lg-3 col-md-3 col-12 "></div>
                        <div className="col-lg-3 col-md-3 col-12 forword-button">

                            <Link to={{
                                        pathname: "/games",
                                        data: data
                                    }}>    
                                <a class="btn btn-warning btn-lg mt-3 unifont"  data-aos-delay="100">Let's play a game</a>
                            </Link>

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

            ) : (

            <dev className='anidetailbackground'>
                <div className='detail-container'>
                <img src={require('./images/animal_list/' + data.aniname + '_cover.jpeg')} class="img-fluid" />
                    <h1 className="bottom-right text-white unifont">{data.aniname}</h1>
                    <p className="fact-bottom-right">{data.facts}</p>
                </div>
                
                <div className="container row1-style mt-5 mb-3 ">
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-12 ">
                            <p className='row1-font'>Type:&nbsp;{data.class}</p>
                        </div>
                            
                        <div className="col-lg-4 col-md-4 col-12">
                            <p className='row1-font'>Total Count:&nbsp;{data.anicount}</p>
                        </div>

                        <div className="col-lg-4 col-md-4 col-12 ">
                            <p className='row1-font'>Status:&nbsp;{data.anistatus}</p>
                        </div>
                    </div>
                </div>


                <div className='m-5'>
                    <img src={require('./images/animal_list/' + data.aniname + '_cards.jpeg')} className="img-fluid card-image" />
                </div>


                <div className='container mb-5'>
                    <div className='row'>
                        <div className="col-lg-6 col-md-6 col-12 ">
                        <img src={require('./images/animal_list/' + data.aniname + '_detail.jpeg')} class="img-fluid" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 ">
                            <p className='row3-font mb-3'>Description</p>
                            <p className='row2-font'>{data.anidescription}</p>

                        </div>
                    </div>
                </div>

                <div className='container mb-5 pb-5'>
                    <div className='row'>
                        <div className="col-lg-3 col-md-3 col-12 back-button">

                            <Link to='/animalList'>     
                                <a class="btn btn-warning btn-lg mt-3 unifont"  data-aos-delay="100">Let's go back</a>
                            </Link>

                        </div>
                        <div className="col-lg-3 col-md-3 col-12 "></div>
                        <div className="col-lg-3 col-md-3 col-12 "></div>
                        <div className="col-lg-3 col-md-3 col-12 forword-button">

                            <Link to={{
                                        pathname: "/games",
                                        data: data
                                    }}>    
                                <a class="btn btn-warning btn-lg mt-3 unifont"  data-aos-delay="100">Let's play a game</a>
                            </Link>

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
        </div>
      )}
    }
        




    export default Anidetail