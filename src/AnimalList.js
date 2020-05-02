import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'
import Popup from './Popup'
import {Link} from 'react-router-dom'



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
// this component display a list of animals and show their characterics to kids


class AnimalList extends Component {
    
    state = {
        animals: [{id:1, name:'animal1', type:'fish', des:'animal_one'}, 
        {id:2, name:'animal2', type:'mammel', des:'animal_two'},
        {id:3, name:'animal3', type:'bird', des:'animal_three'},
        {id:4, name:'animal4', type:'bird', des:'animal_four'}],
        animal:"All"
      }

    //   componentDidMount(){
    //     axios.get('/api/get/allanimals')
    //     //.then(res => console.log(res.data))
    //     .then(res => this.setState({pid: res.data}))
    //     .catch(err => console.log(err))
    //   }

        handleChangeAnimal = event => {
        this.setState({ animal: event.target.value });
      };

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

     render() {

        const animals = this.state.animals
        const animal = this.state.animal
        const uniqueType= this.getUnique(this.state.animals, "type");
        uniqueType.push({type:'All'})

        const filterDropdown = animals.filter(function(result) {
            return result.type === animal
          });
        
     
        return (
        <div >
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
                            <option key={animal.id} value={animal.type}>
                                {animal.type}
                            </option>))}

                        </select>
                    </label>

                    <div className='container view-rows'>
                        {this.state.animal === 'All' ? 
                        (this.state.animals.map(animal => (
                        <div key={animal.id} >
                            <div className='card m-4'>
                                
                                    <Link to={{
                                            pathname: "/animalDetail",
                                            data: animal
                                            }}>     

                                    <div class="container">
                                        <img src={ require("./images/koala_cartoon.png")} class="img-fluid" />
                                        <h4><b>{animal.name}</b></h4> 
                                        <p>{animal.des}</p>
                                    </div>
                                            
                                    </Link>
                                
                            </div>
                        </div>))) : 

                        (filterDropdown.map(animal => (
                        <div key={animal.id}>
                            <div className='card m-4'>

                                <Link to={{
                                            pathname: "/animalDetail",
                                            data: animal
                                            }}>     
                                            
                                    <div class="container">
                                        <img src={ require("./images/koala_cartoon.png")} class="img-fluid" />
                                        <h4><b>{animal.name}</b></h4> 
                                        <p>{animal.des}</p>
                                    </div>
                                            
                                </Link>
                            </div>               
                        </div>
                        )))}
                    </div>
                </form>              
            </div>

            <div></div>
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
  }

  export default AnimalList