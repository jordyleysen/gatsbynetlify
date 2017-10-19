//import "../../css/video.css"; // or import scss
import React, { Component } from 'react';
import { Player, ControlBar, VolumeMenuButton } from 'video-react';


export default class Video extends Component {
    render() {
      return (
        <div id="videocontainer">
            <Player autoPlay={true} loop={true} muted={true}>
                <source src={this.props.url}/>
                <ControlBar autoHide={true} disableDefaultControls={true}>
                    <VolumeMenuButton />
                </ControlBar>
            </Player>
        </div>
      );
    }
  }