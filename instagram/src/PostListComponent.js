const PostListComponent = (props) => {
  return(
    // [].map does the same thing as this -- look it up
    props.posts.map(post => {
      <img src={props.imageUrl}
    })
  )
}