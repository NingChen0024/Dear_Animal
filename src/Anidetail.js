import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// this component display several games to kids


class Anidetail extends Component{
    render(){

        const{data} = this.props.location

        return(
            <dev className='anidetailbackground'>
                <div className='detail-container'>
                <img src={require('./images/animal_list/' + data.aniname + '_cover.jpeg')} class="img-fluid" />
                    <h1 className="bottom-right text-white unifont">{data.aniname}</h1>
                    <p className="fact-bottom-right">{data.facts}</p>
                </div>
                
                <div className="container row1-style mt-5 mb-3 ">
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-12 ">
                            <p className='row1-font'>Type:{data.class}</p>
                        </div>
                            
                        <div className="col-lg-4 col-md-4 col-12">
                            <p className='row1-font'>Total Count:{data.anicount}</p>
                        </div>

                        <div className="col-lg-4 col-md-4 col-12 ">
                            <p className='row1-font'>Status:{data.anistatus}</p>
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

                    <div class="col-lg-4 col-md-6 col-12"  data-aos-delay="300">
                        <h4 class="my-4">Copyright &copy; Black Panther</h4>
                    </div>

                    
                    </div>
                </div>
                </footer>
            </dev>

      )}
    }
        




    export default Anidetail