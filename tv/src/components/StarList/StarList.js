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
    Axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${this.props.showId}/credits?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US`
    })
      .then(response => {
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
            <li key={index}>
              <Link to={`/Star/${item.id}`} ><img
                className='poster'
                alt='poster'
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              />
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default Stars;