import React, { Component } from 'react'
import {Link} from 'react-router-dom'


// the navigation bar peovide links which lead to different pages

class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="./">
                        <div className='row'>
                            <img src={require('./images/icon.png')} class="img-fluid icon-dim" />
                            <p className ='navIcon'> Dear Animals </p>
                        </div>
                    </a>

                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto" id="navbarNav">
                           
                            <a className=" nav-link navItem" href="./">
                                <li > Home </li>
                            </a>

                            <Link to='/animalList'> 
                                <li className="nav-link navItem">Animals</li>
                            </Link> 

                            <Link to='/KidsTips'>
                                <li className="nav-link navItem">Tips</li>
                            </Link>

                            <Link to='/story' >
                                <li className="nav-link navItem">Storytelling</li>
                            </Link> 

                            <Link to="/parent" >
                                <li className="nav-link navItem"> Parents</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>       
        )
    }
}

export default Nav 

