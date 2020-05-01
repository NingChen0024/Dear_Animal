import { render } from 'react-dom';
import React, { Component } from 'react'
import Puzzle from 'react-image-puzzle';
import ReactDom from 'react-dom';
import Popup from 'react-popup';


// This component is used to render puzzle games and select identified pics



class PuzzleComp extends Component{


    
    render(){

        let mySpecialPopup = Popup.register({
            title: 'I am special',
            content: 'Since I am special you might need me again later. Save me!',
            buttons: {
                left: ['cancel'],
                right: ['ok']
            }
        });

        Popup.queue(mySpecialPopup);
        
        return(
            <Puzzle image={ require('./images/puzzleImg.jpg')} className='gamebackground' onDone={() => Popup.alert('I am alert, nice to meet you')}/>
        )
    }
}

export default PuzzleComp