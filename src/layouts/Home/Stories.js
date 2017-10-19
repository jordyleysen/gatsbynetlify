import React, { Component } from 'react';

import story1 from '../../img/story1.png'
import story2 from '../../img/story2.png'
import arrow from '../../img/arrow.png'
import logo from '../../img/martal.png'
import foto from '../../img/2.png'
import Video from './Video.js'

export default class Stories extends Component{
    render(){
        var data = this.props.data.items;
        console.log(data)
        var mappeditems = [];
        for(var i = 0;i<data.length;i++){
            var item = data[i];
            console.log(item);
            if(i%2==0){
            mappeditems.push(
                <div key={item.title[0].text} className="story story1">
                    <div className="imageContainer">
                    <Video url={"https://prismic-io.s3.amazonaws.com/martal-test%2Fe76dbb3e-372c-46b7-b013-8b8ac8a09cee_beelden+website_2b.mp4"}/>
                        <div className="imageDescription tk-acumin-pro">
                           {item.videotext[0].text}
                        </div>
                    </div>
                    <div className="storyTextContainer">
                        <div className="storyTitle tk-acumin-pro">
                            {item.title[0].text}
                        </div>
                        <div className="storyText tk-acumin-pro">
                            {item.text[0].text}
                        </div>
                    </div>
                </div>)}
                else{
                    mappeditems.push(
                        <div key={item.title[0].text} className="story story2">
                            <div className="storyTextContainer">
                                <div className="storyTitle tk-acumin-pro">
                                    {item.title[0].text}
                                </div>
                                <div className="storyText tk-acumin-pro">
                                    {item.text[0].text}</div>
                            </div>
                            <div className="imageContainer">
                                <Video url={"https://prismic-io.s3.amazonaws.com/martal-test%2F6f1574ec-513c-4dd0-8bb3-9dcce8ec658a_martal_short_1b.mp4"}/>
                                <div className="imageDescriptionRight tk-acumin-pro">
                                    {item.videotext[0].text}
                                </div>
                            </div>
                        </div>)
                }
        }

        return(
            <section id="stories">
                {mappeditems}
                {/*<div className="story">
                    <div className="imageContainer">
                        <img src={story2}/>
                        <div className="imageDescription tk-acumin-pro">
                            Superior quality wood deserves a superior quality label.
                        </div>
                    </div>
                    <div className="storyTextContainer">
                        <div className="storyTitle tk-acumin-pro">
                            MARTAL GRADE
                        </div>
                        <div className="storyText tk-acumin-pro">
                            The very best hardwoods that are selected Worldwide and graded to the famous Martal grade. To meet the demands of the European “quality” buyers.
                        </div>
                    </div>
                </div>
                 <div className="story">
                    <div className="storyTextContainer">
                        <div className="storyTitle tk-acumin-pro">
                            QUALITY CONTROL
                        </div>
                        <div className="storyText tk-acumin-pro">
                            Every single board gets a severe inspection according to the Martal Standards. Martal grade is a symbol in Europe</div>
                    </div>
                    <div className="imageContainer">
                        <img src={story1}/>
                        <div className="imageDescriptionRight tk-acumin-pro">
                            Hand selected wood in A and B Quality. 
                        </div>
                    </div>
                </div>   */}       
            </section>
        );
    }
}