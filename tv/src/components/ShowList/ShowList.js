import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //get show list by star id
  getShows = () => {
    Axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/person/${this.props.starId}/tv_credits?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US`
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          list: response.data.cast
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getShows();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.starId !== this.props.starId) {
      this.getShows();
    }
  }

  render() {
    return (

      <>
        {this.state.list &&
          this.state.list.map((item, index) => (
            <Link to={`/Show/${item.id}`} key={index}>
              {item.name}
            </Link>
          ))}
      </>
    );
  }
}

export default ShowList;
