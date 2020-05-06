import React, { Component } from 'react'
import Puzzle from 'react-image-puzzle';
import ReactModal from 'react-modal';

import Popup from "reactjs-popup";

// This component is used to render puzzle games and select identified pics



class PuzzleComp extends Component{

    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      openModal() {
        this.setState({ open: true });
      }
      closeModal() {
        this.setState({ open: false });
      }
    
    render(){
        
        let images = {
            1:  require('./images/animal_list/Australasian Bittern_icon.jpeg'),
            2:  require('./images/animal_list/Blue Whale_icon.jpeg'),
            3:  require('./images/animal_list/Blue Billed Duck_icon.jpeg'),
            4:  require('./images/animal_list/Koala_icon.jpeg'),
            5:  require('./images/animal_list/Leatherback Turtle_icon.jpeg'),
            6:  require('./images/animal_list/Macquarie Perch_icon.jpeg'),
            7:  require('./images/animal_list/Plains wanderer_icon.jpeg'),
            8:  require('./images/animal_list/Red-tailed Black-Cockatoo_icon.jpeg'),
            9:  require('./images/animal_list/Regent Honeyeater_icon.jpeg'),
            10:  require('./images/animal_list/Southern Brown Bandicoot_icon.jpeg'),
            11:  require('./images/animal_list/Southern Right Whale_icon.jpeg'),
            12:  require('./images/animal_list/Squirrel Glider_icon.jpeg'),
            14:  require('./images/animal_list/Wombat_icon.jpeg')
        }

        var aid = this.props.id; // en
        var imageFile = images[aid];
        console.log(aid)
        console.log(typeof(imageFile))

        return(

        //    12 9 8 7 2 1

            <div>
                <div>
                    <Puzzle image= {imageFile} className='gamebackground' onDone={this.openModal}/>
                    <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                    >
                        <div className="modal">
                            <a className="close" onClick={this.closeModal}>
                            &times;
                            </a>
                            <p className='popupfont'>Congrets! You Win!</p>
                        </div>
                    </Popup>
                </div>
            </div>
        )
    }
}

export default PuzzleComp