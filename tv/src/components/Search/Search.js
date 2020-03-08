import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOptionChange = (event) => {
    console.log('click')
  }

  render() {
    return (
      <>
        <form className='search'>Search
        <div className="radio">
          <label>
            <input type="radio" value="Trending" checked={true} />
            Trending
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Popular" />
            Popular
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Genre" />
            Genre
          </label>
        </div>
        </form>
      </>
    );
  }
}

export default Search;
