import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", trendOption: true, popularOption: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    //   console.log(this.state.value)
    event.preventDefault();
    //   console.log('submit')

    this.props.searchTerm(event, this.state);
  };

  handleOptionChange = event => {
    console.log(event.target.value);
    if (event.target.value === "Popular") {
      this.setState({ trendOption: false, popularOption: true });
    } else {
      this.setState({ trendOption: true, popularOption: false });
    }
  };

  render() {
    console.log(this.state.value);
    return (
      <div className='searchTools'>
        <form className='search' onSubmit={this.handleSubmit}>
          {/* <label>Genre</label>
            <input name='tv'
              type='radio'
              value='Genre'
              onChange={this.handleOptionChange}
            /> */}
          <div>
            <label>
              Search Shows:
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
              />
                <input type='submit' className='button' value='Submit' />
            </label>
          </div>
        </form>
        <div className='options'>
          <button
            name='tv'
            type='radio'
            value='Trending'
            checked
            onClick={this.handleOptionChange}
          >
            Trending
          </button>
          <label></label>
          <button
            name='tv'
            type='radio'
            value='Popular'
            onClick={this.handleOptionChange}
          >
            Popular
          </button>
          <label></label>
          </div>
      </div>
    );
  }
}

export default Search;
