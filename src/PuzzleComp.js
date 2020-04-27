import { render } from 'react-dom';
import React, { Component } from 'react'
import Puzzle from 'react-image-puzzle';

// This component is used to render puzzle games and select identified pics

class PuzzleComp extends Component{
    render(){
        return(
            <Puzzle image={ require('./images/puzzleImg.jpg')} className='gamebackground' />
        )
    }
}

export default PuzzleComp