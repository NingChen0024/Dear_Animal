import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


// this components provide tips for parents to help endangered animal

function ParentTips() {
    return (
      <div >
        <div className='container'>
        <ScrollAnimation animateIn="fadeIn">
            <div >

              <h1 className=' parentshead pt-5'>10 Easy Things You Can Do to Save Endangered Species</h1>
            
              
              <div  class="parent-image text-center zoom-in mt-5">
                <img src={ require("./images/project/parents_tips.jpg")} class="img-fluid" alt="interview process"/>
              </div>

            </div>
          </ScrollAnimation>
          <div className='container parent-text-space mb-5 pb-5'>
            <h3 className='mt-5'>1. Learn about endangered species in your area.</h3>
            <p className ='font-weight-bold m-4'>
              Teach your friends and family about the wonderful wildlife, birds, 
              fish and plants that live near you. The first step to protecting 
              endangered species is learning about how interesting and important 
              they are. Our natural world provides us with many indispensable 
              services including clean air and water, food and medicinal sources, 
              commercial, aesthetic and recreational benefits. For more information 
              ut endangered species, visit endangered.fws.gov and join our activist 
              network to receive updates and action alerts.
            </p>  

            <h3 className='mt-5'>2. Visit a national wildlife refuge, park or other open space</h3>
            <p className ='font-weight-bold m-4'>
              These protected lands provide habitat to many native wildlife, birds, 
              fish and plants. Scientists tell us the best way to protect endangered 
              species is to protect the places where they live. Get involved by 
              volunteering at your local nature center or wildlife refuge. 
              Go wildlife or bird watching in nearby parks. Wildlife related 
              recreation creates millions of jobs and supports local businesses. 
            </p>  

            <h3 className='mt-5'>3. Make your home wildlife friendly.</h3>
            <p className ='font-weight-bold m-4'>
              Secure garbage in shelters or cans with locking lids, feed pets 
              indoors and lock pet doors at night to avoid attracting wild animals 
              into your home. Reduce your use of water in your home and garden so 
              that animals that live in or near water can have a better chance of 
              survival. Disinfect bird baths often to avoid disease transmission. 
              Place decals on windows to deter bird collisions. Millions of birds 
              die every year because of collisions with windows. You can help reduce 
              the number of collisions simply by placing decals on the windows in 
              your home and office. For more information on what you can do, 
              check out these tips from the US Fish and Wildlife Service.
            </p>  

            <h3 className='mt-5'>4. Native plants provide food and shelter for native wildlife.</h3>
            <p className ='font-weight-bold m-4'>
              Attracting native insects like bees and butterflies can help pollinate 
              your plants. The spread of non-native species has greatly impacted 
              native populations around the world. Invasive species compete with 
              native species for resources and habitat. They can even prey on 
              native species directly, forcing native species towards extinction. 
            </p>  

            <h3 className='mt-5'>5. Herbicides and pesticides may keep yards looking nice but they are in fact hazardous pollutants that affect wildlife at many levels.</h3>
            <p className ='font-weight-bold m-4'>
              Many herbicides and pesticides take a long time to degrade and build 
              up in the soils or throughout the food chain. Predators such as hawks, 
              owls and coyotes can be harmed if they eat poisoned animals. 
              Some groups of animals such as amphibians are particularly vulnerable 
              to these chemical pollutants and suffer greatly as a result of the 
              high levels of herbicides and pesticides in their habitat. 
            </p> 

            <h3 className='mt-5'>6. Slow down when driving.</h3>
            <p className ='font-weight-bold m-4'>
              Many animals live in developed areas and this means they must na
              vigate a landscape full of human hazards. One of the biggest 
              obstacles to wildlife living in developed areas is roads. 
              Roads divide habitat and present a constant hazard to any animal 
              attempting to cross from one side to the other. So when you’re out 
              and about, slow down and keep an eye out for wildlife.
            </p> 

            <h3 className='mt-5'>7. Recycle and buy sustainable products. </h3>
            <p className ='font-weight-bold m-4'>
              Buy recycled paper, sustainable products like bamboo and Forest 
              Stewardship Council wood products to protect forest species. 
              Never buy furniture made from wood from rainforests. Recycle 
              your cell phones, because a mineral used in cell phones and 
              other electronics is mined in gorilla habitat. Minimize your 
              use of palm oil because forests where tigers live are being 
              cut down to plant palm plantations.
            </p> 
            
            <h3 className='mt-5'>8. Never purchase products made from threatened or endangered species. </h3>
            <p className ='font-weight-bold m-4'>
              Overseas trips can be exciting and fun, and everyone wants a 
              souvenir. But sometimes the souvenirs are made from species 
              nearing extinction. Avoid supporting the market in illegal 
              wildlife including: tortoise-shell, ivory, coral. Also, be careful 
              of products including fur from tigers, polar bears, sea otters 
              and other endangered wildlife, crocodile skin, live monkeys or 
              apes, most live birds including parrots, macaws, cockatoos and 
              finches, some live snakes, turtles and lizards, some orchids, 
              cacti and cycads, medicinal products made from rhinos, tiger or 
              Asiatic black bear.

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

  export default ParentTips