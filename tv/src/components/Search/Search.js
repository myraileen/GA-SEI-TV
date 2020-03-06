import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router";
import Axios from "axios";
import { Link, Route } from "react-router-dom";

import ShowDetails from "../ShowDetails/ShowDetails";
import Stars from "../Stars/Stars";
import ShowList from "../ShowList/ShowList"
// import SearchHook from "./Functions/Functions"

const key = "7fc98cab119f0b52ff0a2ed5e86b06ea";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchType: this.props.showSearch : search by 'show' or by 'star'
      searchType: "show",
      list: [],
      selection: null
    };
  }

  getPopularShows = () => {
    Axios({
      method: "GET",
      //trending list//
      //url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
      //popular list
      url: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en`
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

  // handleClick = item => {
  //   // console.log(item);
  //   this.setState({
  //     selection: { item }
  //   });
    // console.log(this.state.selection);
  // };

  render() {
    return (
      <>
        <Route
          exact
          path='/'
          render={props => <ShowList list={this.state.list} />}
        />
        <Route
          exact
          path='/Show/:id'
          render={props => <ShowDetails item={props.match.params.id} />}
        />
         <Route
          exact
          path='/Actor'
          render={props => <Stars star={this.state.selection} />}
        />
       

        }{/* short circuit evaluation...  */}
        {/* {this.state.selection && <ShowDetails item={this.state.selection} />}
        {this.state.selection && <Stars star={this.state.selection} />} */}
      </>
    );
  }
}

export default Search;
