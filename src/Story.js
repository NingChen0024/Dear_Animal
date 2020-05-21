import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
import ReactLoading from 'react-loading'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'

var data = [['Blue-billed Duck', 
            'Regent Honeyeater', 
            'Plains-wanderer', 
            'Macquarie Perch', 
            'Squirrel Glider', 
            'Blue Whale', 
            'Southern Brown Bandic', 
            'Leatherback Turtle', 
            'Australasian Bittern', 
            'Red-tailed Black-Cockatoo', 
            'Wombat', 'Wallaby', 'Koala'],
            ['Family','Friends','Beautiful','Cry', 'Race', 'Slow', 'Action', 'Escape', 'Lazy', 'Fast', 'Fun', 'Humour', 'Special'],
            ['Sunlight', 'Book', 'Bottle', 'Wind', 'Plastics', 'Hunting', 'Lantern', 'Food', 'Rain', 'Sand', 'Water', 'Sea', 'Tree']] 



class Story extends Component{

    constructor(props){
        super(props)
        this.changeRating = this.changeRating.bind(this);
        this.state = {
            card_one:'Blue-billed Duck',
            card_two:'Family',
            card_three:'Sunlight',
            myInterval : null,
            time: 60,
            coin: 'head',
            rating: 0,
            showRating: false,
            showCards: 'hide'

        }
    }

    changeRating(newRating) {
        this.setState({rating: newRating})
    }


    changeCardsState = () => {

        
        this.setState({showCards:'pause'})
        console.log(this.state.coin)
        setTimeout(this.onRefreshClicked, 2000)
    }

    onRefreshClicked =() => {

        
        var card_one_number = Math.floor(Math.random() * 13)
        var card_two_number = Math.floor(Math.random() * 13)
        var card_three_number = Math.floor(Math.random() * 13)

        var data_one_value = data[0]
        var data_two_value = data[1]
        var data_three_value = data[2]

        console.log(card_one_number)

        this.setState({
            card_one: data_one_value[card_one_number],
            card_two: data_two_value[card_two_number],
            card_three: data_three_value[card_three_number]
        })

        this.setState({showCards:'show'})

    
    }

    countDown = () => {
        if (this.state.time > 0){
            this.setState({
                time : this.state.time-1,
        })}else{
            clearInterval(this.state.myInterval)
            this.setState({showRating:true})
        }
    }

    startTimer = () => {
        clearInterval(this.state.myInterval)
        this.setState({myInterval : setInterval(this.countDown,1000)})
        this.setState({showRating:false})
        this.setState({rating:0})
    }

    pauseTimer = () => {
        clearInterval(this.state.myInterval)
    }

    stopTimer = () => {

        if (this.state.time !== 60){
            clearInterval(this.state.myInterval)
            this.setState({time: 60, showRating:true})
        }else{
        clearInterval(this.state.myInterval)
        this.setState({time: 60, showRating:false})
        }
    }
    
    changeCoinState = () => {
        var min = Math.ceil(0)
        var max = Math.floor(1)
        var res = Math.floor(Math.random() * (max - min + 1)) + min
        if (res){
                    
            this.setState({coin:'tail'})
        }
        else {

            this.setState({coin:'head'})
        }
    }

    toss = () => {
            this.setState({coin:'pause'})
            console.log(this.state.coin)
            setTimeout(this.changeCoinState, 2000)
    
         
      }

    render(){

        return(

            <div>
                <div className='container'>
                <div className='row'>
                   
                    
                
                 <div className="col-lg-9 col-md-9 col-12">
                    <Breadcrumb >
                    <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Storytelling</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="col-lg-2 col-md-2 col-12 mt-2">
                    <Link to='/gameDes'>     
                        <a class="btn btn-danger unifont text-white story-desc-font" >How to play the game?</a>
                    </Link>
                </div>
                </div>
                {/* <h1 className='parentshead pt-5 pr-5'>let's tell a story</h1> */}

                </div>
                <div className='container'>
                {/* <div className='row'>
                    <div className="col-lg-9 col-md-9 col-12"></div>
                    <Link to='/story'>     
                        <a class="btn btn-warning unifont" >How to play the game?</a>
                    </Link>
                </div> */}
                    <div className='row'>
                    <div className="col-lg-4 col-md-4 col-12 mb-4">
                            <div className='button-refresh'>
                                            
                                <div>
                                    {
                                        {
                                        'head': <div>
                                                <img src={ require("./images/son.png")} className="img-fluid coin-img2" />
                                                <p className='coin-tossing-font'>Kid's turn</p>
                                            </div>,
                                        'tail': <div>
                                                <img src={ require("./images/father.png")} className="img-fluid coin-img" />
                                                <p className='coin-tossing-font'>Parent's turn</p>
                                            </div>,
                                        'pause':<div className='row mb-5 mt-5'>
                                                <div class="col-lg-5 col-md-5 col-5">
                                                </div>
                                                <div class="col-lg-5 col-md-5 col-5 mb-5 pb-5 mt-5 pt-2">
                                                <ReactLoading type={"spinningBubbles"} color={'orange'} height={'40%'} width={'40%'} className='button-refresh'/>
                                                </div>
                                            </div>
                                        }[this.state.coin]
                                    }

                                      
                                </div>
                                <button onClick={this.toss} className='btn btn-info unifont'>toss a coin</button>
                                
                            </div>
                        </div>

                        
                        <div className="col-lg-4 col-md-4 col-12 mb-4 mt-5 pt-5">
                            <div className='mt-3 '>
                                <p></p>
                            </div>
                            <div>
                                {this.state.showRating ? (
                                <div className='button-refresh '>
                                    <h1 className='unifont story-title'>Do you like the story?</h1>
                                    <StarRatings
                                        rating={this.state.rating}
                                        starRatedColor="red"
                                        starHoverColor='orange'
                                        starDimension='40px'
                                        changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />

                                    <div>
                                    {
                                        {
                                        1: <div>
                                               
                                                <p className='coin-tossing-font'>The story needs improvement!</p>
                                            </div>,
                                        2: <div>
                                                
                                                <p className='coin-tossing-font'>The story is ok!</p>
                                            </div>,
                                        3: <div>
                                                
                                                <p className='coin-tossing-font'>What a good story</p>
                                            </div>,
                                        4: <div>
                                                
                                            <p className='coin-tossing-font'>I kinda like it!</p>
                                        </div>,
                                        5: <div>
                                                
                                            <p className='coin-tossing-font'>I really love the story!</p>
                                        </div>,
                                        }[this.state.rating]
                                    }
                                    </div>

                                </div>
                                ):(
                                <div>
                                    <div className='mt-5'>

                                    </div>
                                    <h1 className='unifont story-title mt-1'>Hey there time to make a story together! </h1>
                                </div>)}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-12 mb-4 mt-5 pt-5">
                            <div className='button-refresh'>
                                <p className='timer-number m-5'>{this.state.time}</p>
                                <button onClick={this.startTimer} className='btn btn-success mr-3 unifont'>Start</button>
                                <button onClick={this.pauseTimer} className='btn btn-danger mr-3 unifont'>Pause</button>
                                <button onClick={this.stopTimer} className='btn btn-primary mr-3 unifont'>Stop</button>
                                
                            </div>                       
                        </div>
                  
                    </div>
                </div>
                {
                    {
                'show': <div className='container'>
                    <div className='row'>
                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <p className='card-name mt-5 mb-5'>{this.state.card_one}</p> 
                            </div>
                        </div>

                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <p className='card-name mt-5 mb-5'>{this.state.card_two}</p> 
                            </div>
                        </div>

                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <p className='card-name mt-5 mb-5'>{this.state.card_three}</p> 
                            </div>
                        </div>
                    </div>
                </div>,
                
                'hide': <div className='container'>
                    <div className='row'>
                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img '/>
                                <p className='card-name mt-5 mb-5'>
                                    
                                </p>
                            </div>
                        </div>

                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <p className='card-name mt-5 mb-5'></p>
                            </div>
                        </div>

                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <p className='card-name mt-5 mb-5'></p>
                            </div>
                        </div>
                    </div>
                </div>,

                'pause':<div className='container'>
                    <div className='row'>
                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img '/>
                                <div class="ml-5">
                                    <ReactLoading type={"bubbles"} color={'orange'} height={'70%'} width={'70%'} className='button-refresh'/>
                                </div>
                            </div>
                        </div>

                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <div class="ml-5">
                                    <ReactLoading type={"bubbles"} color={'orange'} height={'70%'} width={'70%'} className='button-refresh'/>
                                </div>
                            </div>
                        </div>

                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <div class="ml-5">
                                    <ReactLoading type={"bubbles"} color={'orange'} height={'70%'} width={'70%'} className='button-refresh'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    }[this.state.showCards]
                }

                <div className='button-refresh mb-5 pb-5'>
                    <a className='btn btn-warning btn-lg mt-3 unifont text-white story-desc-font' onClick = {() => this.changeCardsState()}>Know your cards!</a>
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

            
        )
    }
}

export default Story