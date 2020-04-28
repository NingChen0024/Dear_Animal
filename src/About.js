
import React ,{ Component }from 'react';
import axios from 'axios'

class About extends Component {

    state = {
      pid: null,
    }

    componentDidMount(){
      axios.get('/api/get/allposts')
      .then(res => console.log(res.data))
      //.then(res => this.setState({pid: res.data}))
      .catch(err => console.log(err))


      axios.get('/api/get/allanimals')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

      axios.get('/api/get/allusers')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

      this.asyncFunction()
    }

    asyncFunction = async() => {
      await fetch('/api/get/allanimals')
      .then(res => res.json())
      .then(json => console.log(json))
    }

  
    render() {

      console.log(this.state.pid)
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
        </div>
      </div>
      )
      
    };
  }

export default About

