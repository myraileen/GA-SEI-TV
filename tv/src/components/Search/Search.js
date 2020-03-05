import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // searchType: this.props.showSearch : search by 'show' or by 'star'
            searchType: 'show'
         }
    }


    render(
        //get data herek... start with list of popular shows

    ) { 
        return ( <div className={`feature ${this.state.searchType}`}>

        </div>
        );
    }
}
 
export default Search;