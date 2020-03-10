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
    event.preventDefault();

    this.props.searchTerm(event, this.state.value)
        this.forceUpdateHandler();
    // this.setState({value:""});
  };

  forceUpdateHandler() {
    this.forceUpdate()
  }

  handleOptionChange = event => {
    if (event.target.value === "Popular") {
      this.setState({ trendOption: false, popularOption: true })
      this.props.searchTerm(event, 'Popular');
    } else {
      this.setState({ trendOption: true, popularOption: false })
      this.props.searchTerm(event, 'Trending');;
    }
  };

  render() {
    return (
      <div className='searchTools'>
        <form className='search' onSubmit={this.handleSubmit}>
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
