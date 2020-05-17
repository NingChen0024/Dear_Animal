import React, { Component } from 'react'
import Puzzle from 'react-image-puzzle';
import ReactModal from 'react-modal';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

import {
    PopupboxManager,
    PopupboxContainer
  } from 'react-popupbox';
// This component is used to render puzzle games and select identified pics

// const [show, setShow] = React.useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

class PuzzleComp extends Component{


    openPopupbox() {
        const content = (
          <div>
            <p className='popupfont'>Congratulations! You win!</p>
          </div>
        )
        PopupboxManager.open({ content })
      }
    
    render(){

        let images = {
            1:  require('./images/animal_list/Australasian Bittern_game.jpeg'),
            2:  require('./images/animal_list/Blue Whale_game.jpeg'),
            3:  require('./images/animal_list/Blue Billed Duck_game.jpeg'),
            4:  require('./images/animal_list/Koala_game.jpeg'),
            5:  require('./images/animal_list/Leatherback Turtle_game.jpeg'),
            6:  require('./images/animal_list/Macquarie Perch_game.jpeg'),
            7:  require('./images/animal_list/Plains wanderer_game.jpeg'),
            8:  require('./images/animal_list/Red-tailed Black-Cockatoo_game.jpeg'),
            9:  require('./images/animal_list/Regent Honeyeater_game.jpeg'),
            10:  require('./images/animal_list/Southern Brown Bandicoot_game.jpeg'),
            11:  require('./images/animal_list/Southern Right Whale_game.jpeg'),
            12:  require('./images/animal_list/Squirrel Glider_game.jpeg'),
            13:  require('./images/animal_list/Wallaby_game.jpeg'),
            14:  require('./images/animal_list/Wombat_game.jpeg')
        }

        var aid = this.props.id; // en
        var imageFile = images[aid];
        console.log(aid)
        console.log(typeof(imageFile))

        return(

        //    12 9 8 7 2 1

            <div>
                <Puzzle image= {imageFile} className='gamebackground ml-3' onDone={this.openPopupbox}/>
                <PopupboxContainer />
               
            </div>
        )
    }
}

export default PuzzleComp