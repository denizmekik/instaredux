function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT'
    postId,
    autor,
    comment
  }
}

function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}

