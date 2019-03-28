import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Slide from './slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';


class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render () {
        return (
            <div className="slider">
            <Slide />
            
            
            <LeftArrow />
            <RightArrow />

            </div>
        );
    }
    
    
}

export default Slider;