import React, { Component } from 'react';
import Axios from "axios";

class StarProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    getStarProfile = () => {
        Axios({
          method: "GET",
          //trending list//
          //url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
          //popular list
          url: `https://api.themoviedb.org/3/person/${this.state.starId}/tv_credits?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US`
        })
          .then(response => {
            // console.log(response);
            this.setState({
              list: response.data
            });
          })
          .catch(error => {
            console.log(error);
          });
      };


    render() { 
        return ( <>Star Profile</> );
    }
}
 
export default StarProfile;