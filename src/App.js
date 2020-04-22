import React ,{ Component }from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'
import PuzzleComp from './PuzzleComp'
import Parent from './Parents'
import WildExp from './WildExp'
import NatureCall from './NatureCall'
import AusAdv from './AusAdv'
import ScrollToTop from './ScrollToTop';
import ParentTips from './Parent_tips';

class App extends Component{

  render(){
    return (
      <div >
        <Router >
          <div>
            <ScrollToTop>
              <Nav/>
              <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/parent" component={Parent}/>
                <Route path='/wildexp' exact component={WildExp}/>
                <Route path='/natureCall' exact component={NatureCall}/>
                <Route path='/ausAdv' exact component={AusAdv}/>
                <Route path='/parentTips' exact component={ParentTips}/>
              </Switch>
            </ScrollToTop>
          </div>
        </Router>
    
      </div>
    )
  }
}



export default App;
