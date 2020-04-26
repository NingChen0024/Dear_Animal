import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function NatureCall() {
    return (
      <div className='project-background'>
        <div className="container mb-5 pb-5">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row" >

                            <div className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center fade-up" >

                            <h4 className='m-3'>Exploring</h4>

                            <h1 className='m-4 eventshead pt-5'>Nature's Calling</h1>
                            <h4>Nature’s Calling on all the senses to explore, play and learn about wildlife and the natural environment. What will you discover?</h4>
                            </div>
                    </div>
                </ScrollAnimation>

            <div  class="full-image text-center zoom-in m-5">
                <img src={ require("./images/project/Project_two_inside.jpg")} class="img-fluid" alt="interview process"/>
            </div>

            <p className ='font-weight-bold m-4'>
                Being surrounded by nature inspires a sense of wonder,
                intrigue and curiosity in young children.
            </p>
            <p className ='font-weight-bold m-4'>
                In Nature’s Calling, children will feel safe, secure and
                supported to explore the natural environment of the Habitat
                Haven zoo habitat.
            </p>
            <p className ='font-weight-bold m-4'>
                This full-day, play-based experience is a unique and
                immersive learning experience, drawing on your children’s
                natural instincts to explore the world around them.
            </p>
            <p className ='font-weight-bold m-4'>
                With a unique education workshop, exploring the self-
                guided walking trails, a guided safari bus tour or joining a
                keeper talk there is plenty to keep the children intrigued.
            </p>


            <div className='table row d-flex justify-content-center container'>
                <table className="table table-striped">
                <tbody>
                    <tr>
                        <td className="table-active" colspan="5">Activity</td>
                        <td className="table-active">Duration</td>
                    </tr>
                    <tr>
                        <td className="table-primary" colspan="5">Welcome and introduction to your day (arrivals between 9.50 - 10.05am)</td>
                        <td className="table-primary">10 minutes</td>
                    </tr>
                    <tr>
                        <td className='table-warning' colspan="5">Session with Werribee Open Range Zoo teacher</td>
                        <td className='table-warning'>30 minutes</td>
                    </tr>
                    <tr>
                        <td className='table-info' colspan="5">Safari bus tour</td>
                        <td className='table-info'>30 minutes</td>
                    </tr>
                    <tr>
                        <td className='table-primary' colspan="5">Self-guided walking trails and options to join educational keeper talks</td>
                        <td className='table-primary'>1 – 4 hours</td>
                    </tr>
                </tbody>
                </table>
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

  export default NatureCall