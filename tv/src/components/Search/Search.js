import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOptionChange = event => {
    console.log("click");
  };

  render() {
    return (
      <>
        <form className='search'>Search
        <div>
            <label>Trending</label>
            <input name='tv'
              type='radio'
              value='Trending'
              onChange={this.handleOptionChange}
            /></div><div>
            <label> Popular</label>
            <input name='tv'
              type='radio'
              value='Popular'
              onChange={this.handleOptionChange}
            /></div>
            {/* <label>Genre</label>
            <input name='tv'
              type='radio'
              value='Genre'
              onChange={this.handleOptionChange}
            /> */}<label>Search Shows:
            <input type='text' value={this.props.searchText} /></label>
        </form>
      </>
    );
  }
}

export default Search;
