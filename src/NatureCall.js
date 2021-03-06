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

                            <h4 className=' unifont'>Exploring</h4>

                            <h1 className='m-4 eventshead pt-5'>Nature's Calling</h1>
                            <h4 className='unifont'>Nature’s Calling on all the senses to explore, play and learn about wildlife and the natural environment. What will you discover?</h4>
                            </div>
                    </div>
                </ScrollAnimation>

            <div  class="full-image text-center zoom-in m-5">
                <img src={ require("./images/project/Project_two_inside.jpg")} class="img-fluid" alt="interview process"/>
            </div>

            <p className ='m-4 unifont'>
                Being surrounded by nature inspires a sense of wonder,
                intrigue and curiosity in young children.
            </p>
            <p className =' m-4 unifont'>
                In Nature’s Calling, children will feel safe, secure and
                supported to explore the natural environment of the Habitat
                Haven zoo habitat.
            </p>
            <p className =' m-4 unifont'>
                This full-day, play-based experience is a unique and
                immersive learning experience, drawing on your children’s
                natural instincts to explore the world around them.
            </p>
            <p className =' m-4 unifont'>
                With a unique education workshop, exploring the self-
                guided walking trails, a guided safari bus tour or joining a
                keeper talk there is plenty to keep the children intrigued.
            </p>


            <div className='table row d-flex justify-content-center container'>
                <table className="table table-striped">
                <tbody>
                    <tr>
                        <td className="table-active unifont" colspan="5">Activity</td>
                        <td className="table-active unifont">Duration</td>
                    </tr>
                    <tr>
                        <td className="table-primary unifont" colspan="5">Welcome and introduction to your day (arrivals between 9.50 - 10.05am)</td>
                        <td className="table-primary unifont">10 minutes</td>
                    </tr>
                    <tr>
                        <td className='table-warning unifont' colspan="5">Session with Werribee Open Range Zoo teacher</td>
                        <td className='table-warning unifont'>30 minutes</td>
                    </tr>
                    <tr>
                        <td className='table-info unifont' colspan="5">Safari bus tour</td>
                        <td className='table-info unifont'>30 minutes</td>
                    </tr>
                    <tr>
                        <td className='table-primary unifont' colspan="5">Self-guided walking trails and options to join educational keeper talks</td>
                        <td className='table-primary unifont' >1 – 4 hours</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div className='container '>
                <p>Visit this website to know more!</p>
                <a className='link-color' href='https://www.zoo.org.au/education/excursions/natures-calling/'>https://www.zoo.org.au/education/excursions/natures-calling/</a>

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

  export default NatureCall