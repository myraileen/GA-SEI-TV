import React, { Component } from 'react';

class ShowDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: this.props.item
         }
    }
    render() { 
        // console.log(this.state.show)
        return ( <div>Show Details</div> );
    }
}
 
export default ShowDetails;