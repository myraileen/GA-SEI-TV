import React, { Component } from "react";
import Axios from "axios";
import StarList from "../StarList/StarList";

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
      <div className='main'>
        <h2>{this.state.showDetails.name}</h2>
        <div className='feature'>
          {this.state.showDetails && (
            <section className='image'>
              <img
                className='poster'
                alt={this.state.showDetails.name}
                src={`https://image.tmdb.org/t/p/w500/${this.state.showDetails.poster_path}`}
              />
            </section>
          )}
          <section className='about'>
            <p className='details'>
              {this.state.showDetails.number_of_episodes} episodes over{" "}
              {this.state.showDetails.number_of_seasons} seasons
            </p>
            <p className='overview'>{this.state.showDetails.overview}</p>
            <p className='popularity'>
              {this.state.showDetails.popularity} popularity rating
            </p>
          </section>
        </div>
        <div className='selections'>
          <h3>Cast</h3>
          <StarList showId={this.state.showDetails.id} />
        </div>
      </div>
    );
  }
}

export default ShowDetails;
