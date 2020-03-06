import React, { Component } from "react";
import Axios from "axios";

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getStars = () => {
    Axios({
      method: "GET",
      //trending list//
      //url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
      //popular list
      url: `https://api.themoviedb.org/3/tv/44217/credits?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US`
    })
      .then(response => {
        // console.log(response);
        this.setState({
          list: response.data.cast
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getStars();
  }

  handleStarClick = (starId) => {
      console.log(starId)
    this.setState({
      star: starId
    });
  };

  render() {
    return (
      <ul>
        {this.state.list &&
          this.state.list.map((item, index) => (
            <li key={index} onClick={() => this.handleStarClick(item)}>
              {item.name}
            </li>
          ))}
      </ul>
    );
  }
}

export default Stars;
