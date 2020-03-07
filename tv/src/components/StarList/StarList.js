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
      <ul>
        {this.state.list &&
          this.state.list.map((item, index) => (
            <li>
              <img
                className='poster'
                alt={item.name}
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              />
              <Link to={`/Star/${item.id}`} key={index}>
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default Stars;
