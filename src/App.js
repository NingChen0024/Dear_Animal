import React ,{ Component }from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'
import PuzzleComp from './PuzzleComp'
import Parent from './Parents'
import WildExp from './WildExp'
import NatureCall from './NatureCall'
import AusAdv from './AusAdv'
import ScrollToTop from './ScrollToTop';
import ParentTips from './Parent_tips';
import ParentRes from './Parent_rescure';
import Game from './Game';
import ParentCons from './Parent_cons';
import ParentFaq from './Parent_faq';
import KidsTips from './KidsTips';
import AniamlList from './AnimalList';
import { HashRouter } from 'react-router-dom'
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import Anidetail from './Anidetail';
import Stroy from './Story'
import Threat from './Threat';
import ParentMap from './Map'
import Prediction from './Prediction';
import ThreatCover from './ThreatCover'
import GameDes from './GameDes'



class App extends Component{

  render(){
    return (
      <div >
        <HashRouter>
          <div>
            <ScrollToTop>
              <Nav/>
              <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/parent" exact component={Parent}/>
                <Route path='/wildexp' exact component={WildExp}/>
                <Route path='/natureCall' exact component={NatureCall}/>
                <Route path='/ausAdv' exact component={AusAdv}/>
                <Route path='/parentTips' exact component={ParentTips}/>
                <Route path='/parentRescure' exact component={ParentRes}/>
                <Route path='/parentFaq' exact component={ParentFaq}/>
                <Route path='/games' exact component={Game}/>
                <Route path='/kidsTips' exact component={KidsTips}/>
                <Route path='/parentCons' exact component={ParentCons}/>
                <Route path='/animalList' exact component={AniamlList}/>
                <Route path='/animalDetail' exact component={Anidetail}/>
                <Route path='/story' exact component={Stroy}/>
                <Route path='/threat' exact component={Threat}/>
                <Route path='/map' exact component={ParentMap}/>
                <Route path='/prediction' exact component={Prediction}/>
                <Route path='/threatCover' exact component={ThreatCover}/>
                <Route path='/gameDes' exact component={GameDes}/>

              </Switch>
            </ScrollToTop>
          </div>
        </HashRouter>
      </div>
    )
  }
}


export default App;
