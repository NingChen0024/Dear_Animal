import React ,{ Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table'
import Nav from './Nav'
import Form from './Form'
import About from './About'
import Shop from './Shop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'
import PuzzleComp from './PuzzleComp'




class App extends Component{

  render(){
    return (
      <div >
        <Router>
          <div>
            <Nav/>
            <PuzzleComp/>
            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/about" component={About}/>
              <Route path="/shop" component={Shop}/>
            </Switch>
          </div>
        </Router>
    
      </div>
    )
  }
}


export default App;
