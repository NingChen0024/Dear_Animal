/* global google */
import React ,{ Component }from 'react'; 

// import {mapScript} from './mapScript.js'
class About extends Component {


    state = {
      loaded:false
    }

    componentDidMount() {  
      this.initViz()  
      // if(!this.state.loaded) {
      //   this.setState({loaded:true})
      //   window.location.reload(false);
      //   console.log(this.state.loaded)
      // }

    }  

      initViz() {
        const url = "https://public.tableau.com/views/Firstexplanation/Firstexplanation?:display_count=y&:origin=viz_share_link",
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
        <form id="postCodeForm"><input type="text" id="postCode"/>
        <button type="submit" >Search</button></form>
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

