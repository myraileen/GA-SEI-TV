import React, { Component } from "react";

import { Link, Route } from "react-router-dom";

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className={`${this.state.searchType} selections`}>
        {this.props.list &&
          this.props.list.map((item, index) => (
            <li key={index}>
              <Link to={`/Show/${item.id}`}>{item.name}</Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default ShowList;
