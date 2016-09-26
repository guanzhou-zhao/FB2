import React, { Component } from 'react'
import FriendMsg from './FriendMsg'

class FriendList extends Component {

  constructor (props) {
    super(props)
    console.log(this.props.friends)
    console.log(this.props.msgs)
  }

  render () {
    return (
      <div>
        <h1>FriendList</h1>
        <ul>
          {this.props.friends.map((f) => {return <FriendMsg friend={f} />})}
        </ul>
      </div>
    )
  }
}

export default FriendList
