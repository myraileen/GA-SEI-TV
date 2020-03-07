import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const key = "7fc98cab119f0b52ff0a2ed5e86b06ea";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchType: this.props.showSearch : search by 'show' or by 'star'
      searchType: "show",
      list: null,
      selection: null
    };
  }

  getPopularShows = () => {
    Axios({
      method: "GET",
      //trending list//
      url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
      //popular list
    //   url: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en`
    })
      .then(response => {
        // console.log(response.data.results);
        this.setState({
          list: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getPopularShows();
  }

  render() {
    return (
      <>
        {this.state.list &&
          this.state.list.map((show, index) => (
            <Link to={`/Show/${show.id}`} key={index}>{show.name}</Link>
          ))}
      </>
    );
  }
}

export default Home;
