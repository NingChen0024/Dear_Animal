
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

class About extends Component {

    state = {
      pid: null
    }

    componentDidMount(){
      axios.get('/api/get/allkidtips')
      // .then(res => console.log(res.data))
      .then(res => this.setState({pid: res.data}))
      .catch(err => console.log(err))
  
      // var cars = [{name:'qwe',qty:1223},{name:'erer',qty: 2323},{name:'frfr', qty:454},{name:'eeww', qty:454}]
      // this.setState({pid: cars})
    }


  
    render() {

      console.log(this.state)
      return (
      <div >
        <p>123</p>
        <div>
          {this.state.pid
          ? <div> 
              <div>{this.state.pid[0].title}</div>
            </div>
          : <p>err</p>
          }

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

