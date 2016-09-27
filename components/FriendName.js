import React, { Component } from 'react'

class FriendName extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <h2>{this.props.currentFriendName}</h2>
  }
}

export default FriendName
