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
                        <Link to='/parent'>Parents</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Map</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            
            <h2 className=' parentshead   mb-5'>Lets explore the endangered animals near You !!</h2>
            
            

            <div className='row mb-5'>
                <div className="col-lg-1 col-md-1 col-12">
                    
                </div>
                <div className="col-lg-5 col-md-5 col-12 mb-5 unifont">
                    <div className='row ml-4'>
                        <h5 className='unifont mt-1'>Click&nbsp;</h5>
                        <button className="btn btn-warning mb-1" onClick={() => window.location.reload(false)}>show map</button>
                        <h5 className='unifont mt-1'> &nbsp;then enter your pincode</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 ">
                    
                    {/* <button className="btn btn-primary " onClick={() => window.location.reload(false)}>Show map!</button> */}
                </div>
                <div className="col-lg-4 col-md-4 col-12">
               
                    <form id="postCodeForm" className="form-inline">
                        <div className='form-group row mb-2 mx-sm-3'>
                            
                            <input type="text" class="form-control" id="postCode" placeholder="Enter your pincode"/>
                            
                        </div>
                        
                        <button type="submit" className="btn btn-warning mb-2 unifont" >Search</button>
                    </form>
                </div>
                
                
            </div>
            <div id="map" className='mb-5'></div>
            
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
        )
      };
    }
  
  
  export default ParentMap
  