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
                            <Link to='/games'>
                                <li className="nav-link navItem">Games</li>
                            </Link>
                       
                            <Link to='/about' >
                                <li className="nav-link navItem">About Us</li>
                            </Link>

                            {/* <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Main
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#tips">Action</a>
                                    <a class="dropdown-item" href="#acts">Another action</a>
                                    <a class="dropdown-item" href="#last">Something else here</a>
                                </div>
                            </div> */}

                            <Link to="/parent" >
                                <li className="nav-link contact navItem"> For Parents</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>       
        )
    }
}

export default Nav 

