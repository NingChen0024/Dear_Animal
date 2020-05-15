import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'
// this component contains info about wild explore activties

class ThreatCover extends Component {


    componentDidMount() {  
        this.initViz()  
      }  
  
    initViz() {
       
        const url = "https://public.tableau.com/views/FirstexplanationPART2/Dashboard3?:display_count=y&publish=yes&:origin=viz_share_link",
        vizContainer = this.vizContainer;  
        var options = {
            hideTabs: true,
            width:'100%',
            height:'900px',
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
                <Breadcrumb.Item active>Threat</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div className="container mb-5 pb-5">
            <ScrollAnimation animateIn="fadeIn">
                <div className="row ">
                    <div className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center fade-up" >
                        <h1 className=' unifont pt-5'>WHAT ARE THE MAJOR THREATS TO FAUNA SPECIES?</h1>
                    </div>
                </div>
            </ScrollAnimation> 
        </div>

        <div className='container mb-5'>
            <p className ='font-weight-bold m-4 unifont'>
                Through data visualization, this interface allows viewers to understand the 
                relevant information of the 14 most endangered wildlife in Victoria clearly 
                and intuitively. Browse these charts, and then don't hesitate to protect 
                animals and the environment.
            </p>  

            <p className ='font-weight-bold m-4 unifont'>
                The entire interface shows the overall status of the 14 animals. Users can 
                understand the big picture at a glance. Through the pie chart in the lower 
                right corner, users can understand the specific reasons like what is affecting 
                the animal habitat and through the “Let's know more about these animals” 
                table on the left, user can gain more knowledge about the food, habitat 
                and the threatened status of the animals.
            </p>  

            <p className ='font-weight-bold m-4 unifont'>
                Click on the animal you are interested in in the bar chart, and all the 
                information related to the selected animal will be displayed. This will 
                give you a clear direction to protect animals
            </p>  

            <p className ='font-weight-bold m-4 unifont'>
                <strong>*NOTE: User can hover over the graphs and click them to get more information.</strong>
            </p>  
        </div>

        <div className='container'>
          <div ref={(div) => { this.vizContainer = div }}> 
          </div>   
        </div>  
        
        <footer class="site-footer">
          <div class="container">
          <div class="row">
               <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                    <h2 class="text-white" data-aos-delay="100"> Educate &amp; &nbsp;<strong>Encourage</strong> </h2>
               </div>

               <div class="col-lg-4 col-md-6 col-12" data-aos-delay="300">
                    <h4 class="my-3">Copyright &copy; 2020 Black Panther</h4>
               </div>          
          </div>
          </div>
     </footer>
      </div>  
    )}
  }

  export default ThreatCover