import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { connect } from "react-redux"

import logo from '../img/logo_martal.svg'
import menu from '../img/menuIcon.png'
import close from '../img/close.png'
var TextSelect = require('react-textselect');
import { CSSTransition, transit } from "react-css-transition";

import {fetchNav} from "../actions/navigationActions.js"

import "./carousel.css"
import "./Footer.css"
import "./Header.css"
import "./Home.css"
import "./Products.css"
import "./Select.css"
import "./Video.css"

var languages = {
  'nl': 0,
  'en': 1,
  'fr': 2
};

var languagesPrismic = {
  0 : 'nl-be',
  1 : 'en-gb',
  2 : 'fr-be'
};

class DefaultLayout extends React.Component {
  constructor(props) {
    // Required to call original constructor
    super(props);
    // Props are now accessible from here
    var v = props.activePage;
    var data = props.menu
    console.log(this.props.location.pathname);
    var selectlanguage = languages[this.props.location.pathname.substr(1,2)]
    if (this.props.location.pathname != '/en-gb' || this.props.location.pathname != '/nl-be'){
      selectlanguage = 0
    }
    this.state = {
      selectedOption: selectlanguage,
      active: false
    }
    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState({active: !this.state.active});
}

componentWillMount(){
  console.log('location', languagesPrismic[languages[this.props.location.pathname.substr(1,2)]])
  
  this.props.dispatch(fetchNav(languagesPrismic[languages[this.props.location.pathname.substr(1,2)]]))
}

changeLanguage(language){
this.props.dispatch(fetchNav(languagesPrismic[language]))
}

onSelectChange(e){
  this.setState({...this.state,selectedOption:e.target.value});
  this.props.dispatch(fetchNav(languagesPrismic[e.target.value]))
  this.props.history.push('/');
  this.props.history.push(languagesPrismic[e.target.value]);
}

  render() {
    console.log('props', this.props)
    const {data, navFetched} = this.props;
    if(navFetched){
    var mappeditems = {};
    var mappedMobileItems = {};
    var languageLink = languagesPrismic[languages[this.props.location.pathname.substr(1,2)]];
    if(this.props.location.pathname.substr(1,2)==''){
      languageLink = 'nl-be';
    }
    mappeditems = data.results.map(item =>
      <li key={item.label[0].text} className="menuItem"><Link to={languageLink+"/product"} className={(this.props.activePage === '/'+item.label[0].text) ? 'active' :''}>{item.label[0].text}</Link></li>
    )

    mappedMobileItems = data.results.map(item =>
      <Link to={languageLink+"/product"} className={(this.props.activePage === '/'+item.label[0].text) ? 'active mobileMenuItem' :'mobileMenuItem'}>{item.label[0].text}<div key={item.label[0].text} className=""></div></Link>
    )
  
   }
    if(!navFetched){
     return <div></div> 
    }    
    return (
        <div>
        <header>
          <div id="menuLeft">
            <div id="logoContainer">
            <Link to="/"><img className="logo" src={logo} alt="Martal logo" /></Link>
            </div>
            <div className="rectangle"></div>
            <div id="menuContainer">
              <ul id="menu" className="tk-acumin-pro">
                {mappeditems}
              </ul>
            </div>
          </div>
          <div id="menuRight">
            <div id="number">
              +32 (0) 15 20 41 16
            </div>
            <div className="rectangle"></div>
            <div id="Language">
            <TextSelect
              options={['NL', 'EN', 'FR']}
              active={this.state.selectedOption}
              onChange={this.onSelectChange.bind(this)} />
            </div>
            <img onClick={this.handleClick} className="menuIcon" src={this.state.active ? close : menu}></img>
          </div>
          <div className="clear"></div>
          <div onClick={this.handleClick} className={this.state.active ? 'mobileMenu' : 'mobileMenu hide'}>
          {mappedMobileItems}          
          </div>
        </header>
        {this.props.children()}
        </div>
      );
    }
      
}

export default connect((store)=>{return {
  data: store.navigation.data,
  navFetched: store.navigation.fetched
};})(DefaultLayout)