import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function AusAdv() {
    
    return (
      <div className='project-background'>
        <div className="container mb-5 pb-5">
            <ScrollAnimation animateIn="fadeIn">
                    <div className="row">

                            <div className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center fade-up" >

                            <h4 className='m-3'>Adventures</h4>

                            <h1 className='m-4 eventshead pt-5'>Aussie Animal Adventurers</h1>
                            <h4>Our Aussie Animal Adventurers get a chance to meet our Aussie icons up close and learn more about the unique animals who call this continent home.</h4>
                            </div>
                    </div>
            </ScrollAnimation>

            <div  class="full-image text-center zoom-in m-5">
                <img src={ require("./images/project/Project_three_inside.jpg")} class="img-fluid" alt="interview process"/>
            </div>
            <div className='container eventstext'>
                <p className ='font-weight-bold m-4'>
                    Play in nature, hear our animal yarns and act out your own stories as you meet Aussie animals up close and learn about the world around you.
                    Aussie Animal Adventurers gives children the chance to learn about and meet the animals that make this land unique and discover how to become a hero to help save wildlife.

                </p>
                <p className ='font-weight-bold m-4'>
                    Explore the Sanctuary in small groups, experiencing close up animal encounters and enjoy
                    feature shows and keeper talks. Children will play in nature, learn how to care for the world around them, discover and act out animal stories and learn about Aboriginal culture.
                </p>
                <p className ='font-weight-bold m-4'>
                    During the day, children will learn about different kinds of animals, their body coverings, 
                    features, habitats and life cycles and have the chance to ask questions linked to curriculum priorities.
                    Children will learn:
                </p>

                <div className='table row d-flex justify-content-center container'>
                    <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td className="table-active" colspan="5">Activity</td>
                            <td className="table-active">Duration</td>
                        </tr>
                        <tr>
                            <td className="table-primary" colspan="5">10.30am: Welcome and introduction to your day with Healesville Sanctuary teacher</td>
                            <td className="table-primary">15 minutes</td>
                        </tr>
                        <tr>
                            <td className='table-warning' colspan="5">
                                10.45am – 12pm: Explore the Sanctuary in small groups meeting Sanctuary teachers and attend educational keeper talks</td>
                            <td className='table-warning'>75 minutes</td>
                        </tr>
                        <tr>
                            <td className='table-info' colspan="5">12pm: Spirits of the Sky show</td>
                            <td className='table-info'>25 minutes</td>
                        </tr>
                        <tr>
                            <td className='table-primary' colspan="5">1pm – 1.45pm: Explore the Sanctuary in small groups meeting Sanctuary teachers and attend educational keeper talks</td>
                            <td className='table-primary'>45 minutes</td>
                        </tr>
                        <tr>
                            <td className='table-warning' colspan="5">1.45pm – 2pm: Healesville Sanctuary teacher check-in as you exit</td>
                            <td className='table-warning'>15 minutes</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>

        <footer class="site-footer">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-6 col-12" data-aos-delay="200">
                    <h4 class="my-4">Contact Info</h4>

                    <p class="mb-1">
                    <i className="fa fa-phone mr-2 footer-icon"></i> 
                    +99 080 070 4224
                    </p>

                    <p>
                    <a href="#">
                        <i class="fa fa-envelope mr-2 footer-icon"></i>
                        hello@company.com
                    </a>
                    </p>
                </div>

                <div class="col-lg-3 col-md-6 col-12" data-aos-delay="300">
                    <h4 class="my-4">Our Studio</h4>

                    <p class="mb-1">
                    <i class="fa fa-home mr-2 footer-icon"></i> 
                    Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil
                    </p>
                </div>

                <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos-delay="400">
                    <p class="copyright-text">Copyright &copy; 2020 Your Company
                    <br></br>
                    <a rel="nofollow noopener" href="https://templatemo.com">Design: </a></p>
                </div>

                </div>
            </div>
            </footer>
      </div>  
    );
  }

  export default AusAdv