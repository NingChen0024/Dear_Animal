import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

// this component add activity information of nature's calling

function NatureCall() {
    return (
      <div >

        <div>
            <Breadcrumb className='Breadcrumb-background'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Nature's Calling</Breadcrumb.Item>
            </Breadcrumb>
        </div>
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
               <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                    <h2 class="text-white" data-aos-delay="100">We are making the <strong>best </strong> for kids</h2>
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

  export default NatureCall