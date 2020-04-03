import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="./">
                        <i ></i>
                        Animal lovers
                     </a>

                    <div class="collapse navbar-collapse" id="navbarNav">

                        <ul class="navbar-nav ml-auto" id="navbarNav">
                            <Link to='/'>
                                <li class="nav-link">Animal lovers</li>
                            </Link>
                       
                            <Link to='/about' >
                                <li class="nav-link">About</li>
                            </Link>

                            <Link to="/shop" >
                                <li class="nav-link"> Shop</li>
                            </Link>

                            <Link to="/shop" >
                                <li class="nav-link contact"> contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>       
        )
    }
}

export default Nav 


{/* 
             <a className="nav-link active" href="https://www.google.com">Active</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#">Disabled</a> */}