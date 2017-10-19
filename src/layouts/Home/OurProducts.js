import React, { Component } from 'react';

import overview from '../../img/icons/icon-overview.svg'
import story2 from '../../img/story2.png'
import arrow from '../../img/icons/icon-arrow-right.svg'
import logo from '../../img/martal.png'
import foto from '../../img/2.png'
import hardwood from '../../img/hardwood.jpg'
import massive from '../../img/massive-panels.jpg'


  

export default class Stories extends Component{
    
    render(){
        console.log(this.props.data)
        var data = this.props.data;
        var products = this.props.data.items

        var bg = data.primary.backgroundimage.url;
        var divStyle = {
            backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('+bg+')'
          };

        return(
            <section id="products" style={divStyle}>
                <div className="sectionTitle">
                    {data.primary.our_products[0].text}
                </div>
                <div className="sectionDescriptionContainer">
                    <div className="horizontalLine">

                    </div>
                    <div className="sectionDescription">
                    {data.primary.productstext[0].text}
                    
                    </div>
                    <div className="allProductsContainer">
                        <img src={overview}/>
                        <div>
                            {data.primary.viewallproducts[0].text} 
                        </div>
                        <img className="arrow" src={arrow}/>
                    </div>
                </div>
                <div className="productimages">
                    <div id="hardwoordContainer" className="productContainer">
                        <img src={products[0].productimage.url}/>
                        <div>{products[0].producttitle[0].text}</div>   
                    </div>
                    <div id="massiveContainer" className="productContainer">
                        <img src={products[1].productimage.url}/>
                        <div>{products[1].producttitle[0].text}</div>
                    </div>
                </div>
                <div className="btnViewAllProducts">
                {data.primary.viewallourproducts[0].text} 
                </div>
            </section>
        );
    }
}