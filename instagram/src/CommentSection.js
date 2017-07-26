import React, { Component } from 'react';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: []
    };
    this.updateNewComment = this.updateNewComment.bind(this);
    this.addComment = this.addComment.bind(this);
 }
 componentDidMount() {
   this.setState({
     comments: this.props.comments
   })
 }

  updateNewComment(event) {
    this.setState({ newComment: event.target.value });
  }

  addComment(event) {
    event.preventDefault();
    console.log(this.state.newComment);
    this.setState({
      newComment: '',
      comments: this.state.comments.concat(this.state.newComment)
    });
  }

 render() {
  return (
    <div>
    <input className="addComment" onSubmit={this.addComment}
       onChange={this.updateNewComment}
       placeholder="New list item"
       value = {this.state.newComment}
    />
    <div>
    <ul>
      {this.state.comments.map((comment, i) => {
        return (
          <li><p>{comment.username}</p><p>{comment.text}</p></li>
          )
      })}
    </ul>
    </div>
    </div>
  )
 }
}

export default CommentSection;