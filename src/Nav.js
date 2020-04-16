import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="./">
                        <i className ='navIcon'> Dear Animals </i>
                     </a>

                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto" id="navbarNav">
                            <Link to='/'>
                                <li className="nav-link navItem">Animal lovers</li>
                            </Link>
                       
                            <Link to='/about' >
                                <li className="nav-link navItem">About</li>
                            </Link>

                            <Link to="/shop" >
                                <li className="nav-link navItem"> Shop</li>
                            </Link>

                            <Link to="/shop" >
                                <li className="nav-link contact navItem"> contact</li>
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