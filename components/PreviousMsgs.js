import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import FriendList from './FriendList'

class PreviousMsgs extends Component {

  constructor (props) {
    super(props)
    console.log(this.props.friends);
    console.log(this.props.msgs);
  }

  render () {
    return (
      <div>
        <SearchBar />
        <FriendList friends={this.props.friends} msgs={this.props.msgs} />
      </div>
    )
  }
}

export default PreviousMsgs
