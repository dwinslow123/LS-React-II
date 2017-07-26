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
          <div> {this.props.postData.username}</div>
          <div> <img src={this.props.postData.thumbnailUrl}/></div>
        </div>

        <div className="post-container">
          <div> <img src={this.props.postData.imageUrl}/></div>
          <div className="likes"><img src='http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png'/>{this.props.postData.likes}</div>
          <div className="comment-bubble"><img src='http://www.haotu.net/up/3923/256/3-Circular-speech-bubble-outline.png'/></div>
          <div> {this.props.postData.timestamp}</div>
          <CommentSection comments={this.props.postData.comments} />
        </div>
      </div>
    );
  }
}

export default PostContainer;