import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'
import {Link} from 'react-router-dom'


// this component display a list of animals and show their characterics to kids
var animals = []
var animal = ''
var filterDropdown = null
var uniqueType = null

class AnimalList extends Component {
    
    state = {
        loading:true,
        animals: null,
        animal:''
      }


      getUnique(arr, comp) {
        const unique = arr
        //store the comparison values in array
        .map(e => e[comp])
    
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
    
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e])
    
        .map(e => arr[e]);
    
        return unique;
    }

    //   async componentDidMount(){
    //     axios.get('/api/get/allanimals')
    //     //.then(res => console.log(res.data))
    //     .then(res => this.setState({animals: res.data, loading: false}))
    //     .then(res => {animals = this.state.animals})
    //     .then(res => {animal = this.state.animal})
    //     .then(res => {uniqueType= this.getUnique(this.state.animals, "class")})
    //     .then(res => {uniqueType.push({type:'All'})})
    //     .then(res => { filterDropdown = animals.filter(function(result) {
    //             return result.class === animal
    //           })})

        async componentDidMount(){
        axios.get('/api/get/allanimals')
        .then(res => this.setState({animals: res.data}))
        .then(res => console.log(this.state.animals))
        .then(res => {animals = this.state.animals})
        .then(res => console.log(animals))
        .then(res => {animal = this.state.animal})
        .then(res => console.log(animal))
        .then(res => {uniqueType = this.getUnique(this.state.animals, "class")})
        .then(res => {uniqueType.push({class:'All'})})
        .then(res => console.log(uniqueType))
        .then(res => { filterDropdown = animals.filter(function(result) {
                return result.class === animal
              })})
        .then(res => this.setState({loading: false}))
      }


        handleChangeAnimal = event => {
        this.setState({ animal: event.target.value });
        filterDropdown = animals.filter(function(result) {
            return result.class === animal
          })

        console.log(filterDropdown)
      };


     render() {

        // const animals = this.state.animals
        // const animal = this.state.animal
        // const uniqueType= this.getUnique(this.state.animals, "class");
        // uniqueType.push({type:'All'})

        // filterDropdown = animals.filter(function(result) {
        //     return result.class === animal
        //   });


        
        return (

        <div >
            {this.state.loading || !this.state.animals ? (
                <div>loading....</div>
            ) : (

            <div>
                <div className='container '>
                    <ScrollAnimation animateIn="fadeIn">
                        <div pt-5></div>
                        <div >
                            <h1 className=' kidtipshead pt-5'>Hey there want to be my friend ?</h1>
                        </div>
                    </ScrollAnimation>


                    <form >
                        <br />
                        <br />
                        <label>                     
                            <select
                                value={this.state.animal}
                                onChange={this.handleChangeAnimal}
                                className="custom-select">

                                {uniqueType.map(animal => (
                                <option key={animal.aid} value={animal.class}>
                                    {animal.class}
                                </option>))}

                            </select>
                        </label>

                        <div className='container view-rows'>
                            {this.state.animal === 'All' ? 
                            (this.state.animals.map(animal => (
                            <div key={animal.aid} >
                                <div className='card m-4'>
                                    
                                        <Link to={{
                                                pathname: "/animalDetail",
                                                data: animal
                                                }}>     

                                        <div class="container">
                                            <img src={ require("./images/koala_cartoon.png")} class="img-fluid" />
                                            <h4><b>{animal.aniname}</b></h4> 
                                        </div>
                                                
                                        </Link>
                                    
                                </div>
                            </div>))) : 

                            (filterDropdown.map(animal => (
                            <div key={animal.aid}>
                                <div className='card m-4'>

                                    <Link to={{
                                                pathname: "/animalDetail",
                                                data: animal
                                                }}>     
                                                
                                        <div class="container">
                                            <img src={ require("./images/koala_cartoon.png")} class="img-fluid" />
                                            <h4><b>{animal.aniname}</b></h4> 
                                        </div>
                                                
                                    </Link>
                                </div>               
                            </div>
                            )))}
                        </div>
                    </form>              
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
            )}
        </div>
    )}
  }

  export default AnimalList