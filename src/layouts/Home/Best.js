import React, { Component } from 'react';

import story1 from '../../img/story1.png'
import story2 from '../../img/story2.png'
import arrow from '../../img/icons/icon-arrow-right.svg'
import logo from '../../img/martal.png'
import foto from '../../img/wood-cutting-hands.jpg'

var Carousel = require('react-responsive-carousel').Carousel;

export default class Best extends Component{
    
    render(){
        var data = this.props.data
        var story = data.primary;
        var links = data.items;

        return(
            <div>
            <div id="qualityAndProducts">
                <div id="qualityContainer" className="submenu tk-acumin-pro">
                    <div>
                        <span className="title">
                            {data.items[0].linktitle[0].text}
                            <img className="arrow" src={arrow} />
                        </span>
                        <span className="subtitle">
                            {data.items[0].subtitle[0].text}
                        </span>
                    </div>
                </div>
                <div id="productsContainer" className="submenu">
                        <div>
                        <span className="title">
                            {data.items[1].linktitle[0].text}
                            <img className="arrow" src={arrow} />
                        </span>
                        <span className="subtitle">
                            {data.items[1].subtitle[0].text}
                        </span>
                        
                    </div>
                </div>
               
            </div>
            <div id="topStory" className="tk-acumin-pro">
                <div id="topStorySubContainer">
                <div className="storyTitle">
                    {story.storytitle[0].text}
                </div>
                    <div className="storyText">
                    {story.storytext[0].text}
                    </div>
                    <span className="storyButton tk-acumin-pro">{story.textbutton[0].text}</span>
                </div>
            </div>

            <div className="imgContainer">
                <Carousel showArrows={true}>
                            <div>
                                <img src={story.backgroundimage.url} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={story.backgroundimage.url} />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src={story.backgroundimage.url} />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img src={story.backgroundimage.url} />
                                <p className="legend">Legend 4</p>
                            </div>
                            <div>
                                <img src={story.backgroundimage.url} />
                                <p className="legend">Legend 5</p>
                            </div>
                            <div>
                                <img src={story.backgroundimage.url} />
                                <p className="legend">Legend 6</p>
                            </div>
                        </Carousel>
            </div>   
        </div>
        );
    }
}