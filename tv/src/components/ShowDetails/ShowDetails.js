import React, { Component } from "react";
import Axios from "axios";

class ShowDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: []
    };
  }

  getShowDetails = () => {
    Axios({
      method: "GET",
      //trending list//
      //url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
      //popular list
      url: `https://api.themoviedb.org/3/tv/${this.props.item}?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US&append_to_response=images,videos`
    })
      .then(response => {
        console.log(response);
        this.setState({
          showDetails: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getShowDetails();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.item !== this.props.item ) {
        this.getShowDetails()
    }
  }

  render() {
    // showId = () => this.props.item.id

    // console.log(this.state.show)

    // const show = this.props.item;
    // console.log(show)

    // this.setState=({
    //     show: this.props.item
    // })

    return (
      <>
        <div>Show Details (but this shouldn't show on inital load?)</div>
        {/* <div>{this.show}</div> */}
      </>
    );
  }
}

export default ShowDetails;
