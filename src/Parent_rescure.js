import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


// this components provides solutions for parents to rescue animals

function ParentRes() {
    return (
      <div >
        <div className='container'>
        <ScrollAnimation animateIn="fadeIn">
            <div >

              <h1 className=' parentshead2 pt-5 mt-5'>Rescue methods for all animals</h1>
            
              
              <div  class="parent-image text-center zoom-in mt-5">
                <img src={ require("./images/project/parents_help.jpg")} class="img-fluid" alt="interview process"/>
              </div>

            </div>
          </ScrollAnimation>
          <div className='container parent-text-space mb-5 pb-5'>

            <p className ='font-weight-bold m-4 parentText'>
                Personal safety is first and foremost.
            </p>  

            <p className ='font-weight-bold m-4 parentText'>
                1. Wear a safety vest with reflective bands to increase your visibility. 
                The wearing of a vest alsoallows the public and authorities to realise that
                you are acting in an official capacity. This isparticularly important if you are 
                carrying a rifle or must euthanase an animal in some way. It also makes it easier 
                for other rescuers to find you.
            </p>  

            <p className ='font-weight-bold m-4 parentText'>
                2. If an animal appears to be unreasonably agitated by your presence, try removing 
                the vest in case it is the bright colour that is alarming the animal.
            </p>  

            <p className ='font-weight-bold m-4 parentText'>
                3. Examination or surgical gloves are recommended for personal hygiene when handling 
                injured animals or when checking pouches. This also reduces the risk of infection 
                to an animal you are handling.
            </p>  

            <p className ='font-weight-bold m-4 parentText'>
                4. After wearing examination gloves and, preferably, even before you put them on, 
                disinfect your hands – the warm and moist environment under a latex glove is a 
                paradise for bacteria.
            </p> 

   
            <p className ='font-weight-bold m-4 parentText'>
                5. Before dealing with an animal, familiarise yourself with the surroundings 
                and assess for risks or dangers to yourself, and to the animal – eg you may 
                be half way around a bend and not visible to oncoming vehicles.
            </p> 

            <p className ='font-weight-bold m-4 parentText'>
                6. If the animal is on private property, you will need permission to enter.
            </p> 
            
            <p className ='font-weight-bold m-4 parentText'>
                7. Attempt to assess an animal from a safe distance. Good binoculars are essential. 
                Keeping a reasonable distance improves your own safety and minimises the possibility 
                of an animal trying to flee and hurt itself further, or perhaps even escaping.
            </p> 
            <p className ='font-weight-bold m-4 parentText'>
                8. Decide if you can handle the situation. You may need help, other equipment 
                or Veterinary assistance (drugs, etc).
            </p> 
            <p className ='font-weight-bold m-4 parentText'>
                9. Before you attempt to capture an animal, make sure you will be able to deal with 
                the animal and that it has somewhere to go. Don’t put an animal through the torment 
                of capture if it can’t be cared for.
            </p> 
            <p className ='font-weight-bold m-4 parentText'>
                10. Be prepared when you approach an animal. Take a blanket with you even if the animal 
                doesn’t appear to be able to move. It may suddenly get up or you may need to quickly grab a joey.
            </p> 
            <p className ='font-weight-bold m-4 parentText'>
                11. The GOLDEN RULE for most animals is to cover the head as quickly as possible. This will
                generally calm it down, or at least it will cover the bitey bits.
            </p> 

            <p className ='font-weight-bold m-4 parentText'>
                12. When transporting an animal, turn off your car radio/stereo.
            </p> 

            <p className ='font-weight-bold m-4 parentText'>
                13. If an animal is mobile DO NOT CHASE IT – follow it and devise a rescue plan.
            </p> 
        </div>
     

        
      </div>
      <footer class="site-footer">
            <div class="container">
                <div class="row">

                <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                    <h1 class="text-white"ß data-aos-delay="100">We are making the <strong>best </strong> for kids</h1>
                </div>

                <div class="col-lg-3 col-md-6 col-12" data-aos-delay="200">
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
    );
  }

  export default ParentRes