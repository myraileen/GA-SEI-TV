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
            <label>Trending</label>
            <input name='tv'
              type='radio'
              value='Trending'
              onChange={this.handleOptionChange}
            />
            <label> Popular</label>
            <input name='tv'
              type='radio'
              value='Popular'
              onChange={this.handleOptionChange}
            />
            <label>Genre</label>
            <input name='tv'
              type='radio'
              value='Genre'
              onChange={this.handleOptionChange}
            />
            <input type='text' value={searchText} ></input>
        </form>
      </>
    );
  }
}

export default Search;
