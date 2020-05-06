import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
function AusAdv() {
    
    return (
      <div >
        <div>
            <Breadcrumb className='Breadcrumb-background'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Aussie Animal Adventurers</Breadcrumb.Item>
            </Breadcrumb>
        </div>

        
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

  export default AusAdv