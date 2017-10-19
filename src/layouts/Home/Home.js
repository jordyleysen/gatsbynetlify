import React, { Component } from 'react';
//import '../../css/Home.css';
//import '../../css/carousel.css';
import foto from '../../img/2.png'
import story1 from '../../img/story1.png'
import Video from './Video.js'
import story2 from '../../img/story2.png'
import arrow from '../../img/arrow.png'
import logo from '../../img/martal.png'
import Best from './Best.js';
import Quality from './Quality.js';
import Stories from './Stories.js';
import OurProducts from './OurProducts.js';
import AboutUs from './AboutUs.js';
import Footer from "../../Footer.js"
//import '../../css/Footer.css';

export default class Home extends Component {
  render() {
    var data = this.props.data;
    var video = data.video.url
    var best = data.body[0]
    var quality = data.body[1]
    var stories = data.body[1]
    var products = data.body[2]
    var about = data.body[3]

    //var video = data.video.url
    return (
        <div>
          <Video url={video}/>
            <Best data={best}/>
            <Quality data={quality}/>
            <Stories data={stories}/>
            <OurProducts data={products}/>
            <AboutUs data={about}/>
            <Footer/>
        </div>
    );
  }
}