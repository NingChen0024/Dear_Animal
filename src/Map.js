import React ,{ Component }from 'react'; 
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'
// import {mapScript} from './mapScript.js'
class ParentMap extends Component {


    render() {
     
        return (
        <div >
            
            <div>
                <Breadcrumb className='Breadcrumb-background'>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to='/parent'>For Parents</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Threats</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <h2>Lets explore the endangered animals near You !!</h2>
            <h3>Please enter your pincode</h3>
            <form id="postCodeForm"><input type="text" id="postCode"/>
            <button type="submit" >Search</button></form>
            <div id="map"></div>
         
        </div>
        )
      };
    }
  
  
  export default ParentMap
  