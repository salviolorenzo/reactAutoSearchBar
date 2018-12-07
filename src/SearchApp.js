import React, { Component } from 'react';
import Terms from './Terms';
import Searchbar from './Searchbar';
import List from './List';

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      focus: ''
    };
  }

  render() {
    return (
      <div>
        <Searchbar />
        <List />
      </div>
    );
  }
}

export default SearchApp;
