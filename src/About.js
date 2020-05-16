/* global google */
import React ,{ Component }from 'react'; 

// import {mapScript} from './mapScript.js'
class About extends Component {


    state = {
      loaded:false
    }

    refresh = () => {
      window.location.reload(false)
    }

    componentDidMount() {  
      this.initViz()  
    }  

      initViz() {
       
        const url = "https://public.tableau.com/views/FirstexplanationPART2/Dashboard3?:display_count=y&publish=yes&:origin=viz_share_link",
        vizContainer = this.vizContainer;  
        var options = {
            hideTabs: true,
            width:'100%',
            height:'1100px',
            autoflow:'auto',
            onFirstInteractive: function () { 
              
            }
        };

       var viz = new window.tableau.Viz(vizContainer, url, options);
    // Create a viz object and embed it in the container div.
    }

    render() {
     
      return (
      <div >
        <h3>My Google Maps Demo</h3>

        <button onclick={
          this.refresh()
        }>new</button>

        
        <form id="postCodeForm"><input type="text" id="postCode"/>
        <button type="submit" onclick={
          this.refresh()
        }>Search</button></form>
      
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

