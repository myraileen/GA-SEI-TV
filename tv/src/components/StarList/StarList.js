import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //get cast list by tv show id
  getStars = () => {
    console.log(this.props);
    Axios({
      method: "GET",
      //trending list//
      //url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
      //popular list
      url: `https://api.themoviedb.org/3/tv/${this.props.showId}/credits?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US`
    })
      .then(response => {
        console.log(response);
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

  componentDidUpdate(prevProps) {
    if (prevProps.showId !== this.props.showId) {
      this.getStars();
    }
  }

  handleStarClick = item => {
    console.log("click");
  };

  render() {
    return (
      // <ul>
      //   {this.state.list &&
      //     this.state.list.map((item, index) => (
      //       <li key={index} onClick={() => this.handleStarClick(item)}>
      //         {item.name}
      //       </li>
      //     ))}
      // </ul>

      <>
        {this.state.list &&
          this.state.list.map((item, index) => (
            <Link to={`/Star/${item.id}`} key={index}>
              {item.name} as {item.character}
            </Link>
          ))}
      </>
    );
  }
}

export default Stars;
