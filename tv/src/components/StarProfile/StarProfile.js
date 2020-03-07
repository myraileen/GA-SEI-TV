import React, { Component } from "react";
import Axios from "axios";
import ShowList from "../ShowList/ShowList";

class StarProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starProfile: [],
      starImage: ""
    };
  }

  getStarProfile = () => {
    Axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/person/${this.props.item}?api_key=7fc98cab119f0b52ff0a2ed5e86b06ea&language=en-US&append_to_response=images`
    })
      .then(response => {
        this.setState({
          starProfile: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getStarProfile();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.getStarProfile();
    }
  }

  render() {
    return (
      <>
        <section className='feature'>
          <h2>{this.state.starProfile.name}</h2>
          {this.state.starProfile && (
            <img
              className='poster'
              alt={this.state.starProfile.name}
              src={`https://image.tmdb.org/t/p/w500/${this.state.starProfile.profile_path}`}
            />
          )}
        </section>
        <section className='selections'>
          <ShowList starId={this.state.starProfile.id} />
        </section>
      </>
    );
  }
}

export default StarProfile;
