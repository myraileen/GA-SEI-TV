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
        console.log(response.data);
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
      <div className='main'>
        <h2>{this.state.starProfile.name}</h2>
        <div className='feature'>
          {this.state.starProfile && (
            <section className='image'>
              <img
                className='poster'
                alt={this.state.starProfile.name}
                src={`https://image.tmdb.org/t/p/w500/${this.state.starProfile.profile_path}`}
              />
            </section>
          )}
          <section className='about'>
            <p className='overview'>{this.state.starProfile.biography}</p>
            <p classname='details'>
              Born on {this.state.starProfile.birthday} in{" "}
              {this.state.starProfile.place_of_birth}
            </p>
          </section>
        </div>
        <div className='selections'>
          <h3>Credits</h3>
          <ShowList starId={this.state.starProfile.id} />
        </div>
      </div>
    );
  }
}

export default StarProfile;
