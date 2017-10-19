import React, { Component } from 'react';

import story1 from '../../img/story1.png'
import story2 from '../../img/story2.png'
import arrow from '../../img/icons/icon-arrow-right-red.svg'
import logo from '../../img/icons/icon-quality.png'
export default class Quality extends Component{
    render(){
        var data = this.props.data.primary;
        console.log(data)
        return(
            
            <div id="QualityWork">
                <div className="qualityLogoContainer">
                    <img className="qualityLogo" src={logo}/>
                </div>
                <div className="title tk-acumin-pro">
                    {data.qualitytitle[0].text}
                </div>
                <div className="subText">
                {data.qualitytext[0].text}<br/>
                {data.qualitytext[1].text}
                </div>
                <div className="links">
                    <div>
                        <div className="left">{data.titlelinkhow[0].text} <span><img src={arrow}/></span></div>
                        <div className="right">{data.titleaboutus[0].text}<span><img src={arrow}/></span></div>
                    </div>
                </div>
            </div>
        );}
        }