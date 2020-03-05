import React, { Component } from "react";
import Axios from "axios";

import ShowDetails from "../ShowDetails/ShowDetails";

const key = "7fc98cab119f0b52ff0a2ed5e86b06ea";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchType: this.props.showSearch : search by 'show' or by 'star'
      searchType: "show",
      list: [],
      selection: ""
    };
  }

  getPopularShows = () => {
    Axios({
      method: "GET",
      //trending list//
      //url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
      //popular list
      url: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`
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

  handleClick(item) {
    console.log(item);
    this.setState({
      selection: item
    });
    console.log(this.state.item);
  }

  render() {
    //get list of popular shows
    return (
      <>
        <ul
          style={{ listStyleType: "none" }}
          className={`${this.state.searchType} selections`}
        >
          {this.state.list &&
            this.state.list.map((item, index) => (
              <li key={index} onClick={() => this.handleClick(item)}>
                {item.name}
              </li>
            ))}
        </ul>
        <ShowDetails />
      </>
    );
  }
}

export default Search;
