import React, { Component } from 'react';
//import '../../css/Header.css';
import story1 from '../img/story1.png'
import story2 from '../img/story2.png'
import arrow from '../img/arrow.png'
import logo from '../img/martal.png'
import foto from '../img/martal-zagerij.jpg'
//import "../../css/Products.css"
import Producten from '../layouts/products/Producten.js'
import ProductenContainer from '../layouts/products/ProductenContainer.js'
import Footer from "../Footer.js"
//import '../../css/Footer.css';
import TransitionGroup from 'react-addons-transition-group';
import AnimateHeight from 'react-animate-height';

import {connect} from "react-redux";
import {fetchProductPage, fetchProductPageProducts} from "../actions/productPageActions.js"

var productenData = {
    'hardhout': [
        {key: 1, name: "European Oak0"},
        {key: 2, name: "European Oak1"},
        {key: 3, name: "European Oak"},
        {key: 4, name: "European Oak"},
        {key: 5, name: "European Oak"},
        {key: 6, name: "European Oak"},
        {key: 7, name: "European Oak"}
      ],
    'massievePanelen' :  [
        {key: 1, name: "European Oak1"},
        {key: 2, name: "European Oak2"},
        {key: 3, name: "European Oak1"},
        {key: 4, name: "European Oak1"},
        {key: 5, name: "European Oak1"},
        {key: 6, name: "European Oak1"},
        {key: 7, name: "European Oak1"}
      ]
  };

class ProductPage extends Component{

    
    constructor(props) {
        
        super(props)
        
        this.state = {shouldShowBox:true, currentWood: "hardhout", data: productenData["hardhout"]}
        this.handleClick = this.handleClick.bind(this);
      }

      componentWillMount(){
        this.props.dispatch(fetchProductPage());
        this.props.dispatch(fetchProductPageProducts());
      }

      handleClick(event){
          console.log("click");
          this.setState({shouldShowBox:true, currentWood: event.currentTarget.dataset.type, data:productenData[event.currentTarget.dataset.type]});
        }


      showProducts(){
          console.log('showproducts');
        this.setState({
            shouldShowBox: true,
            currentWood: this.state.currentWood,
            data: this.state.data
          });
          console.log(this.state);
      }  

      toggleBox = () => {
          console.log(!this.state.shouldShowBox);
        this.setState({
            shouldShowBox: !this.state.shouldShowBox,
            currentWood: this.state.currentWood,
            data: this.state.data
          });
          console.log(this.state.shouldShowBox);
      };

    renderProdcuts() {
		return this.state.data.map((item) => {
			return (
				<Producten ref={c => this.container = c} type={item.name}/>
			)
        });
    }

    render(){
        var data = productenData[this.state.currentWood];
        var shouldShowBox = this.state.shouldShowBox;
        return(
                <div id="body">
                    <div id="productHeaderImage">
                    </div>
                    <div id="houtMenu">
                        <ul>
                            <li><div onClick={this.handleClick} data-type="hardhout" className={this.state.currentWood == "hardhout" ? "itemContainer itemActive":"itemContainer"}><img src={story1}/><div>Hardhout</div></div></li>
                            <li><div onClick={this.handleClick} data-type="massievePanelen" className={this.state.currentWood == "massievePanelen" ? "itemContainer itemActive":"itemContainer"}><img src={story1}/><div>Massieve panelen</div></div></li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                        <TransitionGroup component="span">
                           {shouldShowBox && <ProductenContainer showProducts={this.showProducts.bind(this)}  data={data}/>}
                        </TransitionGroup>
                    <Footer/>
                </div>
        );       
    }
}

export default connect((store)=>{return {
    productPage: store.productpage.data,
    products: store.productpage.productsShort,
    productPageFetched: store.productpage.fetchedData,
    productsFetched: store.productpage.fetchedproducts
  };})(ProductPage)