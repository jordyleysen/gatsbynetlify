import React, { Component } from 'react';

import story1 from '../../img/story1.png'
import story2 from '../../img/story2.png'
import arrow from '../../img/icons/icon-arrow-right-red.svg'
import logo from '../../img/martal.png'
import foto from '../../img/2.png'

var Carousel = require('react-responsive-carousel').Carousel;

export default class Stories extends Component{
    render(){
        console.log(this.props.data)
        var data = this.props.data.primary;
        var pictures = this.props.data.items

        console.log(data);
        var images = [];
        for(var i = 0;i<pictures.length;i++){
            images.push(<div key={i} ><img src={pictures[i].img_slider.url} /><p className="legend">foto1</p></div>)
        }
        
        return(
            <section id="about">
            <div className="aboutContainer">
                <div className="AboutTextContainer">
                    <div className="horizontalLine"></div>
                    <div className="title">About Us</div>
                    <div className="text">The Company was set up in September 1964. The aim of Martal Hardwoods was to buy and sell French Oak.
                        <br/><br/>The added value was kilning and regrading as we acquired a lot of experience through the years. 1972 was the beginning of our expansion in American Hardwoods. In 1980 the management decided to expand to other European countries.
                    </div>
                    <div className="storyLink">
                        Discover our story <img className="arrow" src={arrow}/>
                    </div>
                </div>
                <div className="overflow">
                    <Carousel showArrows={true}>
                    {images}
                    </Carousel>
                </div>
            </div>
        </section>
        );
    }
}