//program dependencies
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import ShowDetails from "./components/ShowDetails/ShowDetails";
import StarProfile from "./components/StarProfile/StarProfile";

//lib dependencies
import "./App.css";
import Home from "./components/Home/Home";

//app component will be the 'conductor' for all other components in the app.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Link to={`/`} >
              <h1 className='header'>tv clicker</h1>
            </Link>
        <Route
          exact
          path='/'
          render={props => <Home/>}
        />
        {/* clicking a show cascades to two components (passing it's ID): ShowDetails... and Stars(get list of cast) */}
        <Route
          exact
          path='/Show/:id'
          render={props => <ShowDetails item={props.match.params.id} />}
        />
        
        {/* clicking a Star cascades to two components, (passing their ID) StarProfile... and ShowList */}
        <Route
          exact
          path='/Star/:id'
          render={props => <StarProfile item={props.match.params.id} />}
        />
      </div>
    );
  }
}

export default App;
