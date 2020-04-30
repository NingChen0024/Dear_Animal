
import React ,{ Component }from 'react';
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
import Carousel from 'react-bootstrap/Carousel'
import { ConsoleWriter } from 'istanbul-lib-report';

class About extends Component {

    state = {
      pid: null,
    }

    componentDidMount(){
      axios.get('/api/get/allanimals')
      //.then(res => console.log(res.data))
      .then(res => this.setState({pid: res.data}))
      .catch(err => console.log(err))
    }

    componentDidMount(){
      axios.get('/api/get/allkidtips')
      .then(res => { console.log(res.data);
        this.setState({pid: res.data})})
      .catch(err => console.log(err))
  
    }

    render() {

      console.log(this.state)
      console.log(this.state.pid)
      return (
      <div >
        {/* <p>123</p>
        <div>
          {this.state.pid
          ? <div> 
              <div>{this.state.pid[0].title}</div>
            </div>
          : <p>err</p>
          }

    
        </div> */}
          

        <div className="container">
          <Carousel>
            {
              this.state.pid.map(pers => (
                <Carousel.Item>
                <img src={ require("./images/newsletter.png")} class="kidtipsImg" alt="office"/>
                <Carousel.Caption>
                  <h1>{pers.name}</h1>
                 
                </Carousel.Caption>
              </Carousel.Item>
              ))
            }
          </Carousel>
        </div>

          {/* <FlippingCard>
              <FlippingCardBack>
              Content that will be displayed on the back of the card
            </FlippingCardBack>
            <FlippingCardFront>
              Content that will be displayed on the front of the card
            </FlippingCardFront>
        </FlippingCard>

        <TaggedContentCard
          href='https://github.com/nukeop'
          thumbnail='https://i.imgur.com/H0f0R6p.jpg'
          title='Burger'
          description='the cornerstone of every nutritious breakfast'
          tags={[
            'food',
            'sandwich',
            'meat'
          ]}
        /> */}


      </div>
      )
      
    };
  }

export default About

