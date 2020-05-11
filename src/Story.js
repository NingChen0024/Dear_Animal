import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
import ReactLoading from 'react-loading'

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
            showRating: false

        }
    }

    changeRating(newRating) {
        this.setState({rating: newRating})
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
    }

    pauseTimer = () => {
        clearInterval(this.state.myInterval)
    }

    stopTimer = () => {
        clearInterval(this.state.myInterval)
        this.setState({time: 60, showRating:false})
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
                <h1 className='parentshead pt-5 pr-5'>let's tell a story</h1>

                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-6 col-md-6 col-12 mb-4 mt-5 pt-5">
                            <div className='button-refresh'>
                                <p className='timer-number m-5'>{this.state.time}</p>
                                <button onClick={this.startTimer} className='btn btn-success mr-3 unifont'>Start</button>
                                <button onClick={this.pauseTimer} className='btn btn-danger mr-3 unifont'>Pause</button>
                                <button onClick={this.stopTimer} className='btn btn-primary mr-3 unifont'>Stop</button>
                                
                            </div>
                            <div>
                                {this.state.showRating ? (
                                <div className='button-refresh mt-4'>
                                    <StarRatings
                                        rating={this.state.rating}
                                        starRatedColor="red"
                                        starHoverColor='orange'
                                        starDimension='40px'
                                        changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                </div>
                                ):(
                                <div>

                                </div>)}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 mb-4">
                            <div className='button-refresh'>
                                            
                                <div>
                                    {
                                        {
                                        'head': <div>
                                                <img src={ require("./images/son.png")} class="img-fluid" alt="working girl"/>
                                            </div>,
                                        'tail': <div>
                                                <img src={ require("./images/father.png")} class="img-fluid" alt="working girl"/>
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
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <p className='card-name'><b>{this.state.card_one}</b></p> 
                            </div>
                        </div>

                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <p className='card-name'><b>{this.state.card_two}</b></p> 
                            </div>
                        </div>

                        <div className='card m-4'>
                            <div class="container">
                                <img src={require('./images/question_mark.gif')} className='story-img'/>
                                <p className='card-name'><b>{this.state.card_three}</b></p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className='button-refresh mb-5 pb-5'>
                    <a className='btn btn-warning btn-lg mt-3 unifont' onClick = {() => this.onRefreshClicked()}>Play Again!</a>
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

            
        )
    }
}

export default Story