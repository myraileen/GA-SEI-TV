//program dependencies
import React, { Component } from "react";

//lib dependencies
import "./App.css";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";

//app component will be the 'conductor' for all other components in the app.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Home />
        <Search starId={this.state.actor} />
      </div>
    );
  }
}

export default App;
