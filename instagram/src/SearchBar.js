import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    const text = event.target.value.trim();
    if (event.which === 13) {
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div className="top-bar">
        <img className="instagram-logo" src="http://i.imgur.com/f2H8wAC.png"/>
        <FormControl
        className="search-bar"
        type="text"
        placeholder='&#128269; Search'
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        />
        <img className="top-right-logo" src="http://i.imgur.com/wx9qEzH.png"/>
      </div>
    );
  }
}

export default SearchBar;