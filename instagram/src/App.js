import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer.js';
import postData from './application-data.js';
import CommentSection from './CommentSection.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }





  render() {
    return (
      <div className="app-container">
        <SearchBar />
        <PostListComponent posts={postData} />
        {postData.map((data, i) => {
          return <li><PostContainer postData={data} /></li>
        })}
      </div>
    );
  }
}

export default App;