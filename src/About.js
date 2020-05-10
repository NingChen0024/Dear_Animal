/* global google */
import React ,{ Component }from 'react'; 
class About extends Component {



    componentDidMount() {  
      this.initViz()  
    }  

      initViz() {
        const url = "https://public.tableau.com/views/Firstexplanation/Firstexplanation?:display_count=y&:origin=viz_share_link",
        vizContainer = this.vizContainer;  
        var options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

       var viz = new window.tableau.Viz(vizContainer, url, options);
    // Create a viz object and embed it in the container div.
    }

    render() {

      return (
      <div >
        <h3>My Google Maps Demo</h3>
        <form id="postCodeForm"><input type="text" id="postCode"/><button type="submit">Search</button></form>
        <div id="map"></div>
        <div className='container'>
          <div ref={(div) => { this.vizContainer = div }}> 
          </div>   
        </div>          
      </div>
      )
    };
  }


export default About

