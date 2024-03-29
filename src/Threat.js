import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'
// this component contains info about wild explore activties

class Threat extends Component {

    componentDidMount() {  
        this.initViz()  
      }  
  
      initViz() {
       
        const url = "https://public.tableau.com/views/THREATS/Dashboard1?:display_count=y&publish=yes&:origin=viz_share_link",
        vizContainer = this.vizContainer;  
        var options = {
            hideTabs: true,
            width:'100%',
            height:'600px',
            autoflow:'auto',
            onFirstInteractive: function () { 
              
            }
        };
  
        var viz = new window.tableau.Viz(vizContainer, url, options)

      }
    render(){
    return (
      <div >
        <div>
            <Breadcrumb className='Breadcrumb-background'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/parent'>Parents</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Threat</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div className="container">
            <ScrollAnimation animateIn="fadeIn">
                <div className="row ">
                    <div className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center fade-up" >
                        <h1 className='unifont'>WHAT ARE THE MAJOR THREATS TO FAUNA SPECIES?</h1>
                    </div>
                </div>
            </ScrollAnimation> 
        </div>



        <div className='container'>
          <div ref={(div) => { this.vizContainer = div }}> 
          </div>   
        </div>  
        <div className='container mb-5'>
            <p className ='font-weight-bold m-4 unifont'>
                According to the graph, inappropriate fire regimes are having the maximum 
                effect on the animals, followed by a clearing of vegetation, feral pigs and 
                urban development these are the major threat to the life of fauna. These are 
                the top major threats and to save the fauna certain measures are been taken 
                by the government making strategies like the involvement of the science-based 
                approach, building up partnerships to protect the endangered animals. To know 
                more about the strategies please 
                visit: 
            </p> 
            <p className='container unifont'> 
                <a className='link-color' href='https://www.environment.gov.au/biodiversity/threatened/publications/threatened-species-strategy'>https://www.environment.gov.au/biodiversity/threatened/publications/threatened-species-strategy</a>
            </p> 
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
    )}
  }

  export default Threat