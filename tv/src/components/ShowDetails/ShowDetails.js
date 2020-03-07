import React, { Component } from "react";
import Axios from "axios";
import StarList from "../StarList/StarList"

class ShowDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: [],
      showPoster: ""
    };
  }

  getShowDetails = () => {
    Axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${this.props.item}?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US&append_to_response=images,videos`
    })
      .then(response => {
        this.setState({
          showDetails: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getShowDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.getShowDetails();
    }
  }

  render() {
    return (
      <>
        <div>Show Details</div>
        {this.state.showDetails && (
          <div>
            <img
              className='poster'
              alt='poster'
              src={`https://image.tmdb.org/t/p/w500/${this.state.showDetails.poster_path}`}
            />

            <StarList showId={this.state.showDetails.id} />
          </div>
        )}
        {/* show poster path -> https://image.tmdb.org/t/p/w500/${posterId} */}
        {/* <div>{this.show}</div> */}
      </>
    );
  }
}

export default ShowDetails;