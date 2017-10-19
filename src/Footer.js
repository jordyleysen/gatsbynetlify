import React, { Component } from 'react';

import story1 from './img/story1.png'
import story2 from './img/story2.png'
import arrow from './img/arrow.png'
import logo from './img/logo_martal.svg'
import logofsc from './img/icons/logo-fsc.png'
import foto from './img/2.png'

class Footer extends Component {
    render() {
      return (
        <footer>
            <div className="footerMenuContainer">
                <div className="menuLeft">
                    <div id="logoContainer">
                        <img className="logo" src={logo} alt="Martal logo" />
                    </div>
                    <div className="menuContainer">
                        <ul className="menu">
                            <li className="menuItem menuActive">Products</li>
                            <li className="menuItem" >Quality</li>
                            <li className="menuItem" >About</li>
                            <li className="menuItem" >Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="menuRight">
                    <img src={logofsc}/>
                </div>
            </div>
            <div className="copyright">
                <span>Copyrights 2017</span>
            </div>
        </footer>
      );
    }
  }
  
  export default Footer;