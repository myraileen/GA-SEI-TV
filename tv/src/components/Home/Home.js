import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const key = "7fc98cab119f0b52ff0a2ed5e86b06ea";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      searchString: null
    };
  }

  getTrendingShows = () => {
    Axios({
      method: "GET",
      //trending shows//
      url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
    })
      .then(response => {
        this.setState({
          list: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getPopularShows = () => {
    Axios({
      method: "GET",
      //popular shows//
      url: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en`
    })
      .then(response => {
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

  forceUpdateHandler() {
    this.forceUpdate();
  }

  retrieveSearchTerm = (event, searchTerm) => {
    console.log(searchTerm);

    if (searchTerm === "Trending") {
      this.getTrendingShows();
    } else if (searchTerm === "Popular") {
      this.getPopularShows();
    } else {
      this.setState({
        searchString: searchTerm
      });

      Axios({
        method: "GET",
        //search//
        url: `https://api.themoviedb.org/3/search/tv?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US&query=${searchTerm}&page=1&append_to_response=images`
      })
        .then(response => {
          this.setState({
            list: response.data.results
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className='main'>
        <h2>Find Shows</h2>
        <div className='feature'>
          <Search searchTerm={this.retrieveSearchTerm} />
        </div>
        <div className='selections'>
          <h3>Results</h3>
          <ul>
            {this.state.list &&
              this.state.list.map((show, index) => (
                <li key={index}>
                  <Link to={`/Show/${show.id}`} key={index}>
                    <img
                      className='poster'
                      alt={show.name}
                      src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                    />
                    {show.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
