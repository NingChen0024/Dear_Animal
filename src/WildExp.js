import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
// this component contains info about wild explore activties

function WildExp() {
    return (
      <div >
        <div>
            <Breadcrumb className='Breadcrumb-background'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Wild Explorers</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div className="container mb-5 pb-5">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row ">

                            <div className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center fade-up" >

                            <h4 className=' unifont'>Outdoors</h4>

                            <h1 className='m-4 eventshead pt-5'>Wild Explorers</h1>
                            <h4 className='unifont'>Children will become a Wild Explorer for the day, learning about three special endangered Australian animals through song, story and play.</h4>
                            </div>
                    </div>
                </ScrollAnimation>

            <div  class="full-image text-center zoom-in m-5">
                <img src={ require("./images/project/Project_one_inside.jpg")} class="img-fluid" alt="interview process"/>
            </div>


            <div className="container">
                <p className =' m-4 unifont'>
                    Wild Explorers learn to love and care for animals. Children
                    discover how to protect animals&#39; habitats and the
                    importance of ensuring their survival through play-based
                    learning, stories and song.
                </p>
                <p className =' m-4 unifont'>
                    Children commence their day as Wild Explorers through
                    story-time with our educators. They&#39;ll learn about our
                    animals&#39; unique characteristics, habitats and needs. We&#39;ll
                    introduce the children to the plight of three of Australia&#39;s
                    most endangered species: the Southern Corroboree Frog,
                    Eastern Barred Bandicoot and the Helmeted Honeyeater
                    and explain Zoos Victoria&#39;s breeding program to protect
                    these important creatures.
                </p>
                <p className ='m-4 unifont'>
                    Of course Wild Explorers have a lot more to uncover.
                    Children and their supervisors are encouraged to explore
                    our outdoor learning space, the Keeper Kids precinct,
                    unlocking the secrets of what make our animals so special.
                </p>
                <p className =' m-4 unifont'>
                    Who knows what animals you might meet along the way -
                    extraordinary encounters abound for Wild Explorers.
                    Children might feel the rumble of an Asian Elephant&#39;s
                    trumpet or take a closer look at the curious Lord Howe Stick
                    Insect on their adventure through the zoo. Check out the
                    program itinerary to find out where and when our animal
                    encounters take place.
                </p>


                <div className='table row d-flex justify-content-center container'>
                    <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td className="table-active unifont" colspan="5">Activity</td>
                            <td className="table-active unifont">Duration</td>
                        </tr>
                        <tr>
                            <td className="table-primary unifont" colspan="5">Welcome and introduction to your day (9 am)</td>
                            <td className="table-primary unifont">10 minutes</td>
                        </tr>
                        <tr>
                            <td className='table-warning unifont' colspan="5">Session with Melbourne Zoo teacher</td>
                            <td className='table-warning unifont'>40 minutes</td>
                        </tr>
                        <tr>
                            <td className='table-info unifont' colspan="5">Animal exhibits, attend educational keeper talks</td>
                            <td className='table-info unifont'>1 - 4 hours</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className='container '>
                    <p>Visit this website to know more!</p>
                    <a className='link-color' href='https://www.zoo.org.au/education/excursions/wild-explorers-kinder/'>https://www.zoo.org.au/education/excursions/wild-explorers-kinder/</a>

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
    );
  }

  export default WildExp