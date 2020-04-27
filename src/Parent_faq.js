import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


function ParentFaq() {
    return (
      <div className='faq-background'>
        <div className='container '>
          <ScrollAnimation animateIn="fadeIn">
            <div className='mb-5, pb-5'>

                <h1 className=' parentshead2 pt-5 mb-5'>Q &amp; A</h1>

                <div  class="parent-image text-center zoom-in mt-5">
                <img src={ require("./images/faq_buble.jpg")} class="img-fluid" alt="interview process"/>
                </div>

                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <h3>Q1. Are there any animal-friendly activities for kids to do at home?</h3>
                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4"  >

                        <p class="mt-3 mb-4">Watching movies is always a good time. It is 
                            good to watch movies related to the protection of animals with your children. 
                            After watching an animal-related movie, discuss the information with your 
                            child and think about how to help protect the animal as in the movie.</p>
                    </div>
                </div>

                <div className='row mt-5 mp-5'>

                    <h3>Q2. Which books are suitable for children to learn more about endangered wildlife?</h3>
                    <div class="col-lg-6 col-md-6 col-12 mb-4 mt-3">
                    <p class="mt-3 mb-4">BANIMAL RESCUE </p>
                        <p>With this interactive book, kids can become animal-rescuing heroes! 
                            Turn the transparent pages to move animals from bad situations to 
                            places where they’re happy and free.</p>
                        <img src={ require("./images/faq_bear.png")} class="img-fluid parent-image" alt="interview process"/>
                    </div>

                    <div class="col-lg-6 col-md-6 col-12 mb-4 mt-3"  >
                        
                        <p class="mt-3 mb-4">LOVE ME GENTLY </p>
                        <p>Love Me Gently is a kids’ guide to caring for canine companions. 
                            Learn about showing animals (especially dogs) love, compassion, 
                            and kindness. And read about the real-life problems a boy and his 
                            newly adopted puppy have—until they work them out together</p>
                        <img src={ require("./images/faq_dog.png")} class="img-fluid parent-image" alt="interview process"/>


                    </div>
                </div>

                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <h3>Q3. What if the child is scratched by wild animals?</h3>

                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4"  >

                        <p class="mt-3 mb-4">If a child is unfortunately scratched by a wild animal, 
                        parents should first help the child squeeze the contaminated blood from 
                        the wound and disinfect it with alcohol or iodophor. After that, parents 
                        need to call the doctor to see if they need to be vaccinated. If the wound 
                        is severe or if bleeding cannot be stopped in time, parents should immediately 
                        take the child to the hospital.</p>

                    </div>
                </div>


                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <h3>Q4. How to ensure the health of children after contact with wild animals?</h3>
                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4"  >
                        
                        <p class="mt-3 mb-4">Because small animals carry some germs, when children get in 
                        touch with animals, parents should instruct their children to wash their hands 
                        and disinfect them. In addition, children should change the clothes they wear 
                        when they play with animals, because there may be animal body fluids or feces. 
                        These clothes should be washed carefully. If the child feels unwell, he should 
                        go to the hospital immediately.</p>

                    
                    </div>
                </div>

                <div className='row mt-5 mp-5'>
                    <div class="col-lg-7 col-md-7 col-12 mb-4 mt-3">
                        <h3>Q5. What suggestions can I give to make the schools and kindergartens more animal-friendly?</h3>
                    </div>
                    
                    <div class="col-lg-5 col-md-5 col-12 mb-4"  >
                        
                        <p class="mt-3 mb-4">Ask teachers to start an animal rights group so that kids can 
                        learn how to protect endangered animals and try to save animals. Not only that, 
                        children can learn how to work with other classmates. The tips are to get together, 
                        to get educated, to get a name, to ger organized and to be creative.</p>
                    
                    </div>
                </div>
            </div>
          </ScrollAnimation>
        
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

  export default ParentFaq