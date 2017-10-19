
import React, { Component } from 'react';

import story1 from '../../img/story1.png'
import story2 from '../../img/story2.png'
import arrow from '../../img/arrow.png'
import logo from '../../img/martal.png'
import foto from '../../img/2.png'
//import "../../css/Products.css"
import TransitionGroup from 'react-addons-transition-group';
import {TweenMax, Power2, TimelineLite} from "gsap";
import Producten from './Producten.js'


export default class ProductenContainer extends Component{
    constructor(props) {
        super(props);
        var test = this.props.showProducts;
      }
      

      componentWillAppear(callback){
        const el = this.container;
        console.log(el.clientHeight);
        TweenMax.fromTo(el, 0.5, {opacity: 0}, {opacity: 1,onComplete: callback});
      }
      

      componentWillEnter (callback) {
        console.log("componentWillEnter");
      }

      componentDidEnter (callback){
    
      }
    
      componentWillLeave (callback) {
        const el = this.container;
        TweenMax.fromTo(el, 0.5, {opacity: 1}, {opacity: 0, onComplete: callback});
      }

      componentWillUnmount (callback) {

      }


      componentWillUpdate(callback){

   }

      componentDidUpdate(callback){
        console.log("didupdate")
        const el = this.container;
        console.log(el.clientHeight);
        TweenMax.fromTo(el, 1, {opacity: 0}, {opacity: 1, onComplete: function(){}});   
  }

      componentDidLeave (callback) {
        console.log("componentDidleave");
        this.props.showProducts()
      }
    

    render(){
      console.log(this.props.data)
        return(
          <div  id="producten">
        
          <div ref={c => this.container = c} id="test">
          {
            this.props.data.map(function(product){
                    return <Producten key={product.uid} type={product.data.title[0].text} img={product.data.product_image.url}/>
                })
            }   
          </div>
        </div>
        );
    }
}
