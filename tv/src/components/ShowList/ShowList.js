import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getShowsbyStar = () => {
    Axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/person/26723/tv_credits?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US`
    })

      .then(response => {
        console.log(response);
        this.setState({
          list: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };


  render() {
    return (
<>
      
      <ul className={`${this.state.searchType} selections`}>shows by star
        {this.props.list &&
          this.props.list.map((item, index) => (
            <li key={index}>
              <Link to={`/Show/${item.id}`}>{item.name}</Link>
            </li>
          ))}
      </ul></>
    );
  }
}

export default ShowList;
