
import React, { Component } from 'react';

import story1 from '../../img/story1.png'
import story2 from '../../img/story2.png'
import arrow from '../../img/arrow.png'
import logo from '../../img/martal.png'
import foto from '../../img/2.png'
//import "../../css/Products.css"
import TransitionGroup from 'react-addons-transition-group';
import {TweenMax, Power2, TimelineLite} from "gsap";


export default class Producten extends Component{
    constructor(props) {
        super(props);
      }
    

    render(){
        var backgroundimage = {
            backgroundImage: 'url('+this.props.img+')'
        }
        return(
                    <div ref={c => this.container = c} className="product" style={backgroundimage}>
                        <div>{this.props.type}</div>
                    </div>
        );
    }
}
