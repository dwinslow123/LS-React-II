import React, { Component } from 'react';
import CommentSection from './CommentSection';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div> {this.props.postData.username}</div>
        <div> <img src={this.props.postData.thumbnailUrl}/></div>
        <div> <img src={this.props.postData.imageUrl}/></div>
        <div className="likes"><img src='http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-PNG-Clipart.png'/>{this.props.postData.likes}</div>
        <div> {this.props.postData.timestamp}</div>
        <CommentSection comments={this.props.postData.comments} />
      </div>
    );
  }
}

export default PostContainer;