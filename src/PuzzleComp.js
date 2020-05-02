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
        
        return(

            <div>
                <div>
                    <Puzzle image={ require('./images/puzzleImg.jpg')} className='gamebackground' onDone={this.handleOpenModal}/>
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