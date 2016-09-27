import React, { Component } from 'react'
import FriendName from './FriendName'
import MsgHistory from './MsgHistory'
import MsgInput from './MsgInput'

class CurrentMsgs extends Component {

  constructor (props) {
    super(props)
}
  render () {
    return (
      <div>
        <FriendName currentFriendName={this.props.currentFriendData.name}/>
        <MsgHistory myData={this.props.myData} currentFriendData={this.props.currentFriendData} allMsgs={this.props.allMsgs}
          />
        <MsgInput addMsg={this.props.addMsg} fromId={this.props.myData.id}
          toId={this.props.currentFriendData.id}/>
      </div>
    )
  }
}

export default CurrentMsgs
