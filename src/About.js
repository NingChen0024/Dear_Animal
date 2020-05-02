
import React ,{ Component }from 'react';
import axios from 'axios'

import Carousel from 'react-bootstrap/Carousel'


class About extends Component {

    state = {
      loading:true,
      pid: null,
    }


    async componentDidMount(){
      axios.get('/api/get/allkidtips')
      //.then(res => console.log(res.data))
      .then(res => this.setState({pid: res.data, loading: false}))
      .catch(err => console.log(err))
    }


    render() {

      console.log(this.state)
      console.log(this.state.pid)
      return (
      <div >
       {this.state.loading || !this.state.pid ? (
         <div>loading....</div>
       ) : (
          <div className="container">
            <Carousel>
              {
                this.state.pid.map(tip => (
                  <Carousel.Item>
                  <img src={ require("./images/kidtipsimg.png")} class="kidtipsImg" alt="office"/>
                  <Carousel.Caption>
                    <h1 className='kidtipsfont'>{tip.content}</h1>
                  
                  </Carousel.Caption>
                </Carousel.Item>
                ))
              }
            </Carousel>
          </div>
       )} 
        {/* <p>123</p>
        <div>
          {this.state.pid
          ? <div> 
              <div>{this.state.pid[0].title}</div>
            </div>
          : <p>err</p>
          }

    
        </div> */}
          

        {/* <div className="container">
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
        </div> */}

          {/* <FlippingCard>
              <FlippingCardBack>
              Content that will be displayed on the back of the card
            </FlippingCardBack>
            <FlippingCardFront>
              Content that will be displayed on the front of the card
            </FlippingCardFront>
        </FlippingCard> */}

        {/* <TaggedContentCard
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

