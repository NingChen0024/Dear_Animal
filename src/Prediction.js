import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'
// this component contains info about wild explore activties

class Prediction extends Component {

    componentDidMount() {  
        this.initViz()  
      }  
  
      initViz() {
       
        const url = "https://public.tableau.com/views/Forcasting_15892842910030/Dashboard1?:display_count=y&publish=yes&:origin=viz_share_link",
        vizContainer = this.vizContainer;  
        var options = {
            hideTabs: true,
            width:'100%',
            height:'400px',
            autoflow:'auto',
            onFirstInteractive: function () { 
              
            }
        };
  
        var viz = new window.tableau.Viz(vizContainer, url, options);
      }
    render(){
    return (
      <div >
        <div>
            <Breadcrumb className='Breadcrumb-background'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/parent'>For Parents</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Prediction</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div className="container mb-5 pb-5">
            <ScrollAnimation animateIn="fadeIn">
                <div className="row ">
                    <div className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center fade-up" >
                        <h1 className='m-4 unifont pt-5'>WHAT WILL HAPPEN TO THESE ANIMALS IN NEAR FUTURE?</h1>
                    </div>
                </div>
            </ScrollAnimation> 
        </div>

        <div className='container'>
          <div ref={(div) => { this.vizContainer = div }}> 
          </div>   
        </div>  
        <div className='container mb-5'>
            <p className ='font-weight-bold m-4'>
                As it is seen in the graph there is so much variation in the count of animals in 
                Victoria has starting to increase gradually from the year 1960 and there is so 
                much variation in the count of the animals year by year also in the year 1991 the 
                count was increased to 894 of these top 14 endangered animals. In 2020 the count 
                is around 381 which is better as compared to 1991. The graph also shows the 
                estimation of the next 20 years using a 90% confidence interval and the count 
                is gradually increasing due to all the threats that are present to the fauna 
                species. That is why it is required to take strict measures to protect these animals.
            </p> 
          
        </div>
        <footer class="site-footer">
            <div class="container">
                <div class="row">

                <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                    <h1 class="text-white"  data-aos-delay="100">We are making the <strong>best </strong> for kids</h1>
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

                <div class="col-lg-4 col-md-6 col-12"  data-aos-delay="300">
                    <h4 class="my-4">Copyright &copy; Black Panther</h4>
                </div>

                
                </div>
            </div>
        </footer>
      </div>  
    )}
  }

  export default Prediction