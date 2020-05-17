import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'
// this component contains info about wild explore activties

class GameDes extends Component {

    
    render(){
    return (
      <div >
        <div>
            <Breadcrumb className='Breadcrumb-background'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/story'>Storytelling</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Description</Breadcrumb.Item>
            </Breadcrumb>
        </div>

        <div className="container">
            <ScrollAnimation animateIn="fadeIn">
                <div className="row ">
                    <div className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center fade-up" >
                        <h1 className='unifont'>INSTRUCTIONS FOR EFFECTIVE STORYTELLING</h1>
                    </div>
                </div>
            </ScrollAnimation> 
        </div>
 
        <div className='container mb-2 '>
            <img src={ require("./images/storyDes.jpg")} className="img-fluid story-desc-img" alt="interview process"/>
            <h2 className ='font-weight-bold unifont story-des mt-5'>
                STEP 1
            </h2>
            <h3 className ='font-weight-bold  unifont story-des'>Click on <strong>“TOSS A COIN” </strong>button</h3> 
            <h3 className ='font-weight-bold  unifont story-des'>based on the output image &amp; text know who has to start the story</h3> 
            <h3></h3>
            <h2 className ='font-weight-bold unifont story-des mt-5'>
                STEP 2
            </h2>
            <h3 className ='font-weight-bold  unifont story-des'>Click on <strong>“KNOW YOUR CARDS”</strong>button</h3> 
            <h3 className ='font-weight-bold  unifont story-des'>Memorise the words you need to use to create an effective story</h3> 
            <h3></h3>
            <h2 className ='font-weight-bold unifont story-des mt-5'>
                STEP 3
            </h2>
            <h3 className ='font-weight-bold  unifont story-des'> Click on<strong>“START”</strong> button, when you are ready to tell a story.</h3> 
            <h3 className ='font-weight-bold  unifont story-des'>You story should be within 1 Minute.</h3> 
            <h3></h3>
            <h3 className ='font-weight-bold  unifont story-des'>here is the Sample story using the words: </h3> 
            <h3 className ='font-weight-bold  unifont story-des'> <strong>LEATHERBACK SEA TURTLE, LAZY, WATER</strong> </h3> 
            <h3 className='mb-3'></h3>
            <h6 className='story-desc-font'>During the summer vacation, my family drove to the most beautiful beach to visit in Victoria. 
                On a sunny morning, when I woke up and got out of the room,  I saw a huge turtle on the beach. 
                My mum told me it was a<strong> leatherback sea turtle</strong>. That’s quite amazing! But It looked very <strong>lazy</strong>. 
                It lay on the beach for almost the whole day! In the evening, it crawled towards the sea, 
                probably trying to get into the <strong>water</strong>.</h6>
            <h2 className ='font-weight-bold unifont story-des mt-5'>
                STEP 4
            </h2>
            <h3 className ='font-weight-bold  unifont story-des'> Click <strong> “STOP”</strong> button once you are finished with narrating the story</h3> 
            <h3 className ='font-weight-bold  unifont story-des'>for any emergency click on <strong>“PAUSE” </strong>button when you need.</h3> 
            <h3></h3>
            <h2 className ='font-weight-bold unifont story-des mt-5'>
                STEP 5
            </h2>
            <h3 className ='font-weight-bold  unifont story-des'> click on <strong>“STARS” </strong>to give a feedback.</h3> 
            <h3 className ='font-weight-bold  unifont story-des'>5 stars - Loved it</h3> 
            <h3 className ='font-weight-bold  unifont story-des'>4 stars - liked it </h3> 
            <h3 className ='font-weight-bold  unifont story-des'>3 stars - good</h3> 
            <h3 className ='font-weight-bold  unifont story-des'>2 stars - ok</h3> 
            <h3 className ='font-weight-bold  unifont story-des'>1 star - needs improvement</h3> 
            <h3></h3>
            <div className='row'>
                <div className="col-lg-9 col-md-9 col-12 mt-9 "></div>
                <div className="col-lg-2 col-md-2 col-12 mt-2 ">
                        <Link to='/story'>     
                            <a class="btn btn-warning text-white story-desc-font unifont" >Create a story now!</a>
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
      </div>  
    )}
  }

  export default GameDes 