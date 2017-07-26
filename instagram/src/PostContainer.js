import React, { Component } from 'react';
import CommentSection from './CommentSection';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="post">
        <div className="profile-container">
          <div> <strong>{this.props.postData.username}</strong></div>
          <div> <img src={this.props.postData.thumbnailUrl}/></div>
        </div>

        <div className="post-container">
          <div className="post-image"> <img src={this.props.postData.imageUrl}/></div>
            <div className="likes-bar">
            <div className="likes"><img src='http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png'/><strong>{this.props.postData.likes} likes</strong></div>
            <div><img src='http://www.haotu.net/up/3923/256/3-Circular-speech-bubble-outline.png'/></div>
            </div>
            <CommentSection comments={this.props.postData.comments} />
            <div> {this.props.postData.timestamp}</div>
        </div>
      </div>
    );
  }
}

export default PostContainer;