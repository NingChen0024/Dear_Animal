import React, { Component } from 'react'
import PuzzleComp from './PuzzleComp'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
// this component display several games to kids


class Anidetail extends Component{
    render(){

        const{data} = this.props.location
        return(
            <dev >
                <p>{data.aniname}</p>
            </dev>

      )}
    }
        




    export default Anidetail