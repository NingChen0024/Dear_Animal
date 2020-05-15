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
                    <Breadcrumb.Item active>Map</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <h2>Lets explore the endangered animals near You !!</h2>
            <h3>Please enter your pincode</h3>
            <form id="postCodeForm"><input type="text" id="postCode"/>
            <button type="submit" >Search</button></form>
            <div id="map"></div>
            
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
        )
      };
    }
  
  
  export default ParentMap
  