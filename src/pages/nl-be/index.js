import React, { Component } from 'react';
import Video from '../../layouts/Home/Video.js'
import Home from '../../layouts/Home/Home.js'

import {connect} from "react-redux";
import {fetchHome} from "../../actions/homePageActions.js"

class HomeIndex extends Component {
  constructor(props) {
    // Required to call original constructor
    super(props);
    console.log(props)
    // Props are now accessible from here
}

  componentWillMount(){
    this.props.dispatch(fetchHome())
  }

  changeLanguage(language){
    console.log(this.props);
    this.props.changeLanguage(language);
  }
  
  render() {
    const {homepage, homeFetched} = this.props;
    if(!homeFetched){
      return (<div></div>);
    }
    return (
          <div id="body">
            <Home data={homepage}/>
          </div>
    );
  }
}

export default connect((store)=>{return {
  homepage: store.homepage.data,
  homeFetched: store.homepage.fetched
};})(HomeIndex)