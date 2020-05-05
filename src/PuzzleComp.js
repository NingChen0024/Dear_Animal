import React, { Component } from 'react'
import Puzzle from 'react-image-puzzle';
import ReactModal from 'react-modal';

// This component is used to render puzzle games and select identified pics



class PuzzleComp extends Component{

    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
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
                    <Puzzle image= {imageFile} className='gamebackground' onDone={this.handleOpenModal}/>
                    <ReactModal 

                        style={{
                            overlay: {
                                position: 'fixed',
                                top: 300,
                                left: 500,
                                right: 500,
                                bottom: 200,
                                // backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                backgroundColor:'rgb(255, 217, 179)'
                            },
                            content: {
                                position: 'absolute',
                                top: '40px',
                                left: '40px',
                                right: '40px',
                                bottom: '40px',
                                border: '1px solid #ccc',
                                background: '#fff',
                                overflow: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                borderRadius: '4px',
                                outline: 'none',
                                padding: '20px'
                            }
                        }}

                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                        >
                        <p className='popupfont mb-3 pb-3'>Congats! You Win!</p>
                        <button type="button" onClick={this.handleCloseModal} className='btn btn-warning popupbutton'>Back</button>
                    </ReactModal>
                </div>
            </div>
        )
    }
}

export default PuzzleComp